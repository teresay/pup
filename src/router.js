import React from 'react'
import {Scene, Router} from 'react-native-router-flux'
import Login from './components/Login'
import Search from './components/Search'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
      <Scene key="login" component={Login} title="Sign In" initial/>
      <Scene key="search" component={Search} title="Search"/>
      </Scene>
    </Router>
  )
}


export default RouterComponent
