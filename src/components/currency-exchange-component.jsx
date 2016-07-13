'use strict';
import React from 'react';
require('bootstrap/dist/css/bootstrap.min.css');
const config = {
	method : 'GET',
	mode: 'cors'
}
const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

class PrivatbankExchange extends React.Component {
  constructor() {
  	super();
  	this.state = {curr: 'Loading Currencies from the Bank...'};
  	fetch(url, config).then(res=>res.json()).then((res)=>{
  		this.setState({curr: res});
  	}).catch(e=>{console.log('fetch error:', e)});
  }
  render() {
  	const dd = [1,2,3,4,5,6,7]
    
    return (
      <div className="conteiner-fluid thumbnail">
      		{JSON.stringify(this.state.curr, null,2)}
      </div>
    );
  }
}

export default PrivatbankExchange;
