import { FlatList, StyleSheet, View } from "react-native";
// Importamos el JSON de los productos para filtrarlos por categoría
import products from "../data/products.json";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import CardProduct from "../components/CardProduct";

const ProductsByCategory = ({ category }) => {
  // Estado para almacenar los productos filtrados
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");

  // Filtramos productos por categoría al cargar el componente o si cambia la categoría
  useEffect(() => {
    setProductsFiltered(
      products.filter((product) => product.category === category)
    );
  }, [category]);

  // Filtramos productos por palabra clave
  useEffect(() => {
    if (keyword) {
      setProductsFiltered(
        products.filter(
          (product) =>
            product.category === category &&
            product.title.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    } else {
      // Si no hay palabra clave, mostramos todos los productos de la categoría
      setProductsFiltered(
        products.filter((product) => product.category === category)
      );
    }
  }, [keyword, category]);

  return (
    <View style={styles.container}>
      {/* Encabezado con el título de la categoría */}
      <Header title={category} />
      {/* Componente de búsqueda */}
      <Search onChangeKeyword={(text) => setKeyword(text)} />
      {/* Lista de productos filtrados */}
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardProduct product={item} />}
      />
    </View>
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
