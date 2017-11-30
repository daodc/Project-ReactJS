import React from 'react';

class Map extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount(){
    // Connect the initMap() function within this class to the global window context,
    // so Google Maps can invoke it
    window.initMap = this.initMap;
    // Asynchronously load the Google Maps script, passing in the callback reference
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyCJAVSIBvCrTu_IRWyWK10MeJ4Nt-vaU14&libraries=places&callback=initMap');
    loadJS('/src/components/modules/map/main.js');
    loadJS('/src/components/modules/map/jquery.js');
  }

  initMap(){
    $('#map').css({
      'height' : $(window).height() - 68
    });
    $(window).on('resize',function(){
      $('#map').css({
        'height' : $(window).height() - 68
      });
    });
    $('.gd-bt-tog-lct').on('click',function(){
      $('.gd-container-map').toggleClass('active');
    })
    var map = new google.maps.Map(document.getElementById('map'), {
      mapTypeControl: false,
      center: {
        lat: 16.0544068, 
        lng: 108.20216670000002 // Da Nang City
      },
      zoom: 13
    });

    new TmpGoogleMap(map);
  }

  render() {
    return (
      <div id="gd-wrapper-map">
        <div className="gd-container-map pt68">
          <div className="gd-left-map">
            <div className="gd-top-left-m">
              <ul className="nav nav-tabs gd-tab-map">
                <li className="active gd-item-m2"><a href="#" className="gd-bt-tab">Tìm đường</a></li>
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane active" id="search-tab">
                <div className="gd-bt-find-way">
                  <div className="gd-find-way-form">
                    <span className="gd-marker-1">A</span>
                    <fieldset className="gd-search-map-form">
                      <div className="form-group">
                        <input type="text" id="origin-input" className="gd-search-ip" placeholder="Nhập thông tin cần tìm" />
                      </div>
                    </fieldset>
                  </div>
                  <div className="gd-find-way-form mt10">
                    <span className="gd-marker-1">B</span>
                    <fieldset className="gd-search-map-form">
                      <div className="form-group">
                        <input type="text" id="destination-input" className="gd-search-ip" placeholder="Nhập thông tin cần tìm" />
                      </div>
                    </fieldset>
                  </div>
                  <div className="gd-find-way-form">
                    <div id="mode-selector" className="controls">
                      <input type="radio" name="type" id="changemode-walking" defaultChecked="checked" />
                      <label htmlFor="changemode-walking">Walking</label>

                      <input type="radio" name="type" id="changemode-transit" />
                      <label htmlFor="changemode-transit">Transit</label>

                      <input type="radio" name="type" id="changemode-driving" />
                      <label htmlFor="changemode-driving">Driving</label>
                    </div>

                    <select id="categories-search">
                      <option value="food">Ẩm thực</option>
                      <option value="lodging">Khách sạn</option>
                      <option value="atm">ATM</option>
                      <option value="cafe">Cà phê</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gd-main-container-map">
            <span className="gd-bt-tog-lct"></span>
            <div className="gd-map-act">
              <div className="img-map">
                <div id="map">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}
export default Map;