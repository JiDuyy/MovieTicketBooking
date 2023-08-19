import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./components/BottomNavigationBar/BottomNavigationBar";
import { View, StyleSheet, SafeAreaView } from "react-native";

export const MainScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <BottomTabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
