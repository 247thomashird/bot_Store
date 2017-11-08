import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './header.js';
import {Menu} from './menu.js';
import {Detailspage} from './details.js';
import {Stars} from './stars.js';
import './index.css';

class bot {
	constructor(title, stars){
		this.title = title;
		this.stars = stars;
		this.photo = "http://lorempixel.com/300/300/";
		this.category = "Travel";
	}
}

class Tile extends React.Component {
	render() {
		return  (
			<div className="tile">
				<img src={this.props.bot.photo} alt="tileimg"></img>
				<Stars numstars={this.props.bot.stars}></Stars>
				<br />
				<h1 onClick={this.props.opendetails}>{this.props.bot.title}</h1>
				<h2>{this.props.bot.category}</h2>
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
		repeating[0] = new bot("Address Capture bot",4);
		repeating[1] = new bot("Not address capture",5);
		repeating[2] = new bot("also not address capture",3);
		repeating[3] = new bot("still not address capture",5);

		if (this.state.detailspage){
			return (
				<span>
				<Header/>
				<Detailspage goback={this.closedetails.bind(this)} />
				</span>
			);
		}
		return (
				<span>
				<Header/>
				<Menu />
				<div className="bots">
					<div>
							{
							repeating.map((bot,index) => {
								return <Tile bot={bot} key={index} opendetails={ () => {this.opendetails(bot)}} />;
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
