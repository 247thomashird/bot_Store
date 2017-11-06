import React from 'react';
import './index.css';

var openmenu = [];
//setMenu(0);

// function setMenu(opennum){
//   for(var i=0;i<6;i++){
//     openmenu[i] = opennum === i ? true:false;
//   }
//   console.log('set' + opennum);
// }

export class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      openmenu : openmenu,
    }
  }
  componentDidMount(){
    this.setMenu(0);
  }
  setMenu(opennum){
    var newopenmenu = [];
    for(var i=0;i<6;i++){
      newopenmenu.push(false);
    }
    newopenmenu[opennum] = true;
    this.setState({
      openmenu: newopenmenu,
    });
  }
  render() {
    var financeTitles = ["Billing and Statements","Credit Card Problems","Credit Limit","Charges and Fees","Models"];
    return (
      <div className="menu">
        <Section heading="Financial Services" titles={financeTitles} open={this.state.openmenu[0]} onClick={() => this.setMenu(0)}></Section>
        <Section heading="Retail" titles={financeTitles} open={this.state.openmenu[1]} onClick={() => this.setMenu(1)}></Section>
        <Section heading="Travel" titles={financeTitles} open={this.state.openmenu[2]} onClick={() => this.setMenu(2)}></Section>
        <Section heading="Telcom" titles={financeTitles} open={this.state.openmenu[3]} onClick={() => this.setMenu(3)}></Section>
        <Section heading="Insurance" titles={financeTitles} open={this.state.openmenu[4]} onClick={() => this.setMenu(4)}></Section>
        <Section heading="Cross-Industry" titles={financeTitles} open={this.state.openmenu[5]} onClick={() => this.setMenu(5)}></Section>
      </div>
    )
  }
}

class Section extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: this.props.open};
  }
  handleClick(){
    this.setState({open : this.state.open ^ 1});
    this.props.onClick();
  }
  render() {
    if (this.props.open){
      return (
        <div>
        <div className="sectionHeader" onClick={() => this.handleClick()}>
          {this.props.heading}
          </div>
          {this.props.titles.map((thing) => {
            return <div className="sectionTitles" key={thing}>{thing}</div>;
          })}
        </div>
      )
    } else{
      return (
        <div>
          <div className="sectionHeader" onClick={() => this.handleClick()}>
            {this.props.heading}
          </div>
        </div>
      )
    }
  }
}
