import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { RootState } from "../../../redux/store";

import StatCard from "../../Faculty/Dashboard/components/StatCard";
import QuickActionCard from "../../Faculty/Dashboard/components/QuickActionCard";

import { colors } from "../../../theme";

const DashboardScreen = () => {
  const navigation = useNavigation<any>();

  const { user } = useSelector(
    (state: RootState) => state.auth
  );

  const stats = {
    pending: 0,
    approved: 0,
    rejected: 0,
    faculty: 0,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
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
                Dean
              </Text>
            </View>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.fullName?.charAt(0).toUpperCase()}
            </Text>
          </View>
        </View>

        {/* Department Card */}

        <View style={styles.profileCard}>
          <Text style={styles.departmentLabel}>
            Department
          </Text>

          <Text style={styles.department}>
            {user?.department}
          </Text>

          <Text style={styles.subtitle}>
            Manage and monitor all leave requests across departments.
          </Text>
        </View>

        {/* Stats */}

        <Text style={styles.section}>
          Dashboard Overview
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

        {/* Quick Actions */}

        <Text style={styles.section}>
          Quick Actions
        </Text>

        <QuickActionCard
          title="View Leave Requests"
          onPress={() =>
            navigation.navigate("LeaveRequests")
          }
        />

    

        {/* Recent */}

        <Text style={styles.section}>
          Recent Activity
        </Text>

        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>
            No recent activity
          </Text>

          <Text style={styles.activitySubTitle}>
            New leave requests will appear here.
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
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
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
    fontWeight: "700",
    fontSize: 13,
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },

  profileCard: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 22,
    marginBottom: 25,
    elevation: 5,
  },

  departmentLabel: {
    color: "#DBEAFE",
    fontSize: 14,
  },

  department: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 6,
  },

  subtitle: {
    color: "#E5E7EB",
    marginTop: 10,
    fontSize: 14,
    lineHeight: 22,
  },

  section: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 15,
    marginTop: 10,
  },

  row: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 15,
  },

  activityCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    elevation: 3,
    marginTop: 8,
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
  },
});