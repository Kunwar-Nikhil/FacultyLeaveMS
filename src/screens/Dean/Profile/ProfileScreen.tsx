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
                   <View style={styles.roleBadge}>
    <Text style={styles.role}>
        {user?.role?.toUpperCase()}
    </Text>
</View>
                </View>
                <InfoCard title="Email" value={user?.email ?? ""}/>
                <InfoCard title="Phone" value={user?.phoneNo ?? ""}/>
                <InfoCard title="Department" value={user?.department ?? ""}/>
                <InfoCard title="Subjects" value={user?.subjects?.join(", ") ?? ""}/>
                <View style={{ marginTop: 20 }}>
    <PrimaryButton
        title="Logout"
        onPress={handleLogout}
    />
</View>
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
    roleBadge: {
  marginTop: 12,
  backgroundColor: "#DBEAFE",
  paddingHorizontal: 16,
  paddingVertical: 6,
  borderRadius: 20,
},

role: {
  color: colors.primary,
  fontSize: 13,
  fontWeight: "700",
},
    content:{
        padding:spacing.lg,
    paddingBottom:40,

    },
    profile:{
        alignItems:"center",
        marginBottom:30,
    },
    avatar: {
  width: 110,
  height: 110,
  borderRadius: 55,
  backgroundColor: colors.primary,
  justifyContent: "center",
  alignItems: "center",

  shadowColor: "#000",
  shadowOpacity: 0.12,
  shadowRadius: 8,
  shadowOffset: {
    width: 0,
    height: 3,
  },

  elevation: 5,
},
    avatarText: {
  color: "#fff",
  fontSize: 42,
  fontWeight: "700",
},
    name: {
  marginTop: 18,
  fontSize: 28,
  fontWeight: "700",
  color: "#111827",
},
   
})