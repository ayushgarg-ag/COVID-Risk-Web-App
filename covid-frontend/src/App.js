import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
<<<<<<< HEAD
import Home from './components/Home';
import BasicClassroom from './components/BasicClassroom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
=======
import Basic_Classroom from './components/BasicClassroom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> c9bbb55c68bc8d1e363caaa06f0b59f11bcdb74a

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/*@Helen im assuming header's the nav bar?*/}
        <Switch>
<<<<<<< HEAD
          <Route path="/" exact component={Home} />
          <Route path="/basic-classroom" component={BasicClassroom} /> 
          <Route path="/about-us" component={About} /> 
=======
          {/*@Helen just wrote temp paths for now; feel free to change em*/}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/basic_classroom" component={Basic_Classroom} /> 
>>>>>>> c9bbb55c68bc8d1e363caaa06f0b59f11bcdb74a
        </Switch>
      </Router>
    </div>
  );
}

export default App;
