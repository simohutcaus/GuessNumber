import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Colors from '../constants/colors';
import colors from "../constants/colors";
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          resizeMode="cover"
        />
      </View>
      <Text>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> to guess the number</Text>
      <Text>The number you selected was : <Text style={styles.highlight}>{props.userNumber}</Text></Text>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: 'hidden',
    marginVertical: 30
  },
  highlight: {
      color: colors.primary,
      fontFamily: 'open-sans-bold',
      textAlign: 'center',
      fontSize: 20
  }
});

export default GameOverScreen;
