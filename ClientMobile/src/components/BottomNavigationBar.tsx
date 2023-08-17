import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Feather } from "@expo/vector-icons";
import { HomeScreen } from "../Screens/Home/HomeScreen";
import { TicketScreen } from "../Screens/Ticket/TicketScreen";
import { ReportScreen } from "../Screens/Report/ReportScreen";
import { ProfileScreen } from "../Screens/Profile/ProfileScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HomeStyles } from "../Screens/Home/HomeStyle";

const TabArr = [
  {
    route: "Home",
    label: "Home",
    icon: "home-outline",
    component: HomeScreen,
    color: "#00000070",
  },
  {
    route: "Setting",
    label: "Ticket",
    icon: "reader-outline",
    component: TicketScreen,
    color: "#00000070",
  },
  {
    route: "Notification",
    label: "Setting",
    icon: "stats-chart-outline",
    component: ReportScreen,
    color: "#00000070",
  },
  {
    route: "Profile",
    label: "Setting",
    icon: "person-outline",
    component: ProfileScreen,
    color: "#00000070",
  },
];

const Tab = createBottomTabNavigator();

const animate1 = {
  0: { scale: 1, translateY: 10 },
  // 0.92: { translateY: -24 },
  1: { scale: 1, translateY: 10 },
};
const animate2 = {
  0: { scale: 1, translateY: 10 },
  1: { scale: 1, translateY: 10 },
};

const circle1 = {
  0: { scale: 0 },
  // 0.3: { scale: 0.9 },
  // 0.5: { scale: 0.2 },
  // 0.8: { scale: 0.7 },
  1: { scale: 1.1 },
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = (props: any) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);
  const iconViewRef = useRef<any>(null);
  const textViewRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current.animate({
        0: { scale: 0, translateY: 15 },
        1: { scale: 1, translateY: 15 },
      });
      textViewRef.current.animate({
        0: { scale: 0, translateY: 15 },
        1: { scale: 1, translateY: 15 },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1, translateY: 15 },
        1: { scale: 0, translateY: 15 },
      });
      textViewRef.current.animate({
        0: { scale: 1, translateY: 15 },
        1: { scale: 0, translateY: 15 },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1 : 0.65 }]}
    >
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: item.color, borderRadius: 10 },
          ]}
        />
        <View
          style={[
            styles.btn,
            { backgroundColor: focused ? null : item.alphaClr },
            { transform: focused ? [] : [{ translateY: 15 }] },
          ]}
        >
          <Animatable.View ref={textViewRef}>
            {!focused && (
              <Ionicons
                name={item.icon}
                size={30}
                color={focused ? "red" : "white"}
              />
            )}
          </Animatable.View>

          <Animatable.View ref={textViewRef}>
            {focused && (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  name={item.icon}
                  size={30}
                  color="white"
                />
                <Text
                  style={{
                    color: "white",
                    paddingHorizontal: 8,
                  }}
                >
                  {item.label}
                </Text>
              </View>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...styles.tabBar,
        },
        tabBarBackground: () => (
          <Image
            source={{
              uri: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/f7cff6119795171.60b7ca9558e41.jpg",
            }}
            style={styles.tabBarBackground}
            resizeMode="cover"
          />
          
        ),
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
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
