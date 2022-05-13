import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResultScreen from "../screen/SearchResult";
import SearchResultMap from "../screen/SearchResultMap";

const Tab = createMaterialTopTabNavigator();

const SearchResultTab = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f15454",
        tabBarIndicatorStyle: {
          backgroundColor: "#f15454",
        },
      }}
    >
      <Tab.Screen name="List" component={SearchResultScreen} />
      <Tab.Screen name="Map" component={SearchResultMap} />
    </Tab.Navigator>
  );
};

export default SearchResultTab;
