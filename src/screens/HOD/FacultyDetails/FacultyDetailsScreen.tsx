import React,{useState} from "react";

import{
SafeAreaView,
ScrollView,
Text,
View,
StyleSheet,
Alert,
} from "react-native";

import {useNavigation,useRoute} from "@react-navigation/native";

import PrimaryButton from "../../../components/buttons/PrimaryButton";

import {updateLeaveStatus} from "../../../api/admin.api";

import{
colors,
spacing,
typography,
} from "../../../theme";

const FacultyDetailsScreen=()=>{

const navigation=useNavigation();

const route:any=useRoute();

const {leave}=route.params;

const [loadingAction,setLoadingAction]=useState<"approved" | "rejected" |null >(null);
const handleDecision=async(

status:"approved"|"rejected",

)=>{

try{

setLoadingAction(status);

const response=

await updateLeaveStatus(

leave._id,

status,

);

Alert.alert(

"Success",

response.message,

[
{
text:"OK",

onPress:()=>navigation.goBack(),

},
],

);

}catch(error:any){

Alert.alert(

"Error",

error?.response?.data?.message||

"Something went wrong",

);

}

finally{

setLoadingAction(null);

}

};
return(

<SafeAreaView style={styles.container}>

<ScrollView
contentContainerStyle={styles.content}>

<Text style={styles.name}>

{leave.user.fullName}

</Text>

<Text style={styles.department}>

{leave.user.department}

</Text>

<View style={styles.card}>

<Text style={styles.label}>

Leave Type

</Text>

<Text style={styles.value}>

{leave.leaveType.name}

</Text>

</View>

<View style={styles.card}>

<Text style={styles.label}>

From Date

</Text>

<Text style={styles.value}>

{new Date(

leave.fromDate,

).toLocaleDateString()}

</Text>

</View>

<View style={styles.card}>

<Text style={styles.label}>

To Date

</Text>

<Text style={styles.value}>

{new Date(

leave.toDate,

).toLocaleDateString()}

</Text>

</View>

<View style={styles.card}>

<Text style={styles.label}>

Reason

</Text>

<Text style={styles.value}>

{leave.reason}

</Text>

</View>

<PrimaryButton

title="Approve"
variant="success"

loading={loadingAction==="approved"}

onPress={()=>handleDecision("approved")}

/>

<PrimaryButton

title="Reject"
variant="danger"
loading={loadingAction==="rejected"}

onPress={()=>handleDecision("rejected")}

/>

</ScrollView>

</SafeAreaView>

);
}
export default FacultyDetailsScreen;
const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:colors.background,
},

content:{
padding:spacing.lg,
},

name:{
fontSize:28,
fontWeight:"700",
color:colors.primary,
},

department:{
fontSize:16,
marginBottom:25,
color:colors.textSecondary,
},

card:{
backgroundColor:colors.white,
padding:18,
borderRadius:12,
marginBottom:15,
},

label:{
fontWeight:"700",
marginBottom:8,
},

value:{
fontSize:16,
color:colors.textPrimary,
},

});