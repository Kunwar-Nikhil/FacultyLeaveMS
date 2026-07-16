import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../theme";
const LeaveCard = ({leave}:any)=>{
    const navigation = useNavigation();
    return(
        <View style={styles.card}>
            <Text style={styles.name}>
                {leave.user.fullName}
            </Text>
            <Text>
                {leave.leaveType.name}
            </Text>
            <Text>
                {new Date(leave.fromDate,).toLocaleDateString()}
                {" - "}
                {new Date(leave.toDate,).toLocaleDateString()} 
            </Text>
            <TouchableOpacity style={styles.button}
            onPress={()=>navigation.navigate("FacultyDetails" as never,
                {
                    leave,
                }as never,
            )}>
                <Text style={styles.buttonText}>
                    View
                </Text>

            </TouchableOpacity>
        </View>
    );
};
export default LeaveCard;
const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.white,
        margin:15,
        padding:15,
        borderRadius:12
    },
    name:{
        fontWeight:"700",
        fontSize:18,
    },
    button:{
        marginTop:15,
        backgroundColor:colors.primary,
        padding:12,
        borderRadius:10,
        alignItems:"center"
    },
    buttonText:{
        color:"white",
        fontWeight:"700"
    },

});