import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import DashboardScreen from "../screens/HOD/Dashboard/DashboardScreen";
import LeaveRequestsScreen from "../screens/HOD/LeaveRequests/LeaveRequestsScreen";
import ApplyLeaveScreen from "../screens/Faculty/ApplyLeave/ApplyLeaveScreen";
import LeaveHistoryScreen from "../screens/Faculty/LeaveHistory/LeaveHistoryScreen";
import ProfileScreen from "../screens/HOD/Profile/ProfileScreen";

import { colors } from "../theme";

const Tab = createBottomTabNavigator();

const HODTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: colors.primary,

        tabBarInactiveTintColor: "gray",

        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          switch (route.name) {
            case "Dashboard":
              iconName = "home";
              break;

            case "Requests":
              iconName = "document-text";
              break;

            case "Apply Leave":
              iconName = "add-circle";
              break;

            case "History":
              iconName = "time";
              break;

            case "Profile":
              iconName = "person";
              break;

            default:
              iconName = "ellipse";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
      />

      <Tab.Screen
        name="Requests"
        component={LeaveRequestsScreen}
      />

      <Tab.Screen
        name="Apply Leave"
        component={ApplyLeaveScreen}
      />

      <Tab.Screen
        name="History"
        component={LeaveHistoryScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default HODTabNavigator;