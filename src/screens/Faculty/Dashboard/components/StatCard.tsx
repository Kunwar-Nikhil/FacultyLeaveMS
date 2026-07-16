import React from "react";
import {View,Text,StyleSheet,} from "react-native";
import {colors,spacing,} from "../../../../theme";

interface Props{
    title:string;
    value:string | number;
}

const StatCard = ({
    title,value,
}:Props)=>{
    return(
        <View style={styles.card}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.value}>
                {value}
            </Text>
        </View>
    );
};
export default StatCard;
const styles = StyleSheet.create({
    card:{
        flex:1,
        backgroundColor:colors.white,
        borderRadius:12,
        padding:18,
        elevation:3
    },
    title:{
        color:colors.textSecondary,
        fontSize:14,
    },
    value:{
        fontSize:26,
        fontWeight:"700",
        color:colors.primary,
        marginTop:8,
    }
})