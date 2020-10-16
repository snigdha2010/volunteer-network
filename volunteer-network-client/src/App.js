import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import NoElementFound from './components/NoElementFound/NoElementFound';
import AdminAddProgram from './components/AdminAddProgram/AdminAddProgram';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [signedInUser, setSignedInUser] = useState({})
  return (

  <UserContext.Provider value={[signedInUser, setSignedInUser]}>
    <Router>
      <Switch>
        <Route exact path = '/'>
          <LandingPage/>
        </Route>
        <Route path = '/addProgram'>
          <AdminAddProgram/>
        </Route>
        <Route path = '/login'>
          <Login/>
        </Route>
        <PrivateRoute path ='/register/:id'>
          <Registration/>
        </PrivateRoute>
        <Route path = '*'>
          <NoElementFound/>
        </Route>
      </Switch> 
    </Router>
  </UserContext.Provider>
  );
}

export default App;
