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
import { HomeScreen } from "../../Screens/Home/HomeScreen";
import { TicketScreen } from "../../Screens/Ticket/TicketScreen";
import { ReportScreen } from "../../Screens/Report/ReportScreen";
import { ProfileScreen } from "../../Screens/Profile/ProfileScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./Styles";
import { fontSize } from "../../Utils/size";

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

const TabButton = (props: any) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);
  const textViewRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
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
                size={fontSize.ICON_BUTTON}
                color={focused ? "red" : "white"}
              />
            )}
          </Animatable.View>

          <Animatable.View ref={textViewRef}>
            {focused && (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name={item.icon} size={fontSize.ICON_BUTTON} color="white" />
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
