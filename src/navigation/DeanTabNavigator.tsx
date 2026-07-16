import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import DashboardScreen from "../screens/Dean/Dashboard/DashboardScreen";

import ApplyLeaveScreen from "../screens/Faculty/ApplyLeave/ApplyLeaveScreen";
import LeaveHistoryScreen from "../screens/Faculty/LeaveHistory/LeaveHistoryScreen";
import ProfileScreen from "../screens/Dean/Profile/ProfileScreen";
import LeaveRequestsScreen from "../screens/Dean/LeaveRequests/LeaveRequestsScreen";
import { colors } from "../theme";

const Tab = createBottomTabNavigator();

const DeanTabNavigator = () => {
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

              case "LeaveRequests":
  iconName = "document-text";
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
  name="LeaveRequests"
  component={LeaveRequestsScreen}
  options={{
    title: "Requests",
  }}
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

export default DeanTabNavigator;