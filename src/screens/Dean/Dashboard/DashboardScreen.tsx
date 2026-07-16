import React from "react";
import { SafeAreaView,ScrollView,StyleSheet,Text,View } from "react-native";
import { useSelector} from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../../redux/store";
import StatCard from "../../Faculty/Dashboard/components/StatCard";
import QuickActionCard from "../../Faculty/Dashboard/components/QuickActionCard";
import { colors,spacing,typography } from "../../../theme";

const DashboardScreen = () =>{
    const navigation = useNavigation();
    const {user}=useSelector((state:RootState)=>state.auth);
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.heading}>
                    Welcome,
                </Text>
                <Text style={styles.name}>
                    {user?.fullName}
                </Text>
               <View style={styles.row}>

<StatCard
title="Pending HOD Approval"
value="--"
/>

<StatCard
title="Approved Today"
value="--"
/>

</View>

<View style={styles.rowSecond}>

<StatCard
title="Rejected Today"
value="--"
/>

<StatCard
title="Faculty Count"
value="--"
/>

</View>
<QuickActionCard
title="View Requests"
onPress={()=>
navigation.navigate("LeaveRequests" as never)
}
/>
            
            </ScrollView>
        </SafeAreaView>
    );
};
export default DashboardScreen;
const styles = StyleSheet.create({

container:{
    flex:1,
    backgroundColor:colors.background,
},

content:{
    padding:spacing.lg,
},

heading:{
    fontSize:20,
    color:colors.textSecondary,
},

name:{
    fontSize:28,
    color:colors.primary,
    fontWeight:"700",
    marginBottom:25,
},

row:{
    flexDirection:"row",
    gap:15,
    marginTop:20,
},

rowSecond:{
    flexDirection:"row",
    gap:15,
    marginTop:15,
},

});