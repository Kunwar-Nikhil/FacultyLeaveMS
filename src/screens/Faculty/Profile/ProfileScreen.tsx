import React from "react";
import { SafeAreaView,ScrollView,StyleSheet,Text,View,Alert, } from "react-native";
import {useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { logout } from "../../../redux/slices/authSlice";
import { storage } from "../../../services/storage.service";
import InfoCard from "./components/InfoCard";
import { colors,spacing,typography } from "../../../theme";

const ProfileScreen = () =>{
    const dispatch = useDispatch();
    const {user} = useSelector(
        (state:RootState)=>state.auth,
    );
    const handleLogout = () => {
        Alert.alert(
            "Logout","Are you sure you want to logout?",
            [
                {
                    text:"cancel",
                    style:"cancel",
                },

                {
                    text:"Logout",
                    style:"destructive",
                    onPress: ()=>{
                        storage.clearAll();
                        dispatch(logout());
                    },
                },
            ],
        );
    };
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>
                            {
                                user?.fullName?.charAt(0)
                            }
                        </Text>
                    </View>
                    <Text style={styles.name}>
                        {user?.fullName}
                    </Text>
                    <Text style={styles.role}>
                        {user?.role}
                    </Text>
                </View>
                <InfoCard title="Email" value={user?.email ?? ""}/>
                <InfoCard title="Phone" value={user?.phoneNo ?? ""}/>
                <InfoCard title="Department" value={user?.department ?? ""}/>
                <InfoCard title="Subjects" value={user?.subjects?.join(", ") ?? ""}/>
               <Text
  style={{
    marginTop: 25,
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 13,
  }}
>
  Faculty Leave Management System
</Text>

<Text
  style={{
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 12,
    marginTop: 4,
  }}
>
  Version 1.0
</Text>
                <PrimaryButton title="Logout" onPress={handleLogout}/>
            </ScrollView>
        </SafeAreaView>
    );
};
export default ProfileScreen;
const styles = StyleSheet.create({
    container:{
         flex:1,
    backgroundColor:colors.background,
    },
    content:{
        padding:spacing.lg,
    paddingBottom:40,

    },
    profile:{
        alignItems:"center",
        marginBottom:30,
    },
    avatar:{
        width:90,
        height:90,
        borderRadius:45,
        backgroundColor:colors.primary,
        justifyContent:"center",
        alignItems:"center",
    },
    avatarText:{
        color:colors.white,
        fontSize:34,
        fontWeight:"700",
    },
    name:{
        marginTop:15,
        fontSize:24,
        fontWeight:"700",
        color:colors.textPrimary,
    },
    role:{
        color:colors.textSecondary,
        marginTop:6,
        fontSize:16,
    },
})