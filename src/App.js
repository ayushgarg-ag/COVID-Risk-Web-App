import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Header } from './components/Header';
import About from './components/About';
import BasicClassroom from './components/BasicClassroom';
import AdvancedClassroom from './components/AdvancedClassroom';
import BasicDining from './components/BasicDining';
import AdvancedDining from './components/AdvancedDining';
import BasicCommonroom from './components/BasicCommonroom';
import AdvancedCommonroom from './components/AdvancedCommonroom';
import CalculateHome from './components/CalculateHome';
import Results from './components/Results';
import CalculateClassroom from './components/CalculateClassroom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/basic-classroom" component={BasicClassroom} />
          <Route path="/advanced-classroom" component={CalculateClassroom} /> {/* CHANGE THIS BACK TO AdvancedClassroom */}
          <Route path="/basic-dining" component={BasicDining} />
          <Route path="/advanced-dining" component={AdvancedDining} />
          <Route path="/basic-commonroom" component={BasicCommonroom} />
          <Route path="/advanced-commonroom" component={AdvancedCommonroom} />
          <Route path="/calculate-home" component={CalculateHome} />
          <Route path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
