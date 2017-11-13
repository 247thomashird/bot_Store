import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './header.js';
import {Menu} from './menu.js';
import {Detailspage} from './details.js';
import {Stars} from './stars.js';
import './index.css';

class bot {
	constructor(title, stars, channels){
		this.title = title;
		this.stars = stars;
		this.photo = "http://lorempixel.com/300/300/";
		this.category = "Travel";
		this.channels = []; 
		this.channels[0] = channels[0] ? <div className="channelicon chaticon" />:""; //chat
		this.channels[1] = channels[1] ? <div className="channelicon phoneicon" />:"";
		this.views = Math.floor(Math.random()*200 + 50) + " Views";
		this.numreviews = Math.floor(Math.random() * 50);
	}
}

let repeating = []; 
repeating[0] = new bot("Address Capture bot",4,[true,false]);
repeating[1] = new bot("Not address capture",5,[false,true]);
repeating[2] = new bot("also not address capture",3,[true,true]);
repeating[3] = new bot("still not address capture",5,[true,false]);

class Tile extends React.Component {
	render() {
		return  (
			<div className="tile">
				<img src={this.props.bot.photo} alt="tileimg"></img>
				<Stars numreviews={this.props.bot.numreviews} numstars={this.props.bot.stars}></Stars>
				<br />
				<h1 onClick={this.props.opendetails}>{this.props.bot.title}</h1>
				<h2>{this.props.bot.category}</h2>
				<h4>{this.props.bot.views}</h4>
				{this.props.bot.channels[0]}
				{this.props.bot.channels[1]}
			</div>
		);
	}
}


class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			detailspage: false,
			curbot: false
		}
	}

	opendetails(bot){
		this.setState({
			detailspage: true,
			curbot: bot
		});
	}

	closedetails(){
		this.setState({
			detailspage: false,
			curbot: false
		})
	}

	render() {
		if (this.state.detailspage){
			return (
				<span>
				<Header/>
				<Detailspage curbot={this.state.curbot} goback={this.closedetails.bind(this)} />
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
