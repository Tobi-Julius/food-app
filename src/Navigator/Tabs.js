import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";
import { COLORS, ICONS } from "../constants";
import Svg, { Path } from "react-native-svg";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
    const isSelected = accessibilityState.selected;

    return isSelected ? (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ flexDirection: "row", position: "absolute", top: 0 }}>
          <View style={{ flex: 1, backgroundColor: COLORS.gray1 }} />
          <Svg width={70} height={65} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{ flex: 1, backgroundColor: COLORS.gray1 }} />
        </View>
        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.white,
          }}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    ) : (
      <TouchableOpacity
        activeOpacity={4}
        onPress={onPress}
        style={{
          flex: 1,
          height: 60,
          backgroundColor: COLORS.white,
        }}
      >
        {children}
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: COLORS.gray2,
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={ICONS.cutlery}
              style={{
                tintColor: focused ? COLORS.orange : COLORS.gray2,
                height: 22,
                width: 22,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Hoe"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={ICONS.search}
              style={{
                tintColor: focused ? COLORS.orange : COLORS.gray2,
                height: 22,
                width: 22,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Ho"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={ICONS.like}
              style={{
                tintColor: focused ? COLORS.orange : COLORS.gray2,
                height: 22,
                width: 22,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="H"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={ICONS.user}
              style={{
                tintColor: focused ? COLORS.orange : COLORS.gray2,
                height: 22,
                width: 22,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
