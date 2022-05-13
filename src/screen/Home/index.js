import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./styles";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation: { navigate } }) => {
  const navigation = useNavigation();

  return (
    <View>
      {/* {SearchBar} */}
      <Pressable
        style={styles.searchButton}
        onPress={() => navigate("지역 검색")}
      >
        <Fontisto
          name="search"
          size={25}
          color={"#f15454"}
          style={{ marginRight: 10 }}
        />
        <Text style={styles.searchButtonText}>어디로 떠나볼까</Text>
      </Pressable>

      <ImageBackground
        source={require("../../../assets/images/1.jpg")}
        style={styles.image}
      >
        {/* {Title}  */}
        <Text style={styles.title}>나를 위한</Text>

        {/* {Button} */}
        <Pressable style={styles.button} onPress={() => console.log("클릭")}>
          <Text style={styles.buttonText}>근처 찾아보기</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
