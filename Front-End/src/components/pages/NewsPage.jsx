import React from 'react';
import {MasterLayout} from 'layout';
import News from 'modules/news';

class NewsPage extends React.Component {
  render() {
    return (
      <MasterLayout>
        <News />
      </MasterLayout>
    );
  }
}

export default NewsPage;