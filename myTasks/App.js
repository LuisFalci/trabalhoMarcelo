import { StyleSheet, Text, View, StatusBar } from "react-native";

import {NavigationContainer} from "@react-navigation/native"

import SingIn from "./src/pages/SingIn";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#1d1d2e"
        barStyle="light-content"
        translucent={false}
      />
      <SingIn />
    </NavigationContainer>
  );
}