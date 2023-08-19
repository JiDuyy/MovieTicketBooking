import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    tabBar: {
      height: 80,
      position: "absolute",
      bottom: 16,
      right: 16,
      left: 16,
      borderRadius: 10,
      borderTopColor: "transparent",
    },
    btn: {
      flexDirection: "row",
      alignItems: "center",
      padding: 8,
      borderRadius: 16,
    },
    text: {
      fontSize: 16,
      textAlign: "center",
      color: "black",
    },
    tabBarBackground: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
    },
  });