import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./components/BottomNavigationBar";
import { View, StyleSheet, SafeAreaView } from "react-native";


export const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
