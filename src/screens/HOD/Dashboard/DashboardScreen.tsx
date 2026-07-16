import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";
import {
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";
import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import StatCard from "../../Faculty/Dashboard/components/StatCard";
import QuickActionCard from "../../Faculty/Dashboard/components/QuickActionCard";
import { colors } from "../../../theme";
const DashboardScreen = () => {
  const navigation = useNavigation<any>();

  const { user } = useSelector(
    (state: RootState) => state.auth
  );
  const [refreshing, setRefreshing] = useState(false);

const stats = {
  pending: 0,
  approved: 0,
  rejected: 0,
  faculty: 0,
};

const loadDashboard = async () => {
  try {
    setRefreshing(true);

    // TODO:
    // HOD Dashboard API call yahan aayegi

  } catch (e) {
    console.log(e);
  } finally {
    setRefreshing(false);
  }
};

useFocusEffect(
  useCallback(() => {
    loadDashboard();
  }, [])
);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.content}
    refreshControl={
        <RefreshControl
            refreshing={refreshing}
            onRefresh={loadDashboard}
            tintColor={colors.primary}
        />
    }
>
        {/* Header */}
<View style={styles.header}>
  <View style={styles.headerLeft}>
    <Text style={styles.greeting}>
      Good Morning 👋
    </Text>

    <Text style={styles.name}>
      {user?.fullName}
    </Text>

    <View style={styles.roleContainer}>
      <Text style={styles.role}>
        Head of Department
      </Text>
    </View>
  </View>

  <View style={styles.avatar}>
    <Text style={styles.avatarText}>
      {user?.fullName?.charAt(0).toUpperCase()}
    </Text>
  </View>
</View>

<View style={styles.profileCard}>
  <Text style={styles.departmentLabel}>
    Department
  </Text>

  <Text style={styles.department}>
    {user?.department}
  </Text>

  <Text style={styles.subtitle}>
    Manage faculty leave requests efficiently.
  </Text>
</View>
       

        {/* Statistics */}

        <Text style={styles.section}>
  Department Overview
</Text>

<View style={styles.row}>
  <StatCard
    title="Pending"
    value={stats.pending}
  />

  <StatCard
    title="Approved"
    value={stats.approved}
  />
</View>

<View style={styles.row}>
  <StatCard
    title="Rejected"
    value={stats.rejected}
  />

  <StatCard
    title="Faculty"
    value={stats.faculty}
  />
</View>

        {/* Actions */}

       <Text style={styles.section}>
  Quick Actions
</Text>

<QuickActionCard
  title="View Leave Requests"
  onPress={() => navigation.navigate("Requests")}
/>

<Text style={styles.section}>
  Recent Activity
</Text>

<View style={styles.activityCard}>
  <Text style={styles.activityTitle}>
    No recent activity
  </Text>

  <Text style={styles.activitySubTitle}>
    Leave requests will appear here.
  </Text>
</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },

  /* ---------------- Header ---------------- */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  headerLeft: {
    flex: 1,
  },

  greeting: {
    fontSize: 15,
    color: "#6B7280",
    fontWeight: "500",
  },

  name: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111827",
    marginTop: 2,
  },

  roleContainer: {
    marginTop: 10,
    backgroundColor: "#DBEAFE",
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  role: {
    color: "#2563EB",
    fontSize: 13,
    fontWeight: "700",
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: colors.primary,

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 5,
  },

  avatarText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },

  /* ---------------- Department Card ---------------- */

  profileCard: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 22,
    marginBottom: 28,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 5,
  },

  departmentLabel: {
    color: "#DBEAFE",
    fontSize: 14,
    fontWeight: "500",
  },

  department: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
    marginTop: 5,
  },

  subtitle: {
    color: "#E5E7EB",
    fontSize: 14,
    marginTop: 10,
    lineHeight: 22,
  },

  /* ---------------- Section ---------------- */

  section: {
    fontSize: 21,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 15,
    marginTop: 8,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 14,
    marginBottom: 16,
  },

  /* ---------------- Activity ---------------- */

  activityCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    marginTop: 8,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },

  activityTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  activitySubTitle: {
    marginTop: 8,
    color: "#6B7280",
    fontSize: 14,
    lineHeight: 20,
  },
});