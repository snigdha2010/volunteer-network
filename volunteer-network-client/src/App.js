import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import NoElementFound from './components/NoElementFound/NoElementFound';
import AdminAddProgram from './components/AdminAddProgram/AdminAddProgram';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import EventTask from './components/EventTask/EventTask';
import Header from './components/Header/Header';

export const UserContext = createContext();

function App() {
  const [signedInUser, setSignedInUser] = useState({})
  return (
  <UserContext.Provider value={[signedInUser, setSignedInUser]}>
  <div className='home'>
    <Router>
      <Header/>
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
        <Route path = '/event-task'>
          <EventTask/>
        </Route>
        <Route path = '*'>
          <NoElementFound/>
        </Route>
      </Switch> 
    </Router>
    </div>
  </UserContext.Provider>

  );
}

export default App;
