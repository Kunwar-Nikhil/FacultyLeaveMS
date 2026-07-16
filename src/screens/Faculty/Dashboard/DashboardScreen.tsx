import React,{useCallback} from "react";
import { useFocusEffect } from "@react-navigation/native";

import { SafeAreaView,Text,StyleSheet,View,ScrollView } from "react-native";
import { useSelector,} from "react-redux";
import { RootState } from "../../../redux/store";
import { colors,spacing, } from "../../../theme";
import StatCard from "./components/StatCard";
import QuickActionCard from "./components/QuickActionCard";
import { useEffect,useState } from "react";
import { getLeaveCounts,getMyLeaves } from "../../../api/leave.api";
import LeaveHistoryCard from "./components/LeaveHistoryCard";
import { useNavigation } from "@react-navigation/native";
const DashBoardScreen = () => {
const {user}=useSelector((state:RootState)=>state.auth);
const [counts,setCounts] = useState({
    pending:0,
    approved:0,
    rejected:0,
    total:0,
});
const navigation = useNavigation();
const [recentLeaves,setRecentLeaves] = useState([]);
const [loading,setLoading] = useState(true);
const loadDashboard = async()=>{
    try{
        setLoading(true);

        const countsResponse = await getLeaveCounts();
const leaveResponse = await getMyLeaves();
        setCounts(countsResponse.counts);
        setRecentLeaves(leaveResponse.leaves)
        
    }catch(error){
        console.log(error);
    }finally{
        setLoading(false);
    };
};

useFocusEffect(
    useCallback(() => {
        loadDashboard();
    }, [])
);

return(
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Text style={styles.title}>
            Welcome,
        </Text>
        <Text style={styles.name}>
            {user?.fullName}
        </Text>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Department  
            </Text>
            <Text style={styles.cardValue}>
                {user?.department}
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.cardTitle}>
                Role
            </Text>
            <Text style={styles.cardValue}>
                {user?.role}
            </Text>
        </View>
        <View style={styles.statsRow}>
            <StatCard
            title="Pending"
            value={loading? "--" :counts.pending}
            />
            <StatCard
            title="Approved"
            value={loading ? "--" : counts.approved}
            />
        </View>
        <View style={styles.statsRowSecond}>
            <StatCard
            title="Rejected"
            value={loading? "--":counts.rejected}
            />
            <StatCard
            title="Total"
            value={loading?"--":counts.total}
            />
        </View>
        <QuickActionCard title="Apply Leave"  onPress={() => navigation.navigate("Apply Leave" as never)}/>
        <Text style={{fontSize:20,fontWeight:"700",marginTop:30,marginBottom:10,}}>
            Recent Leaves
        </Text>
        {
            recentLeaves.map((leave:any)=>(
                <LeaveHistoryCard
                key={leave._id}
                leaveType={leave.leaveType.name}
                fromDate={
                    new Date(leave.fromDate).toDateString()
                }
                toDate={new Date(leave.fromDate).toLocaleDateString()}
                status={leave.status}
                />
            ))
        }
        
        </ScrollView>
    </SafeAreaView>
);
};
export default DashBoardScreen;
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:colors.background,
},
content:{
    padding:spacing.lg,
},
title:{fontSize:20,
    color:colors.textSecondary,
},
name:{
    fontSize:28,
    fontWeight:"700",
    color:colors.primary,
    marginBottom:25,
},
card:{
    backgroundColor:colors.white,
    padding:18,
    borderRadius:12,
    marginBottom:15,
    elevation:2,
},
cardTitle:{
    fontSize:14,
    color:colors.textSecondary,
    marginBottom:8,
},
cardValue:{
    fontSize:18,
    fontWeight:"700",
    color:colors.textPrimary,
},
statsRow:{
    flexDirection:"row",
    gap:15,
    marginTop:20,
},
statsRowSecond:{
    flexDirection:"row",
    gap:15,
    marginTop:15,
}

});