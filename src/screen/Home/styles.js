import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 70,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    marginLeft: 25,
  },
  button: {
    backgroundColor: "#fff",
    width: 200,
    height: 40,
    marginTop: 25,
    marginLeft: 25,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width - 20,
    height: 45,
    borderRadius: 30,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 30,
    zIndex: 100,
    elevation: 2,
  },
  searchButtonText: {
    fontWeight: "bold",
  },
});

export default styles;
