import {createStackNavigator} from 'react-navigation'
import Home from './components/Home'
import Search from './components/Search'
import React from 'react';

const RootNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      headerTitle: 'Search'
    }
  }
})

export default RootNavigator
