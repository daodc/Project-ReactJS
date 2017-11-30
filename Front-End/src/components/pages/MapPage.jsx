import React from 'react';
import {MapLayout} from 'layout';
import Map from 'modules/map';

class MapPage extends React.Component {
  render() {
    return (
      <MapLayout>
        <Map />
      </MapLayout>
    );
  }
}

export default MapPage;