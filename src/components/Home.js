import React from "react";
import { StyleSheet, Text, View, Button, AppRegistry } from "react-native";
import { createStackNavigator } from "react-navigation";
import Header from './Header'
import axios from 'axios'

class Home extends React.Component {

  componentDidMount = async() => {
    const response = await axios.get('http://localhost:7000/api/dogs')
    console.log('component did mount', response)}


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

export default Home;
AppRegistry.registerComponent('Home', () => Home)
