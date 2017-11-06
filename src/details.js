import React from 'react';
import {Stars} from './stars.js';
import {Tabs} from './tabs.js';
import './index.css';

export class Detailspage extends React.Component{
	render(){
		return (
			<div>
				<Backbutton goback={this.props.goback} />
				<Rightvleft />
				<Tabs />
			</div>
			)
	}
}

export class Backbutton extends React.Component {
	render() {
		return (
			<div className="backbutton" onClick={this.props.goback}>
				<div className="backbutton-arrow"> {"<"}
				</div>
				<div className="backbutton-text"> Browse Bots
				</div>
			</div>
			)
	}
}

class Rightvleft extends React.Component{
	render() {
		return (
			<div className="Rightvleft">
				
				<div className="left">
					<img src="http://www.lorempixel.com/250/250/" className="detailimg" alt="randomtext" />
					<div className="copyright">
						&copy; 2017 [24]7.ai
					</div>
				</div>
				<Right />
			</div>
			)
	}
}

class Right extends React.Component{
	render(){
		return (
			<div className="right">
				<div className="details-title">
				Address Capture Bot
				</div>
				<div className="details-category">
				Travel
				</div>
				<Stars />
				<div className="details-description">
				This bot can be used for baggage allowance queries and for payment capture. Includes inline validation and regex error handling.
				</div>
				<div className="details-button">
				Get This Bot
				</div>
				<div className="details-button">
				Share
				</div>
			</div>
			)
	}
}


