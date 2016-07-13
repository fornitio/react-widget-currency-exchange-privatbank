//require('normalize.css/normalize.css');
require('../styles/App.css');

import React from 'react';
import PrivatbankExchange from './privatbank-rates/currency-exchange-component.jsx'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="index">
        	<img src={yeomanImage} alt="Yeoman Generator" />
        </div>
        <PrivatbankExchange/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
