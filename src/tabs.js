import React from 'react';
import './index.css';

export class Tabs extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tabtitles: ["Overview", "Usage", "Flow Diagram", "Insights", "Q&A"],
			activetab: "Overview",
			tabcontents: [<Overview></Overview>]
		}
	}

	settoactive(thing){
		this.setState({
			activetab: thing
		});
	}

	render(){
		return (
			<div className="lowerhalf">
				<div className="tabs">
					{this.state.tabtitles.map((title) => {
						if (title !== this.state.activetab){

						 return (<div className="tab" key={title} onClick={()=>{this.settoactive(title)}}>{title}
						</div>)
						} else{
							return (<div className="tab tab-active" key={title}>{title}
						</div>)
						}
					})}
				</div>
				{this.state.tabcontents}
			</div>
			)
	}
}

class Overview extends React.Component{
	render(){
		return(
			<div className="overview"><b>Author:</b> Sam Smith<br />
			<b>Industries:</b> Travel <br />
			<b>Available for:</b> Web<br />
			<b>Supported channels:</b> Web, iOS, Android, Facebook Messenger<br />
			<br />
			<b>Description</b><br />
			The Baggage Allowance Bot takes care of the mundane task of responding to your customers’ inquiries about their personal baggage allowance for their specific flight. It also supports payments inside the chat window so that your customers can purchase additional baggage allowance without having to leave the chat experience.
			<br />	
			This bot is intended specifically for airlines.
			</div>
			)
	}
}