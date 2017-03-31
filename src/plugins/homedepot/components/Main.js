require('normalize.css/normalize.css');
require('../styles/App.css');

import React from 'react';
import { Link } from 'react-router';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <h2>Homedepot Plugin</h2>
        <div className="notice"><Link to="/hd">Homedepot plugin</Link></div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
