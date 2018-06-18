import React from "react";
import { StyleSheet, Text, View, AppRegistry, Dimensions } from "react-native";
import Header from "./Header";
import MapView from "react-native-maps";
import {connect} from 'react-redux'
import { setLocation, getLocation } from "../store/user";
import {withRouter} from 'react-router'
import {
  NativeRouter as Router,
  DeepLinking,
  BackButton,
  Link,
  Route
  // etc.
} from 'react-router-native'
import Spinner from 'react-native-loading-spinner-overlay';

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      latitude: 40.766018,
      longitude: -73.993077
      ,
      loading: false
    };
  }


  componentDidMount = async() => {
    // await this.props.getLocation()
    // if (this.props.location[0]) {
    // this.setState({
    //   latitude: this.props.location[0],
    //   longitude: this.props.location[1],
    //   loading: false
    // })}

    console.log('in component did mount', this.props)


    }




    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     const nlongitude = position.coords.longitude;
    //     const nlatitude = position.coords.latitude;
    //     const newPosition = [nlatitude].push(nlongitude);
    //     if (this.props.setLocation) {
    //       this.props.setLocation(1, newPosition);
    //       console.log("initial position", this.props);



    //       console.log('set state', this.state)
    //     }
    //   }
    // );


  render() {
    console.log('rendering search')
    return (
      <View style={styles.container}>
      {/* <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color: 'blue'}}/> */}
        <MapView
          style={styles.map}
          initialRegion={{
            // latitude: this.props.location[0],
            // longitude: this.props.location[1],
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0021
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

Search.propTypes = {

}

const mapStateToProps = state => {
  console.log('in map state', state.user.location)
  return {
    location: state.user.location
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLocation: (userId) => dispatch(getLocation(userId)),
    setLocation: (coordinates, userId) =>
      dispatch(setLocation(coordinates, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
