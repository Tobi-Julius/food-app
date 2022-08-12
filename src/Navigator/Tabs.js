import { StyleSheet } from "react-native";
import { Text } from "../component/common";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";
import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/Theme";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false, 
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (focused) => {
            <FontAwesome name="cutlery" size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: (focused) => {
            <AntDesign name="search1" size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="likes"
        component={Home}
        options={{
          tabBarIcon: (focused) => {
            <AntDesign name="like2" size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Home}
        options={{
          tabBarIcon: (focused) => {
            <MaterialIcons name="account-circle" size={24} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
