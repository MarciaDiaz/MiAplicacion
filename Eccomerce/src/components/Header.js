import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { temp } from "../globals/temp";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: temp.fondo,
    // marginTop: 30,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
  },
  title: {
    color: temp.primary,
    fontSize: 16,
    fontFamily: "josefin",
  },
});
