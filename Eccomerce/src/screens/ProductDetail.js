import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { temp } from "../globals/temp";

const ProductDetail = ({ product }) => {
  return (
    <View style={styles.container}>
      <Header title={product.brand} />
      <Image
        source={{ uri: product.thumbnail }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Precio: {product.price} $ ARG</Text>
      <Pressable style={styles.button}>
        <Text style={styles.textButton}>Agregar al carrito</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
  },
  description: {
    textAlign: "center",
    fontSize: 14,
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 50,
    textAlign: "right",
  },
  button: {
    backgroundColor: temp.primary,
    marginHorizontal: 10,
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
  },
  textButton: {
    color: temp.fondo,
    fontSize: 20,
  },
});
