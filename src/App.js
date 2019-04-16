import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props)
{super(props);
  this.state = {
    currentInput: "",
    placeInput:"",
   showing: false
  }
 
}
inputChanged = (event) => {
  let valueFromInput = event.target.value;
  this.setState( {currentInput: valueFromInput } );
}

placeChanged = (event) => {
  let valueFromPlace = event.target.value;
  this.setState( {placeInput: valueFromPlace } );
}

  render() {
    return (
      
      <div className="App">
      <h3>Name</h3>
      <input onChange={this.inputChanged} placeholder="type your name..."></input>
      <h3>Place</h3>
      <input onChange={this.placeChanged} placeholder="type a place..."></input>
      
      {/* <h3>Here is it</h3> */}
       <p>My name is " {this.state.currentInput}". </p>
         Today, <span></span> {this.state.currentInput} wants to go to 
         "{this.state.placeInput}"
       <name  text={this.state.currentInput}></name>
       <div>
         <br></br>
             <button onClick={() => this.setState({ showing: !this.state.showing })}>Show the story</button>
            
             { this.state.showing ? <div> My name is {this.state.currentInput}, Today, <span>{this.state.currentInput} <span> </span>wants to go to "{this.state.placeInput}</span>
              </div>:null}
         </div> 

       
       </div>
  );
  }
}





export default App;