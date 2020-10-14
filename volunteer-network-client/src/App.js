import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <LandingPage/>
      <Switch>
        <Route to = ''>
          
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
