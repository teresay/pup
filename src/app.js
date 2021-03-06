import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import Home from './components/Home'
import Search from './components/Search'
import Login from './components/Login'
import {Provider} from 'react-redux'
import store from './store/index'
// import { NativeRouter, Route, Link } from 'react-router-native'
import RouterComponent from './router'


class App extends React.Component {
render() {
  const screenProps = {
    user: {
      name: 'test'
    }
  }
  return (
    <Provider store={store}>
    {/* <NativeRouter> */}
    <View>
      <RootNavigator screenProps={screenProps} />
    <RouterComponent/>
    </View>
    {/* </NativeRouter> */}
    </Provider>
  )
}}

export default App

const RootNavigator = createStackNavigator({
  Main: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Sign In',
    }
  },
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

// // export {RootNavigator}

AppRegistry.registerComponent('pup', () => App)



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

