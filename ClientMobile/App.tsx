import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { MainScreen } from "./src/MainScreen";
import { NavigationSystem } from "./src/navigation/NavigationSystem";

export default function App() {
  return <NavigationSystem />;
}
