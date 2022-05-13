import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
  },
  bedrooms: {
    marginVertical: 10,
    color: "#5b5b5b",
  },
  description: {
    fontSize: 20,
    lineHeight: 26,
  },
  price: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
  },
  newPrice: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
  longDescription: {
    marginVertical: 20,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;
