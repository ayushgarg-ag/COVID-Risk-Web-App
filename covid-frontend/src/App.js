import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import BasicLocation from './components/BasicLocation'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
       <div>
           <ul>
             <li>
               <Link to="/basic">Basic Classroom</Link>
             </li>
           </ul>
         <Switch>
           <Route path="/basic" component={BasicLocation}>
           </Route>
         </Switch>
       </div>
     </Router>
    </div>
  );
}


export default App;
