import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CalculatorV2 } from "../screens/CalculatorV2";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Todo from "../screens/ToDo";

const Tab = createBottomTabNavigator();

export const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="V2"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="V2"
        options={{
          tabBarIcon: ({ item }) => <FontAwesome5 name="calculator" size={24} color="black" />,
        }}
        component={CalculatorV2}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ item }) => <Entypo name="list" size={24} color="black" />,
        }}
        name="todo"
        component={Todo}
      />
    </Tab.Navigator>
  );
};
