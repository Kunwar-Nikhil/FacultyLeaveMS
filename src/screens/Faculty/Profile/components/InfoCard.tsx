import React from "react";
import {View, Text,StyleSheet,} from "react-native";
import { colors } from "../../../../theme";

interface Props{
    title: string;
    value: string;
}

const InfoCard = ({
    title,
    value,
}:Props)=>{
    return (
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
export default InfoCard;
const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.white,
        borderRadius:12,
        padding:18,
        marginBottom:15,
        elevation:2
    },
    title:{
        color:colors.textSecondary,
        marginBottom:8,
    },
    value:{
        color:colors.textPrimary,
        fontWeight:"600",
        fontSize:16,
    },
})