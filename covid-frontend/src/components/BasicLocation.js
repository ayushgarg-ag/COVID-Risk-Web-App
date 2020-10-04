import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BasicClassroom from './BasicClassroom'

function BasicLocation() {
  return (
    <>
    <h1>BasicLocation</h1>
    <Router>
     <div>
     <Link to="/basic/classroom">Basic Classroom</Link>
       <Switch>
         <Route path="/basic/classroom" component={BasicClassroom}>
         </Route>
       </Switch>
     </div>
   </Router>
    </>
  );
}


export default BasicLocation;
