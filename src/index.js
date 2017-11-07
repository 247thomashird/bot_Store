import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './header.js';
import {Menu} from './menu.js';
import {Detailspage} from './details.js';
import {Stars} from './stars.js';
import './index.css';

class Tile extends React.Component {
	render() {
		return  (
			<div className="tile">
				<img src="http://lorempixel.com/300/300/" alt="tileimg"></img>
				<Stars></Stars>
				<br />
				<h1 onClick={this.props.opendetails}>{this.props.name}</h1>
				<h2>{this.props.category}</h2>
				<h4>{Math.floor(Math.random() * 200)} Views</h4>
				<div className="channelicon chaticon"></div>
				<div className="channelicon phoneicon"></div>
				</div>
			);
	}
}

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			detailspage: false
		}
	}

	opendetails(key){
		this.setState({
			detailspage: true
		});
	}

	closedetails(){
		this.setState({
			detailspage: false
		})
	}

	render() {
		let repeating = []; 
		for(let i=0;i<4;i++){
			repeating[i]= 'Address Capture Bot';
		}
		if (this.state.detailspage){
			return (
				<span>
				<Header></Header>
				<Detailspage goback={this.closedetails.bind(this)} />
				</span>
			);
		}
		return (
				<span>
				<Header></Header>
				<Menu></Menu>
				<div className="bots">
					<div>
							{
							repeating.map((thing,index) => {
								return <Tile name={thing} key={index} category={"Travel"} opendetails={ () => {this.opendetails(thing)}} />;
							})}
					</div>
				</div>
				</span>
			);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
