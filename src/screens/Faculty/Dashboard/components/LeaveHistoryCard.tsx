import React from "react";
import {View,Text,StyleSheet} from "react-native";
import { colors,spacing } from "../../../../theme";

interface Props{
    leaveType: string;
    fromDate: string;
    toDate: string;
    status: "pending" | "approved" | "rejected";
}

const LeaveHistoryCard = ({
    leaveType,
    fromDate,
    toDate,
    status,
}:Props)=>{
    const statusColor = () => {
        switch(status){
            case "approved": return "green";
            case "rejected": return "red";
            default: return "orange"
        }
    };
return(
<View style={styles.card}>
    <View style={styles.row}>
        <Text style={styles.leaveType}>
            {leaveType}
        </Text>
        <Text style={[
            styles.status,
            {color:statusColor()},
        ]}>
            {status.toUpperCase()}
        </Text>
    </View>
    <Text style={styles.date}>
        {fromDate} - {toDate}
    </Text>
</View>
);
};
export default LeaveHistoryCard;
const styles = StyleSheet.create({
card:{
    backgroundColor:colors.white,
    padding:16,
    borderRadius:12,
    marginTop:12,
    elevation:2,
},
row:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
},
leaveType:{
   fontSize:16,
   fontWeight:"600",
   color:colors.textPrimary, 
},
status:{
    fontWeight:"700",
},
date:{
    marginTop:10,
    color:colors.textSecondary,
},
})