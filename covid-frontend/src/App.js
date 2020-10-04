import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import BasicClassroom from './components/BasicClassroom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/basic_classroom" component={BasicClassroom} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
