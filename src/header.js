import React from 'react';
import './index.css';

export class Header extends React.Component {
  render(){
    return (
      <div className="header">
      <div className="pageTitle">Bot Repository</div>
      <input className="search" type="text" placeholder="Search Bots..."></input>
      <div className="profileAndSupport">
        <Support></Support>
        <Profile></Profile>
      </div>
      </div>
    );
  }
}

class Profile extends React.Component {

  render() {
    return (
      <div className="Profile">
        <div className="profileImage"></div>
        <div className="profileText">John Hopper</div>
        <Triangle></Triangle>
      </div>
    )
  }
}
class Support extends React.Component {
  render (){
    return (
      <div className="Profile">
        <div className="profileImage"></div>
        <div className="profileText">Support</div>
        <Triangle></Triangle>
      </div>
    )
  }
}

class Triangle extends React.Component {
  render() {
    return (
      <div className="Triangle"></div>
    )
  }
}
