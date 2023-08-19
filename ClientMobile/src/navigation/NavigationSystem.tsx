import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "../MainScreen";
import { BookingScreen } from "../Screens/Booking/BookingScreen";

const Stack = createNativeStackNavigator();

export const NavigationSystem: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
