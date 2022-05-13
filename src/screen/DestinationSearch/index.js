import React, { useState } from "react";
import { View, TextInput, FlatList, Text, Pressable } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

import searchResults from "../../../assets/data/search";

import GuestScreen from "../Guests";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Suggestion from "./Suggestion";

const DestinationSearch = ({ navigation: { navigate } }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(data, details);
          navigation.navigate("게스트");
        }}
        fetchDetails
        styles={{ textInput: styles.textInput }}
        query={{
          key: "AIzaSyCg-LSoj5LZ8WT5xCaxPkD2ANa2SVUjD3s",
          language: "en",
          type: "(cities)",
        }}
        suppressDefaultStyles
        renderRow={(item) => <Suggestion item={item} />}
      />
    </View>
  );
};

export default DestinationSearch;
