import React from "react";
import {connect} from 'react-redux'
import {setLocation} from '../store/user'
import { StyleSheet, Text, View, Button, AppRegistry } from "react-native";
import { createStackNavigator } from "react-navigation";
import Header from './Header'
import axios from 'axios'

class Home extends React.Component {

  componentDidMount = async() => {
    const response = await axios.get('http://localhost:7000/api/dogs')
    navigator.geolocation.getCurrentPosition(
      (position) => {
         const longitude = position.coords.longitude
         const latitude = position.coords.latitude
         const newPosition = [latitude].push(longitude)
         this.props.setLocation(1,newPosition)
         console.log('initial position', this.props)
      },
      (error) => console.log('error',error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
   );
    // console.log('attempted check', location)
    console.log('component did mount', response.data)
    console.log('new coords should be', this.props.location)
  }


  render() {
    return (
      <View>
        <Header name={'Home!'}/>
        <Text>Home screen</Text>
        <Button onPress={() => this.props.navigation.navigate("Search")} title="Search" />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

const mapState = state => {
  return {
    location: state.location
  }
}

const mapDispatch = dispatch => {
  return {
    setLocation: (userId, coordinates) => dispatch(setLocation(userId, coordinates))
  }
}

export default connect(mapState,mapDispatch)(Home);
AppRegistry.registerComponent('Home', () => Home)
