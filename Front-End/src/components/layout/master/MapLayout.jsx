import React from 'react';
import Header from 'layout/partials/HeaderMap.jsx';

class MapLayout extends React.Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    return (
      <div className="wrapper-container">
        <Header/>
        <main className="main-container">
          {childrenWithProps}
        </main>
      </div>
    );
  }
}

export default MapLayout;
