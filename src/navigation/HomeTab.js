import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/Home";

import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import DestinationSearch from "../screen/DestinationSearch";
import SearchResultScreen from "../screen/SearchResult";
import SearchResultTab from "./SearchResultTab";
import SearchResultMap from "../screen/SearchResultMap";
import PostScreen from "../screen/PostScreen";

const Tab = createBottomTabNavigator();

const HomeTab = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f15454",
        headerTitleAlign: "center",
        headerShown: false,
      }}
      initialRouteName="airAnA"
    >
      <Tab.Screen
        name={"검색"}
        component={DestinationSearch}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"찜"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"airAnA"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Message"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"내 정보"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={35} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
