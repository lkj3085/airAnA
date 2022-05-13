import React from "react";
import { StatusBar, LogBox } from "react-native";
import Router from "./src/navigation/router";
import { NavigationContainer } from "@react-navigation/native";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
  "PointPropType will be removed",
  "EdgeInsetsPropType will be removed",
]);

export default function App() {
  return (
    <NavigationContainer>
      <Router />
      <StatusBar />
    </NavigationContainer>
  );
}
