import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TabNav } from "./TabNav";

const Stack = createStackNavigator();

const Container = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          headerMode: "screen",
          headerTintColor: "red",
          headerStyle: { backgroundColor: " #e01616" },
        }}
      >
        <Stack.Screen name="Notifications" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
