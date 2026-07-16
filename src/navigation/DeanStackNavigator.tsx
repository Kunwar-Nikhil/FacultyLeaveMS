import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DeanTabNavigator from "./DeanTabNavigator";
import FacultyDetailsScreen from "../screens/Dean/FacultyDetails/FacultyDetailsScreen";

const Stack = createNativeStackNavigator();

const DeanStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="DeanTabs"
        component={DeanTabNavigator}
      />

      <Stack.Screen
        name="FacultyDetails"
        component={FacultyDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default DeanStackNavigator;