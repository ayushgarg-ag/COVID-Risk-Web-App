import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Basic_Classroom from './components/BasicClassroom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/*@Helen im assuming header's the nav bar?*/}
        <Switch>
          {/*@Helen just wrote temp paths for now; feel free to change em*/}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/basic_classroom" component={Basic_Classroom} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
