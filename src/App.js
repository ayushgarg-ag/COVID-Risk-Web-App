import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Header } from './components/Header';
import About from './components/About';
import BasicClassroom from './components/BasicClassroom';
import CalculateHome from './components/CalculateHome';
// import LocationsBasic from './components/LocationsBasic';
// import LocationsAdvanced from './components/LocationsAdvanced';
import Results from './components/Results';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/*@Helen just wrote temp paths for now; feel free to change em*/}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/basic-classroom" component={BasicClassroom} />
          <Route path="/calculate-home" component={CalculateHome} />
          {/* <Route path="/locations-basic" component={LocationsBasic} />
          <Route path="/locations-advanced" component={LocationsAdvanced} /> */}
          <Route path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
