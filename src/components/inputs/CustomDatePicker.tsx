import React, {useState} from "react";
import {View,Text,TouchableOpacity,StyleSheet,Platform} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { colors,spacing, } from "../../theme";
interface Props{
    value:string;
    placeholder:string;
    onChange:(date:string)=>void;
}

const CustomDatePicker=({
    value,placeholder,onChange
}:Props)=>{
    const [show,setShow]=useState(false);
    const handleChange=(event:any,selectedDate?:Date)=>{
        setShow(false);
        if(selectedDate){
            onChange(selectedDate.toISOString());
        }
    }
    return(
        <View>
            <TouchableOpacity
            style={styles.input}
            onPress={()=>setShow(true)}>
            <Text style={[styles.text,{
                color:value?colors.textPrimary:colors.textSecondary,}]}>
{value?new Date(value).toLocaleDateString():placeholder}
                </Text>
           
            </TouchableOpacity>
            {show&&(
                <DateTimePicker
                value={value?new Date(value):new Date()}
                mode="date"
                display="default"
                minimumDate={new Date()}
                onChange={handleChange}/>
            )}
        </View>
    )
}
export default CustomDatePicker;
const styles = StyleSheet.create({
input:{
    height:52,
    borderWidth:1,
    borderColor:colors.border,
    borderRadius:12,
    justifyContent:"center",
    paddingHorizontal:15,
    marginTop:15,
    backgroundColor:colors.white,
},
text:{
    fontSize:16
},
})