import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const MainButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text styles={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    color: 'white',
    paddingTop: 15
  },
  buttonText: {
    color: 'red',
    fontFamily: "open-sans",
    fontSize: 80
  }
});

export default MainButton;
