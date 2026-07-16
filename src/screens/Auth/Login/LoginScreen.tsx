import React, {useState} from "react";
import{
    Alert,Platform,TouchableWithoutFeedback,
Keyboard,ScrollView,
    SafeAreaView, StyleSheet,Text,View,KeyboardAvoidingView
} from "react-native"

import { useDispatch } from "react-redux";
import { login } from "../../../redux/slices/authSlice";
import { STORAGE } from "../../../constants/storage";
import { storage } from "../../../services/storage.service";
import { loginStart,loginFailure,loginSuccess } from "../../../redux/slices/authSlice";
import { colors,spacing,typography } from "../../../theme";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import CustomTextInput from "../../../components/inputs/CustomTextInput";
import { isValidEmail } from "../../../utils/validators";
import {loginApi} from '../../../api/auth.api';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () =>{
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("");
    const dispatch = useDispatch();
const navigation = useNavigation();
const [showPassword,setShowPassword]=useState(false);

    const handleLogin = async()=>{

        
  if (!email.trim()) {
    Alert.alert("Error", "Please enter email");
    return;
  }

 
  if (!isValidEmail(email.trim())) {
    Alert.alert("Error", "Please enter a valid email");
    return;
  }

  
  if (!password.trim()) {
    Alert.alert("Error", "Please enter password");
    return;
  }

  
  if (password.length < 6) {
    Alert.alert(
      "Error",
      "Password must be at least 6 characters"
    );
    return;
  }
  dispatch(loginStart());


        try{
            const response = await loginApi({
                email:email.trim(),
                password,
            });

            storage.set(
                STORAGE.TOKEN,
                response.token,
            );

            storage.set(
                STORAGE.USER,
                JSON.stringify(response.user),
            );

            dispatch(
                loginSuccess({
                    user:response.user,
                    token:response.token,
                    
                })
                
            );
            Alert.alert("Sucess",response.message );
            
        } catch (error:any){
            dispatch(
                loginFailure(
                    error?.response?.data?.message || "Something went wrong",
                ),
            );

            Alert.alert("Error", error?.response?.data?.message || "Something went wrong",);

        }
    }
    


    return (
        <KeyboardAvoidingView
  style={{ flex: 1 }}
  behavior={Platform.OS === "ios" ? "padding" : "height"}
>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
  <SafeAreaView style={styles.container}>
    <View style={styles.content}>

      <View style={styles.logo}>
        <Text style={styles.logoText}>F</Text>
      </View>

      <Text style={styles.heading}>
        Faculty Leave
      </Text>

      <Text style={styles.heading2}>
        Management System
      </Text>

      <Text style={styles.subHeading}>
        Welcome Back 👋
      </Text>

      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <CustomTextInput
        placeholder="Password"
        value={password}
        secureTextEntry={!showPassword}
        rightText={showPassword ? "Hide" : "Show"}
        onRightPress={() => setShowPassword(!showPassword)}
        onChangeText={setPassword}
      />

      <View style={{ height: 20 }} />

      <PrimaryButton
        title="Login"
        onPress={handleLogin}
      />

      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

    </View>

    <TouchableOpacity
      onPress={() => navigation.navigate("Signup" as never)}
      style={styles.signupContainer}
    >
      <Text style={styles.signupText}>
        Don't have an account?

        <Text style={styles.signupButton}>
          {" "}Sign Up
        </Text>
      </Text>
    </TouchableOpacity>

  </SafeAreaView>
  </ScrollView>
  </TouchableWithoutFeedback>
</KeyboardAvoidingView>
);

}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
  },

  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.primary,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 35,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  logoText: {
    fontSize: 42,
    fontWeight: "800",
    color: "#fff",
  },

  heading: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "800",
    color: "#1E293B",
  },

  heading2: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "800",
    color: colors.primary,
    marginBottom: 8,
  },

  subHeading: {
    textAlign: "center",
    color: "#64748B",
    fontSize: 16,
    marginBottom: 35,
  },

  forgotContainer: {
    alignItems: "flex-end",
    marginTop: 14,
  },

  forgotText: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 14,
  },

  signupContainer: {
    alignItems: "center",
    marginBottom: 35,
  },

  signupText: {
    color: "#64748B",
    fontSize: 15,
  },

  signupButton: {
    color: colors.primary,
    fontWeight: "700",
  },
});