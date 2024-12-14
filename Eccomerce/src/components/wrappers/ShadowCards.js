import { StyleSheet, Text, View } from "react-native";
import React from "react";

//le pasas la propiedad children para que se entienda que la pueden usar los hijos
const ShadowCards = ({ children, style }) => {
  //recibe los estilos del cardCategory
  return <View style={[style, styles.container]}>{children}</View>;
};

export default ShadowCards;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
});
