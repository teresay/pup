import React from "react";
import {connect} from 'react-redux'
import {setLocation} from '../store/user'
import { StyleSheet, Text, View, Button, AppRegistry } from "react-native";
import { createStackNavigator } from "react-navigation";
import Header from './Header'
import axios from 'axios'
// import RootNavigator from '../navigator'

class Home extends React.Component {


  componentDidMount() {
    console.log('in compondid moujt')
    navigator.geolocation.getCurrentPosition(
      position => {
        const nlongitude = Number(position.coords.longitude);
        const nlatitude = Number(position.coords.latitude);
        const newPosition = [nlatitude, nlongitude];
        if (this.props.setLocation) {
          this.props.setLocation(1);
        }
        console.log('new position is', newPosition, this.props.location)
      }
    );
    console.log('finished component did mount')
    console.log("initial position", this.props);
  }


  render() {
    const {navigation, screenProps} = this.props
    return (
      <View style={styles.container}>
        <Header name={'Home!'}/>
        <Text>Home screen</Text>
        <Button onPress={() => navigation.navigate("Search")} title="Search" />
      </View>
    );
  }
}

// const RootNavigator = createStackNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       headerTitle: 'Home',
//     }
//   },
//   Search: {
//     screen: Search,
//     navigationOptions: {
//       headerTitle: 'Search'
//     }
//   }
// })

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    position: 'absolute'
  }
});

const mapState = state => {
  return {
    location: [1,1]
  }
}

const mapDispatch = dispatch => {
  return {
    setLocation: (userId) => dispatch(setLocation(userId))
  }
}

export default connect(mapState,mapDispatch)(Home);
AppRegistry.registerComponent('Home', () => Home)
