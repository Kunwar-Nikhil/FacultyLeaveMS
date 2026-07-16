import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HODTabNavigator from "./HODTabNavigator";
import FacultyDetailsScreen from "../screens/HOD/FacultyDetails/FacultyDetailsScreen";

const Stack = createNativeStackNavigator();

const HODStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HODTabs"
        component={HODTabNavigator}
      />

      <Stack.Screen
        name="FacultyDetails"
        component={FacultyDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default HODStackNavigator;