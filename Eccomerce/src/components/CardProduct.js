import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { temp } from "../globals/temp";

const CardProduct = ({ product }) => {
  //desestructura
  const { title, price, stock, thumbnail } = product;
  const { width, height } = useWindowDimensions();
  return (
    <Pressable style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: thumbnail }}
        resizeMode="cover"
      />
      <View>
        <Text style={styles.title}>{title} </Text>
        <View style={styles.containerText}>
          <Text style={width > 400 ? styles.text : styles.textMin}>
            Precio: {price} $ ARG
          </Text>
          <Text style={styles.textMin}> Stock: {stock}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: temp.accent,
    margin: 10,
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
  },

  title: {
    color: temp.fondo,
    fontSize: 14,
    padding: 5,
  },
  text: {
    color: temp.fondo,
    fontSize: 24,
  },
  textMin: {
    color: temp.fondo,
    fontSize: 12,
  },
  containerText: {
    flexDirection: "row",
    gap: 20,
    padding: 8,
  },
});
