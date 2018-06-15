import React from "react";
import { StyleSheet, Text, View, AppRegistry, Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation";
import Header from './Header'
import MapView from 'react-native-maps'

class Search extends React.Component {

render () {
  return (
   <View style={styles.container}>
    <MapView style={styles.map}
  initialRegion = {
    {
      latitude:40.7049444,
      longitude: -74.0091771,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  } />
  <Text>Search here!</Text>
  </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2-200
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Search;

AppRegistry.registerComponent('Search', () => Search)
