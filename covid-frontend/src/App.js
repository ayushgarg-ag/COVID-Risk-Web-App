import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import BasicClassroom from './components/BasicClassroom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/basic-classroom" component={BasicClassroom} /> 
          <Route path="/about-us" component={About} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
