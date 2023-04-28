import { StyleSheet, Text, View, StatusBar } from "react-native";

import {NavigationContainer} from "@react-navigation/native"

import SingIn from "./src/pages/SingIn";
import Create from "./src/pages/Create";
import MyTabs from "./src/routes/MyTabs";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#1d1d2e"
        barStyle="light-content"
        translucent={false}
      />
      {/* <SingIn /> */}
      <MyTabs />
      
      {/* <Create /> */}

    </NavigationContainer>
  );
}