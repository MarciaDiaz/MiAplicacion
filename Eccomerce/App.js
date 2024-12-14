import {
  StatusBar,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import Home from "./src/screens/Home";
import ProductDetail from "./src/screens/ProductDetail";
import ProductsByCategory from "./src/screens/ProductsByCategory";
import { useFonts } from "expo-font";
import { fonts } from "./src/globals/fonts";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }

  const product = {
    id: 0,
    title: "Crystal chandelier maria theresa for 12 light",
    description:
      "Crystal chandelier maria theresa for 12 light, esto es una descripcion",
    price: 47,
    discountPercentage: 16,
    rating: 4.74,
    stock: 133,
    brand: "YIOSI",
    category: "lighting",
    thumbnail:
      "https://i.ibb.co/8dh1rC6/D-Q-NP-742987-MLA49772220088-042022-B.jpg",
    images: [
      "https://i.dummyjson.com/data/products/100/1.jpg",
      "https://i.dummyjson.com/data/products/100/2.jpg",
      "https://i.dummyjson.com/data/products/100/3.jpg",
      "https://i.dummyjson.com/data/products/100/thumbnail.jpg",
    ],
  };

  return (
    <SafeAreaView>
      <ProductDetail product={product} />
      <StatusBar style="light" backgroundColor="blue" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.curr : 0,
  },
});
