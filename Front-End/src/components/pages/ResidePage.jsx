import React from 'react';
import {MasterLayout} from 'layout';
import Reside from 'modules/reside';

class ResidePage extends React.Component {
  render() {
    return (
      <MasterLayout>
        <Reside />
      </MasterLayout>
    );
  }
}

export default ResidePage;