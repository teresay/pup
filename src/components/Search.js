import React from "react";
import { StyleSheet, Text, View, AppRegistry, Dimensions } from "react-native";
import Header from "./Header";
import MapView from "react-native-maps";
import {connect} from 'react-redux'
import { setLocation, getLocation } from "../store/user";

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      latitude: 1,
      longitude: 1
    };
  }


  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     const nlongitude = position.coords.longitude;
    //     const nlatitude = position.coords.latitude;
    //     const newPosition = [nlatitude].push(nlongitude);
    //     if (this.props.setLocation) {
    //       this.props.setLocation(1, newPosition);
    //       console.log("initial position", this.props);
    if(this.props.location[0]) {
          this.setState({
            latitude: this.props.location[0],
            longitude: this.props.location[1]
          })
        }
      }
    //       console.log('set state', this.state)
    //     }
    //   }
    // );


  render() {
    console.log('in the render', this.state)
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.props.location[0],
            longitude: this.props.location[1],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
        <Text>Search here!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2 - 100
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

const mapState = state => {
  return {
    location: state.user.location
  };
};

const mapDispatch = dispatch => {
  return {
    getLocation: () => dispatch(getLocation()),
    setLocation: (coordinates, userId) =>
      dispatch(setLocation(coordinates, userId))
  };
};

export default connect(
  mapState,
  mapDispatch
)(Search);
