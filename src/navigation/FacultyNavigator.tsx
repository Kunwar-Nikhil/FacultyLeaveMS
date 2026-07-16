import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashBoardScreen from "../screens/Faculty/Dashboard/DashBoardScreen";

const Stack = createNativeStackNavigator();

const FacultyNavigator=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false,}}>
            <Stack.Screen 
            name="Dashboard"
            component={DashBoardScreen}
            />
        </Stack.Navigator>
    );
};
export default FacultyNavigator;