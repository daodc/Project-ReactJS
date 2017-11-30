import React from 'react';
import {MasterLayout} from 'layout';
import About from 'modules/about';

class AboutPage extends React.Component {
  render() {
    return (
      <MasterLayout>
        <About />
      </MasterLayout>
    );
  }
}

export default AboutPage;