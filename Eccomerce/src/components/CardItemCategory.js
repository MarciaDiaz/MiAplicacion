import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ShadowCards from "./wrappers/ShadowCards";

const CardItemCategory = ({ item }) => {
  return (
    <ShadowCards style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </ShadowCards>
  );
};

export default CardItemCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    color: "grey",
  },
});
