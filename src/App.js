import React from 'react'
//import './App.scss'
import {Route, Switch} from 'react-router-dom'
import Header from './Components/Header/Header'
import Auth from './Components/Auth/Auth'
import Dash from './Components/Dash/Dash'
import Form from './Components/Form/Form'
import Calendar from './Components/Calendar/Calendar'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Switch>
        <Route path='/form' component={Form}/>
        <Route path='/dash' component={Dash}/>
        <Route path='/calendar' component={Calendar}/>
        <Route exact path='/' component={Auth}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
  )
}

export default App