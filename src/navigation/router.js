import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DestinationSearch from "../screen/DestinationSearch/index";
import GuestScreen from "../screen/Guests";
import SearchResultScreen from "../screen/SearchResult/index";
import SearchResultTab from "./SearchResultTab";

import HomeTab from "./HomeTab";
import PostScreen from "../screen/PostScreen";

const Stack = createNativeStackNavigator();

const Router = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="홈"
        component={HomeTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="지역 검색"
        component={DestinationSearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="게스트"
        component={GuestScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="검색 결과"
        component={SearchResultTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="포스트"
        component={PostScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
