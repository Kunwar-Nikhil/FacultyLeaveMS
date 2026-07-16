import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import StatCard from "../../Faculty/Dashboard/components/StatCard";
import QuickActionCard from "../../Faculty/Dashboard/components/QuickActionCard";
import { colors, spacing } from "../../../theme";

const DashboardScreen = () => {
  const navigation = useNavigation<any>();

  const { user } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}

        <Text style={styles.greeting}>
          Good Morning 👋
        </Text>

        <Text style={styles.name}>
          {user?.fullName}
        </Text>

        {/* Profile Card */}

        <View style={styles.profileCard}>
          <View>
            <Text style={styles.role}>
              Head of Department
            </Text>

            <Text style={styles.department}>
              {user?.department}
            </Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.fullName?.charAt(0)}
            </Text>
          </View>
        </View>

        {/* Statistics */}

        <Text style={styles.section}>
          Dashboard Overview
        </Text>

        <View style={styles.row}>
          <StatCard
            title="Pending"
            value="--"
          />

          <StatCard
            title="Approved"
            value="--"
          />
        </View>

        <View style={styles.row}>
          <StatCard
            title="Rejected"
            value="--"
          />

          <StatCard
            title="Faculty"
            value="--"
          />
        </View>

        {/* Actions */}

        <Text style={styles.section}>
          Quick Actions
        </Text>

        <QuickActionCard
          title="View Leave Requests"
          onPress={() =>
            navigation.navigate("Requests")
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8FC",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  greeting: {
    fontSize: 18,
    color: "#64748B",
  },

  name: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 25,
  },

  profileCard: {
    backgroundColor: colors.primary,
    borderRadius: 18,
    padding: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 30,

    elevation: 4,
  },

  role: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  department: {
    color: "#E5E7EB",
    marginTop: 6,
    fontSize: 15,
  },

  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#fff",

    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.primary,
  },

  section: {
    marginBottom: 15,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    marginBottom: 15,
  },
});