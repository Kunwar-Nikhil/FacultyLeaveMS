import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import SignupScreen from "../screens/Auth/Signup/SignupScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false,}}>
            <Stack.Screen
            name="Login"
            component={LoginScreen}/>
            <Stack.Screen
            name="Signup"
            component={SignupScreen}/>
        </Stack.Navigator>
    );
};

export default AuthNavigator;