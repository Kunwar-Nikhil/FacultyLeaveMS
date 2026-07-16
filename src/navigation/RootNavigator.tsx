import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import { RootState } from "../redux/store";
import AuthNavigator from "./AuthNavigator";
import FacultyTabNavigator from "./FacultyTabNavigator";
import HODTabNavigator from "./HODTabNavigator";
import DeanTabNavigator from "./DeanTabNavigator";
import SplashScreen from "../screens/Auth/Splash/SplashScreen";
import { storage } from "../services/storage.service";
import { STORAGE } from "../constants/storage";
import {useDispatch} from "react-redux";
import { loginSuccess,logout } from "../redux/slices/authSlice";
import { getCurrentUser } from "../api/auth.api";
import HODStackNavigator from "./HODStackNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { isLoggedIn, user } = useSelector(
    (state: RootState) => state.auth
  );

  const [showSplash, setShowSplash] = useState(true);
const dispatch = useDispatch();
// const restoreSession = async()=>{
//   const token = storage.getString(STORAGE.TOKEN);

//   if(!token){
//     setShowSplash(false);
//     return;
//   }
//   try{
//     const response = await getCurrentUser();

//     dispatch(
//       loginSuccess({
//         user:response.user,
//         token,
//       }),
//     );
//   }catch(error){
//     storage.clearAll();
//     dispatch(logout());
//   }
//   setShowSplash(false);
// }


//   if (showSplash) {
//     return (
//       <SplashScreen
//         onFinish={restoreSession}
//       />
//     );
//   }

const restoreSession = async () => {
  try {
    const token = storage.getString(STORAGE.TOKEN);

    if (!token) {
      setShowSplash(false);
      return;
    }

    const response = await getCurrentUser();

    dispatch(
      loginSuccess({
        user: response.user,
        token,
      }),
    );
  } catch (e) {
    storage.clearAll();
    dispatch(logout());
  } finally {
    setShowSplash(false);
  }
};
if (showSplash) {
  return (
    <SplashScreen
      onFinish={restoreSession}
    />
  );
}

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
        />
      ) : user?.role === "faculty" ? (
        <Stack.Screen
  name="Faculty"
  component={FacultyTabNavigator}
/>
      ) : user?.role === "hod" ? (
      <Stack.Screen
  name="HOD"
  component={HODStackNavigator}
/>
      ) : (
        <Stack.Screen
    
  name="Dean"
  component={DeanTabNavigator}
/>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;