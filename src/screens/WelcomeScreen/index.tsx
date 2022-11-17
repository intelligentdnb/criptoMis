import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
const image = require("../../../assets/images/Saly-1.png");
const googleButtonIMG = require("../../../assets/images/SIgoogle.png")

const WelcomeScreen = () => {

  const signInGoogle = () => {

  };

    return (
      <View style={styles.root}>
        <Image style={styles.image} source={image} />
        <Text style={styles.header1}>Welcome to CriptoMis</Text>
        <Text style={styles.header2}>Invest your virtual $100.000 and compete with others</Text>
        <Pressable onPress={signInGoogle} style={styles.googleButton}>
         <Image style={styles.buttonImage} source={googleButtonIMG}/> 
        </Pressable>
      </View>
    )
}

export default WelcomeScreen;