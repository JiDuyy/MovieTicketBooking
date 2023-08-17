import React from "react";
import { View, Text } from "react-native";
import { TicketStyles } from "./TicketStyle";

export const TicketScreen: React.FC = () => {
  return (
    <View style={TicketStyles.container}>
      <Text>Ticket Screen</Text>
    </View>
  );
};
