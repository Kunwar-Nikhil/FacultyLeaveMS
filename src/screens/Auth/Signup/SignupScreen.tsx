import React,{useEffect, useState} from "react";

import { SafeAreaView,StyleSheet,View,Text,ScrollView, Alert ,} from "react-native";
import CustomTextInput from "../../../components/inputs/CustomTextInput";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { colors , spacing, typography} from "../../../theme";
import { isValidEmail, isValidPassword, isValidPhone } from "../../../utils/validators";
import { getDepartments } from "../../../api/department.api";
import { signupApi } from "../../../api/auth.api";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import CustomDropdown from "../../../components/CustomDropdown";

const SignupScreen = () => {
    const [fullName, setFullName] = useState("");
    const [subjects,setSubjects] = useState("")
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [age, setAge] = useState("");
    const [department,setDepartment]=useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [departments, setDepartments] = useState<any[]>([]);
    const [gender,setGender]=useState("");
const navigation = useNavigation();


useEffect(()=>{
    loadDepartment()
},[]);

const loadDepartment = async () => {
    try {
        const response = await getDepartments();
        setDepartments(response);
    } catch (error) {
        console.log(error);
    }
};

    const handleSignup = async() => {
        if(!fullName.trim()){
            Alert.alert("Error","Enter Full Name");
            return;
        }
        if(!email.trim()){
            Alert.alert("Error","Enter Email",);
            return;
        }
        if(!isValidEmail(email.trim())){
            Alert.alert("Error","Invalid Email",);
            return;
        }
        if(!phoneNo.trim()){
            Alert.alert("Error","Enter Phone Number",);
            return;
        }
        if(!isValidPhone(phoneNo)){
            Alert.alert("Error","Invalid Phone Number",);
            return;
        }
        if(!age.trim()){
            Alert.alert("Error","Enter Age",);
            return;
        }
        if(!password.trim()){
            Alert.alert("Error","Enter Password",);
            return;
        }
        if(!isValidPassword(password)){
            Alert.alert("Error","Password should be at least 6 characters",);
            return;
        }

        if(password !== confirmPassword){
            Alert.alert("Error","Password doesn't match",);
            return;
        }
        if (!gender) {
  Alert.alert("Error", "Please select gender");
  return;
}

if (!department) {
  Alert.alert("Error", "Please select department");
  return;
}
        try{
            const response = await signupApi({
            fullName,email,phoneNo,age:Number(age),
            gender,
            department,
            subjects:subjects.split(",").map(item=>item.trim()),password,
            });
Alert.alert("Success",response.message,);
navigation.goBack();
        } catch(error:any){
Alert.alert("Error",error?.response?.data?.message || "Signup Failed",);
        }
    };

return(
<SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.content}>

<Text style={styles.heading}>
    Create Account
</Text>

<Text style={styles.subHeading}>
    Faculty Registration
</Text>

<CustomTextInput
placeholder="Full Name"
value={fullName}
onChangeText={setFullName}/>

<CustomTextInput
placeholder="Email"
value={email}
onChangeText={setEmail}/>

<CustomTextInput
placeholder="Phone No"
value={phoneNo}
onChangeText={setPhoneNo}/>

<CustomTextInput
placeholder="Age"
value={age}
onChangeText={setAge}/>

<CustomDropdown
  placeholder="Select Gender"
  value={gender}
  data={[
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "others" },
  ]}
  onChange={setGender}
/>

<CustomDropdown
    placeholder="Select Department"
    value={department}
    data={departments.map((item: any) => ({
        label: item.name,
        value: item.code.toLowerCase(),
    }))}
    onChange={setDepartment}
/>

<CustomTextInput
placeholder="Subjects"
value={subjects}
onChangeText={setSubjects}/>

<CustomTextInput
placeholder="Password"
value={password}
onChangeText={setPassword}/>

<CustomTextInput
placeholder="Confirm Password"
value={confirmPassword}
onChangeText={setConfirmPassword}/>

<PrimaryButton
title="Create Account"
onPress={handleSignup}/>

<TouchableOpacity
onPress={()=>navigation.goBack()}
style={styles.loginContainer}>
    <Text style={styles.loginText}>
        Already have an account?

        <Text style={styles.loginButton}>
            {" "}Login
        </Text>
    </Text>
</TouchableOpacity>
    </ScrollView>
</SafeAreaView>
)
}
export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

  content: {
    flexGrow: 1,
    padding: 24,
    paddingBottom: 40,
  },

  heading: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.primary,
    textAlign: "center",
    marginTop: 20,
  },

  subHeading: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 30,
    marginTop: 8,
  },

  loginContainer: {
    alignItems: "center",
    marginTop: 30,
  },

  loginText: {
    color: colors.textSecondary,
    fontSize: 15,
  },

  loginButton: {
    color: colors.primary,
    fontWeight: "700",
  },
});