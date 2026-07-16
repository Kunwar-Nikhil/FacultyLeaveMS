import React from "react";
import { View, text, StyleSheet, Text,} from "react-native";
import { colors } from "../../../../theme";

interface Props {
    leaveType: string;
    fromDate: string;
    toDate: string;
    status: string;
}

const LeaveCard = ({
    leaveType,
    fromDate,
    toDate,
    status,
}:Props)=>{
    const getStatusColor = () =>{
        switch (status){
            case "approved":
                return "green";
            case "rejected":
                return "red";
            default:
                return "orange";
        }
    };

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.leaveType}>
                    {leaveType}
                </Text>
                <Text style={[styles.status,{color:getStatusColor()},]}>
                    {status.toUpperCase()}
                </Text>
            </View>
            <Text style={styles.date}>
                {fromDate} - {toDate}
            </Text>
        </View>
    );
};
export default LeaveCard;
const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.white,
        marginBottom:15,
        padding:16,
        borderRadius:12,
        elevation:2
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    leaveType:{
        fontSize:16,
        fontWeight:"700",
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