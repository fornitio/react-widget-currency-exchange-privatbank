//require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PrivatbankExchange from './currency-exchange-component.jsx'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <PrivatbankExchange/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
