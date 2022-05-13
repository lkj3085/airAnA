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
    fontSize: 17,
    color: "#5b5b5b",
    marginLeft: 10,
  },
  description: {
    fontSize: 20,
    lineHeight: 26,
    marginLeft: 10,
  },
  price: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
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
    marginVertical: 5,
    fontSize: 30,
    marginLeft: 10,
  },
});

export default styles;
