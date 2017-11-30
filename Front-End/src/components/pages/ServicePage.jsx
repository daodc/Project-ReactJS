import React from 'react';
import {MasterLayout} from 'layout';
import Service from 'modules/service';

class ServicePage extends React.Component {
  render() {
    return (
      <MasterLayout>
        <Service />
      </MasterLayout>
    );
  }
}

export default ServicePage;