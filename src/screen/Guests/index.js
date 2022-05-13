import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const GuestScreen = ({ navigation: { navigate } }) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={{ justifyContent: "space-between", height: "100%" }}>
      <View>
        {/* {Row 1: Adults} */}
        <View style={styles.row}>
          {/* {Title} */}
          <View>
            <Text style={{ fontWeight: "bold" }}>성인</Text>
            <Text style={{ color: "#8d8d8d" }}>13살 이상</Text>
          </View>
          {/* {Button & value} */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* {-} */}
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}
            >
              <Text> - </Text>
            </Pressable>
            {/* {value} */}
            <Text style={{ marginHorizontal: 15, fontSize: 18 }}>{adults}</Text>
            {/* {+} */}
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "#5d5d5d" }}> + </Text>
            </Pressable>
          </View>
        </View>

        {/* {Row 1: Adults} */}
        <View style={styles.row}>
          {/* {Title} */}
          <View>
            <Text style={{ fontWeight: "bold" }}>어린이</Text>
            <Text style={{ color: "#8d8d8d" }}>2살 ~ 12살</Text>
          </View>
          {/* {Button & value} */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* {-} */}
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}
            >
              <Text> - </Text>
            </Pressable>
            {/* {value} */}
            <Text style={{ marginHorizontal: 15, fontSize: 18 }}>
              {children}
            </Text>
            {/* {+} */}
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "#5d5d5d" }}> + </Text>
            </Pressable>
          </View>
        </View>

        {/* {Row 1: Adults} */}
        <View style={styles.row}>
          {/* {Title} */}
          <View>
            <Text style={{ fontWeight: "bold" }}>유아</Text>
            <Text style={{ color: "#8d8d8d" }}>2살 이하</Text>
          </View>
          {/* {Button & value} */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* {-} */}
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}
            >
              <Text> - </Text>
            </Pressable>
            {/* {value} */}
            <Text style={{ marginHorizontal: 15, fontSize: 18 }}>
              {infants}
            </Text>
            {/* {+} */}
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "#5d5d5d" }}> + </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate("검색 결과")}
        style={{
          marginBottom: 20,
          backgroundColor: "#f15454",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestScreen;
