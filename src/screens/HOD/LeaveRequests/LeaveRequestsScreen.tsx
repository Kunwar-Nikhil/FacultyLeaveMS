import React, { useEffect,useState} from "react";
import { SafeAreaView,FlatList, } from "react-native";

import { getPendingleaves } from "../../../api/admin.api";
import LeaveCard from "./components/LeaveCard";
const LeaveRequestsScreen = () =>{
    const [leaves,setLeaves]=useState([]);
    const [loading,setLoading]=useState(false)

    const loadLeaves = async()=>{
    try{
        setLoading(true);
        const response = await getPendingleaves();
        setLeaves(response.leaves)
    }finally{
        setLoading(false)
    }
};
useEffect(()=>{
    loadLeaves();
},[]);
    return(
<SafeAreaView style={{flex:1}}>
    <FlatList
    data={leaves}
    refreshing={loading}
    onRefresh={loadLeaves}
    keyExtractor={(item:any)=>item._id}
    renderItem={({item}:any)=>(
        <LeaveCard leave={item}/>
    )}
    />
</SafeAreaView>
    )

}
export default LeaveRequestsScreen;