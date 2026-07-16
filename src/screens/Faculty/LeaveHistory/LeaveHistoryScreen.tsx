import React, {useEffect,useState} from "react";
import { SafeAreaView,FlatList,Text,StyleSheet, SafeAreaViewBase } from "react-native";
import { getMyLeaves } from "../../../api/leave.api";
import LeaveCard from "./components/LeaveCard";
import { colors,spacing,typography } from "../../../theme";

const LeaveHistoryScreen= () => {
    const [leaves,setLeaves] = useState([]);
    const [loading,setLoading] = useState(false);
    const loadLeaves = async() => {
        try {
            setLoading(true);
            const response = await getMyLeaves();
            setLeaves(response.leaves);
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    };
    useEffect(()=>{
        loadLeaves();
    },[]);
    return(
<SafeAreaView style={styles.container}>
    <FlatList
    data={leaves}
    keyExtractor={(item:any)=>item._id}
    refreshing={loading}
    onRefresh={loadLeaves}
    renderItem={({item}:any)=>(
        <LeaveCard
        leaveType={item.leaveType.name}
        fromDate={new Date(item.fromDate).toLocaleDateString()}
        toDate={new Date(item.toDate).toLocaleDateString()}
        status={item.status}
        />
    )}
    ListHeaderComponent={
        <Text style={styles.heading}>
            Leave History
        </Text>
    }
    />
</SafeAreaView>
    );
};
export default LeaveHistoryScreen;
const styles= StyleSheet.create({
container:{
    flex:1,
    backgroundColor:colors.background,
},
heading:{
fontSize:typography.h2,
color:colors.primary,
fontWeight:"700",
padding:spacing.lg
},
})