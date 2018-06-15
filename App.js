import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import Home from './src/components/Home'
import Search from './src/components/Search'
import Header from './src/components/Header'



const App = () => {

  return (
    <Home />
  )
}

// export default App

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

AppRegistry.registerComponent('pup', () => App)



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

