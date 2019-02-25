import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import ContentJobs from './components/JobListed/ContentJobs'
import About from './components/pages/About';
// import authenthication from './components/Authentication/authenticate'



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" render={props => (
          <>
            <About />
          </>
        )}  />
        <Route path="/jobs" render={ props => (
        <>
          <ContentJobs />
          </>
        )} />
      </div>
      </Router>
    );
  }
}

export default App;
