import React from "react";
import { View, Text } from "react-native";
import { ProfileStyles } from "./ProfileStyle";

export const ProfileScreen: React.FC = () => {
  return (
    <View style={ProfileStyles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};
