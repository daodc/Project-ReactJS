 /**
	* @constructor
 */
// Constructor
function TmpGoogleMap(map) {
	this.map = map;
	this.markers = new Array();
	this.infoWindow = new google.maps.InfoWindow();
	this.originPlaceId = null;
	this.destinationPlaceId = null;
	this.travelMode = 'WALKING';
	var categoriesSearch = document.getElementById('categories-search');
	var originInput = document.getElementById('origin-input');
	var destinationInput = document.getElementById('destination-input');
	var searchInput = document.getElementById('search-input');
	var modeSelector = document.getElementById('mode-selector');
	this.directionsService = new google.maps.DirectionsService;
	this.directionsDisplay = new google.maps.DirectionsRenderer;

	var cityBounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(15.664848, 108.037956),
			new google.maps.LatLng(16.367361, 108.855496));

	var originAutocomplete = new google.maps.places.Autocomplete(
			originInput, {
				bounds : cityBounds,
				placeIdOnly: true,
				strictBounds: true
			});
	var destinationAutocomplete = new google.maps.places.Autocomplete(
			destinationInput, {
				bounds : cityBounds,
				placeIdOnly: true,
				strictBounds: true
			});
	var searchAutocomplete = new google.maps.places.Autocomplete(
			searchInput, {
				bounds : cityBounds,
				placeIdOnly: false,
				strictBounds: true
			});

	this.setupClickListener('changemode-walking', 'WALKING');
	this.setupClickListener('changemode-transit', 'TRANSIT');
	this.setupClickListener('changemode-driving', 'DRIVING');

	this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
	this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');
	this.setupSearchListener(searchAutocomplete);

	/*this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchInput);
	this.map.controls[google.maps.ControlPosition.LEFT_TOP].push(originInput);
	this.map.controls[google.maps.ControlPosition.LEFT_TOP].push(destinationInput);
	this.map.controls[google.maps.ControlPosition.LEFT_TOP].push(modeSelector);
	this.map.controls[google.maps.ControlPosition.LEFT_TOP].push(categoriesSearch);*/

	this.setupCategoriesSearchListener(categoriesSearch);

	// Load all places base category search when first time load
	var me = this,
		service = new google.maps.places.PlacesService(me.map);
	service.getDetails({
		placeId : "ChIJEyolkscZQjERh2RDRKDjFPw" //Da Nang Id
	},function(results,status){
		me.clearMap();
		if (status == 'OK'){
			me.searchByText(results,[categoriesSearch.value],1000)
		}
	})
}

// Sets a listener on a radio button to change the filter type on Places
// Autocomplete.
TmpGoogleMap.prototype.setupClickListener = function(id, mode) {
	var radioButton = document.getElementById(id);
	var me = this;
	radioButton.addEventListener('click', function() {
		me.travelMode = mode;
		me.route();
	});
};

// Sets a listener on a categories select 
TmpGoogleMap.prototype.setupCategoriesSearchListener = function(node){
	var me = this;
	node.onchange = function(){
		var service = new google.maps.places.PlacesService(me.map);
		service.getDetails({
			placeId : "ChIJEyolkscZQjERh2RDRKDjFPw" //Da Nang Id
		},function(results,status){
			me.clearMap();
			if (status == 'OK'){
				me.searchByText(results,[node.value],1000)
			}
		})
	}
}

// Clear on direction and marker that currently drawing on the map
TmpGoogleMap.prototype.clearMap = function(){
	for (var counter = 0; counter < this.markers.length; counter++ ) {
		this.markers[counter].setMap(null);
	}
	this.markers.length = 0;
	this.directionsDisplay.setMap(null);
}

// Add listener to Search Box and two buttons in Infowindow
TmpGoogleMap.prototype.setupSearchListener = function(searchBox) {
	var me = this,
		infowindow = new google.maps.InfoWindow(),
		current_place;
	$('#map').on('click','.tmp_find_direction',function(event){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
				var place_id = $(event.target).data('id');
				if (place_id){
					me.clearMap();
					var service = new google.maps.places.PlacesService(me.map);
					service.getDetails(
						{
							placeId: place_id
						},function(results,status){
							if (status === 'OK') {
								me.route(pos,{'placeId': place_id});
							}else{
								alert('Directions request failed due to ' + status);
							}
						}
					)
				}else{
					alert('Cannot get your destination location');
				}
			}, function() {
				alert('Cannot get your current location');
			});
		}else{
			alert('Cannot get your current location');
		}
	});
	$('#map').on('click','.tmp_find_near_by',function(){
		if ($(event.target).data('id')){
			var service = new google.maps.places.PlacesService(me.map);
			me.clearMap();
			service.getDetails({
				placeId : $(event.target).data('id')
			},function(results,status){
				if (status == 'OK'){
					me.createMarkerAndInfoWindow(results,'OP');
					me.searchByType(results,'',500);
				}else{
					alert ('Details request failed due to ' + status);
				}
			});
		}
	});
	searchBox.addListener('place_changed', function() {		
		var place = searchBox.getPlace();
		console.log(place);
		if (place.length == 0) {
			return;
		}
		me.clearMap();
		if (place.place_id) current_place = place;

		if (place.geometry.viewport) {
			me.map.fitBounds(place.geometry.viewport);
		} else {
			me.map.setCenter(place.geometry.location);
			me.map.setZoom(17);
		}

		me.createMarkerAndInfoWindow(place,'OP');
	});

};

//Retrieve place, types, radius and return list all Places have types near place in radius(metter)
TmpGoogleMap.prototype.searchByType = function(place,types,radius){
	var me = this,
		service = new google.maps.places.PlacesService(me.map);
	if (types == ''){
		types = new Array();
		var	except = ['administrative_area_level_1','administrative_area_level_2','administrative_area_level_3','administrative_area_level_4','administrative_area_level_5','establishment','premise','route','street_address','street_number','geocode','sublocality','sublocality_level_1','sublocality_level_2','sublocality_level_3','sublocality_level_4','sublocality_level_5','point_of_interest','country','intersection',"political","locality"];
		for (var counter = 0; counter < place.types.length; counter++){
			if (except.indexOf(place.types[counter]) == -1) types.push(place.types[counter]);
		}
	}
	service.nearbySearch({
		location: place.geometry.location,
		radius: radius
	}, callback);

	function callback(results, status,pagination){
		for (var i = 0; i < results.length; i++) {
			me.createMarkerAndInfoWindow(results[i],'CLS');
		}
		if (pagination){
			if (pagination.hasNextPage){
				pagination.nextPage(callback);
			}
		}
	}
}

//Retrieve place, types, radius and return list all Places have text near place in radius(metter)
TmpGoogleMap.prototype.searchByText = function(place,types,radius){
	var me = this,
		service = new google.maps.places.PlacesService(me.map);
	service.textSearch({
		location: place.geometry.location,
		radius: radius,
		query: types
	}, callback);

	function callback(results, status,pagination){
		for (var i = 0; i < results.length; i++) {
			me.createMarkerAndInfoWindow(results[i],'CLS');
		}
		if (pagination){
			if (pagination.hasNextPage){
				pagination.nextPage(callback);
			}
		}
	}
}

// Draw new marker and infowindow about place, if open_state == 'OP', infowindow will automatic open.
TmpGoogleMap.prototype.createMarkerAndInfoWindow = function(place,open_state){
	var me = this;
	if (place.place_id){
		var marker,
			infowindow = new google.maps.InfoWindow();
		marker = new google.maps.Marker({
			map: me.map
		});
		me.markers.push(marker);
		marker.setPlace({
			placeId: place.place_id,
			location: place.geometry.location
		});
		marker.setVisible(true);
		marker.addListener('click',function(){
			infowindow.open(me.map,marker);
		});
		// Set Infowindow Content
		var infowindowContent = 
		'<div class="tmp_info_content">' +
			'<div class="tmp_thumb" style="{{placeThumbnail}}">' +
				'{{placeRating}}' +
			'</div>' +
			'<div class="tmp_content">' +
				'<h2 class="tmp_title">' + place.name + '</h2>' +
				'<address class="tmp_address">{{placeAddress}}</address>' +
			'</div>' +
			'<div class="tmp_control">{{buttonFindDirection}}<button type="button" class="tmp_button tmp_find_near_by" data-id="' + place.place_id + '">Xung quanh</button></div>'
		'</div>';
		var address = '';
		if (typeof(place.formatted_address) !== 'undefined'){
			address = place.formatted_address;
		}else{
			if (typeof(place.vicinity) !== 'undefined'){
				address = place.vicinity;
			}
		}
		infowindowContent = infowindowContent.replace('{{placeAddress}}',address);
		
		var buttonFindDirection = '';
		if (place.place_id){
			buttonFindDirection += '<button type="button" class="tmp_button tmp_find_direction" data-id="' + place.place_id + '">Tìm đường</button>';
		}
		infowindowContent = infowindowContent.replace('{{buttonFindDirection}}',buttonFindDirection);
		var placeRating = '';
		if (place.rating){
			placeRating += '<span class="tmp_rating">';
			placeRating += place.rating.toLocaleString(undefined,{minimumFractionDigits: 1});
			placeRating += '</span>';
		}
		infowindowContent = infowindowContent.replace('{{placeRating}}',placeRating);
		var placeThumbnail = '';
		if (typeof(place.photos) !== 'undefined'){
			if (place.photos.length){
				placeThumbnail += 'background-image:url(';
				placeThumbnail += place.photos[0].getUrl({
					maxWidth : 400,
					maxHeight: 300,
				});
				placeThumbnail += ');'
			}
		}
		infowindowContent = infowindowContent.replace('{{placeThumbnail}}',placeThumbnail);
		infowindow.setContent(infowindowContent);
		if (open_state == 'OP') infowindow.open(me.map,marker);
	}
}

// Add listener to Destination and Origin Input.
// Autocomplete
TmpGoogleMap.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
	var me = this;
	autocomplete.addListener('place_changed', function() {
		var place = autocomplete.getPlace();
		if (!place.place_id) {
			window.alert("Please select an option from the dropdown list.");
			return;
		}
		if (mode === 'ORIG') {
			me.originPlaceId = place.place_id;
		} else {
			me.destinationPlaceId = place.place_id;
		}
		me.route();
	});

};

// Draw Route From Origin to Destionation
TmpGoogleMap.prototype.route = function(origin,destination) {
	var me = this;

	if (typeof(origin) == 'undefined'){
		if (!this.originPlaceId){
			return
		}
		var origin = {'placeId': this.originPlaceId}
	}

	if (typeof(destination) == 'undefined'){
		if (!this.destinationPlaceId){
			return
		}
		var destination = {'placeId': this.destinationPlaceId}
	}

	me.clearMap();
	me.directionsDisplay.setMap(me.map);

	me.directionsService.route({
		origin: origin,
		destination: destination,
		travelMode: this.travelMode
	}, function(response, status) {
		if (status === 'OK') {
			var centerPoint = response.routes[0].overview_path[Math.floor(response.routes[0].overview_path.length / 2)];
			var kmWindow = new google.maps.InfoWindow({
				content: "Distance: <strong>" + response.routes[0].legs[0].distance.text + "</strong>",
				position: {
					lat: centerPoint.lat(),
					lng: centerPoint.lng()
				}
			});
			kmWindow.open(me.map);
			me.directionsDisplay.setDirections(response);
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
};