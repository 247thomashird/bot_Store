import React from 'react';
import './index.css';

export class Stars extends React.Component {
	static defaultProps = {
		numstars: 0,
	}
	render(){
		var numstars =0;
		if (this.props.numstars !== 0){
			numstars = this.props.numstars;
		} else{
			numstars = Math.floor(Math.random()*4 + 2);
		}
		var starstring = "";
		for(let i=0;i<5;i++){
			starstring += i<numstars ? '★ ':'☆ ';
		}
		return (
			<div className="stars">
				{starstring}
			</div>
		)
	}
}