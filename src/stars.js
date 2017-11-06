import React from 'react';
import './index.css';

export class Stars extends React.Component {
	render(){
		var numstars = Math.floor(Math.random()*4 + 2);
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