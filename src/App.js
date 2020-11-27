import React, { Component } from 'react';
import './App.css';
import Student from './components/Student';

class App extends Component {
  render(){
    return (
      <div className="App Container">
      <div className="row">
          <div className="col-12"> <h1 className="Heading">Leaders Board</h1></div>
      </div>
      <div className="row">
            <div className="col-12">
            <Student name="Fahad Ali" uni="UET" score={345}/>
            <Student name="Usman Malik" uni="NUST" score={341}/>
            <Student name="Sidra Batool" uni="COMSATS" score={349}/>
            <Student name="Shama Anwar" uni="FAST" score={344}/>
            </div>

            
      </div>
      </div>
    );
  }
  
}

export default App;
