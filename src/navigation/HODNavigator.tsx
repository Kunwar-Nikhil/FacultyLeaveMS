import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashBoardScreen from "../screens/HOD/Dashboard/DashboardScreen";
import LeaveRequestsScreen from "../screens/HOD/LeaveRequests/LeaveRequestsScreen";
import FacultyDetailsScreen from "../screens/HOD/FacultyDetails/FacultyDetailsScreen";
import ProfileScreen from "../screens/HOD/Profile/ProfileScreen";

const Stack = createNativeStackNavigator();
const HODNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false,}}>
            <Stack.Screen
            name="Dashboard"
            component={DashBoardScreen}
            />
            <Stack.Screen
            name="LeaveRequests"
            component={LeaveRequestsScreen}
            />
            <Stack.Screen
            name="FacultyDetails"
            component={FacultyDetailsScreen}
            />
            <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            />
        </Stack.Navigator>
    );
};
export default HODNavigator