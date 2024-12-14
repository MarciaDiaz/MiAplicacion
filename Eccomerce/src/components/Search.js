import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { temp } from "../globals/temp";

const Search = ({ onChangeKeyword }) => {
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState("");

  // Función para buscar
  const search = () => {
    //Expresion regular
    const regex = /[#$%*+\-]/;
    if (regex.test(textInput)) {
      return setError("Caracter no valido");
    }
    setError("");
    onChangeKeyword(textInput); // Pasa el texto actual al padre
  };

  // Función para cancelar la búsqueda
  const removeSearch = () => {
    onChangeKeyword(""); // Reinicia la búsqueda
    setTextInput(""); // Limpia el input
    setError("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={(text) => setTextInput(text)} // Actualiza el estado local
          placeholder="Buscar"
        />

        <Pressable style={styles.button} onPress={search}>
          <Feather name="search" size={30} color="black" />
        </Pressable>
        <Pressable style={styles.button} onPress={removeSearch}>
          <MaterialIcons name="cancel" size={30} color="black" />
        </Pressable>
      </View>
      <Text style={styles.error}>{error ? error : ""}</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  containerInput: {
    backgroundColor: temp.accent,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "blue",
    paddingLeft: 10,
    borderRadius: 5,
    flex: 1,

    color: temp.fondo,
  },
  button: {
    margin: 5,
  },
  error: {
    color: "brown",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
