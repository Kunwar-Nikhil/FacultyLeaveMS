import React, {useState,useEffect} from "react";
import { SafeAreaView,ScrollView,StyleSheet,Text } from "react-native";
import  CustomDropdown  from "../../../components/CustomDropdown";
import CustomTextInput from "../../../components/inputs/CustomTextInput";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { colors,spacing,typography } from "../../../theme";
import { getLeaveType } from "../../../api/leave.api";
import {applyLeave} from "../../../api/leave.api";
import { Alert } from "react-native";
import CustomDatePicker from "../../../components/inputs/CustomDatePicker";
import { getRemaningLeaves } from "../../../api/leave.api";

const ApplyLeaveScreen = () => {
    const [leaveTypes,setLeaveTypes]=useState<{
label:string;
value:string;
    }[]
    >([]);
    const [fromDate,setFromDate] = useState("");
    const [toDate,setToDate] = useState("");
    const [reason,setReason]= useState("");
const [leaveType,setLeaveType]=useState("")
const [remaningLeaves,setRemaningLeaves]=useState<number | null>(null);
const[loading,setLoading]= useState(false)
    const loadLeaveTypes = async()=>{
        try{
            const response = await getLeaveType();
            const formatted = response.leaveTypes.map(
                (item:any)=>({
                    label:item.name,
                    value:item._id,
                }),
            );
            setLeaveTypes(formatted)
        }catch(error){
            console.log(error)
        }
    };
    
    useEffect(()=>{
        loadLeaveTypes();
    },[])

    const loadRemainigLeaves = async(leaveTypeId: string,)=>{
      try{
        const response = await getRemaningLeaves(leaveTypeId,);

        setRemaningLeaves(response.remainingDays,);
      }catch(error){
        console.log(error);
      }
    }
   const handleApplyLeave = async() => {
    if(!leaveType){
        Alert.alert("Error","Select Leave Type")
        return;
    }
    if (!fromDate) {
    Alert.alert("Error", "Select From Date");
    return;
  }

  if (!toDate) {
    Alert.alert("Error", "Select To Date");
    return;
  }

  if (!reason.trim()) {
    Alert.alert("Error", "Enter Reason");
    return;
  }
  if (remaningLeaves === 0){
    Alert.alert("No Leave Balance","You don't have any remaining leave for this leave type.");
    return;
  }
  if (new Date(fromDate)> new Date(toDate)){
    Alert.alert("Error","From Date cannot be after To Date");
    return;
  }
  try{
    setLoading(true);
    const response = await applyLeave({
        leaveType,
        fromDate,
        toDate,
        reason
    });
    Alert.alert(
        "Sucess", response.message,
    );
        setLeaveType("");
    setFromDate("");
    setToDate("");
    setReason("");

  }catch(error:any){
    Alert.alert("Error",error?.response?.data?.message || "Failed to apply Leave")
  }finally{
    setLoading(false)
  }
   }
  
    return(
<SafeAreaView style ={styles.container}>
<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
    <Text style={styles.heading}>
        Apply Leave
    </Text>
    <CustomDropdown
    placeholder="Select Leave Type"
    data={leaveTypes}
    value={leaveType}
    onChange={(value)=>{
      setLeaveType(value);
      loadRemainigLeaves(value);
    }}/>
    {
      remaningLeaves !== null && (
        <Text style={styles.remaining}>
          Remaining Leave : 
          {" "}
          {remaningLeaves}
          Days
        </Text>
      )
    }
  <CustomDatePicker
    placeholder="From Date"
    value={fromDate}
    onChange={setFromDate}
/>

<CustomDatePicker
    placeholder="To Date"
    value={toDate}
    onChange={setToDate}
/>
    <CustomTextInput
    placeholder="Reason"
    value={reason}
    onChangeText={setReason}
    multiline
    numberOfLines={5}/>
    <PrimaryButton
    title="Apply Leave"
    loading={loading}
    onPress={handleApplyLeave}/>
</ScrollView>
</SafeAreaView>
    );
};
export default ApplyLeaveScreen;
const styles = StyleSheet.create({
    heading:{
        fontSize:typography.h2,
        color:colors.primary,
        fontWeight:"700",
        marginBottom:20,
    },
    container:{
        flex:1,
        backgroundColor:colors.background,
    },
    content:{padding:spacing.lg,},
    remaining:{marginTop:10,
      color:colors.primary,
      fontWeight:"700",
      fontSize:16
    }
})