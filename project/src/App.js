import React, { Component } from 'react';
import './App.css';
import ContentJobs from './components/JobListed/ContentJobs'
// import authenthication from './components/Authentication/authenticate'



class App extends Component {
  render() {
    return (
      <div className="App">
        <ContentJobs />

      </div>
    );
  }
}

export default App;
