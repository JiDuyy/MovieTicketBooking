import React from "react";
import { View, Text } from "react-native";
import { NotificationStyles } from "./NotificationStyle";

export const NotificationScreen: React.FC = () => {
  return (
    <View style={NotificationStyles.container}>
      <Text>Notification Screen</Text>
    </View>
  );
};
