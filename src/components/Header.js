import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.name}</Text>
    </View>
  );
};

export default Header;

const styles = {
  viewStyle: {
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 30,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: 'white'
  }
};
