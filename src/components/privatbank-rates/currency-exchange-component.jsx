'use strict';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import consts from './constants';

class PrivatbankExchange extends React.Component {
	constructor() {
		super();
		this.state = {curr: ['Loading Rates from the Bank...']};
		fetch(consts.url, consts.config).then(res=>res.json()).then((res)=>{
			this.setState({curr: res});
		}).catch(e=>{this.setState({curr: e})});
	}
    generateTr(el) {
    	const tdStyle ={
    		width: Math.floor(100/Object.keys(el).length)+'%',
    		marginLeft: '2px'
    	}
    	const round = (x) => !isNaN(parseFloat(x)) && isFinite(x) ? Math.round(+x*100)/100 : x;
    	return (
    		<tr key={Math.random()}>
    			{Object.keys(el).map(key=>{return(
    				<td key={Math.random()} title={key} style={tdStyle}>
    					{round(el[key])}
    				</td>
    				)})
    			}
    		</tr>
    	)
    }
	render() {
		const currentDate = (new Date()).toUTCString();
		return (
			<div style={consts.containerStyle}>
				<div style={consts.headerStyle}>
					<img src={consts.privatBankImg} style={consts.imgStyle}/>
					<span style={consts.titleStyle}>Privatbank Rates</span>
				</div>
				<div style={consts.innerDiv}>
					<table className="table-bordered" style={consts.tableStyle}>
						<tbody>{this.state.curr.map(el=>this.generateTr(el))}</tbody>
					</table>
					<span>{currentDate}</span>
				</div>
			</div>
		);
	}
}

export default PrivatbankExchange;
