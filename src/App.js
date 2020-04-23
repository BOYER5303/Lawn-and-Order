import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header/Header'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' exact component= {Auth}/>
        <Route path='/dashboard' component = {Dashboard}/>
      </Switch>
      
    </div>
  );
}

export default App;
