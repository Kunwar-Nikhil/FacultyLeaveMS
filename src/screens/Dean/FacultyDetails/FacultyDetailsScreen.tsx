import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";

import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import PrimaryButton from "../../../components/buttons/PrimaryButton";

import { updateLeaveStatus }  from "../../../api/admin.api";

import {
  colors,
  spacing,
} from "../../../theme";

const FacultyDetailsScreen = () => {
  const navigation = useNavigation<any>();
  const route: any = useRoute();

  const { leave } = route.params;

  const [loadingAction, setLoadingAction] =
    useState<"approved" | "rejected" | null>(null);

  const handleDecision = async (
    status: "approved" | "rejected"
  ) => {
    try {
      setLoadingAction(status);

      const response =
        await updateLeaveStatus(
          leave._id,
          status
        );

      Alert.alert(
        "Success",
        response.message,
        [
          {
            text: "OK",
            onPress: () =>
              navigation.goBack(),
          },
        ]
      );
    } catch (error: any) {
      Alert.alert(
        "Error",
        error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoadingAction(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>
            ← Back
          </Text>
        </TouchableOpacity>

        {/* Faculty Profile */}

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {leave.user.fullName
                ?.charAt(0)
                .toUpperCase()}
            </Text>
          </View>

          <Text style={styles.name}>
            {leave.user.fullName}
          </Text>

          <Text style={styles.department}>
            {leave.user.department}
          </Text>
        </View>

        {/* Leave Information */}

        <Text style={styles.sectionTitle}>
          Leave Details
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>
            Leave Type
          </Text>

          <Text style={styles.value}>
            {leave.leaveType.name}
          </Text>
        </View>

        <View style={styles.dateRow}>
          <View style={styles.smallCard}>
            <Text style={styles.label}>
              From
            </Text>

            <Text style={styles.value}>
              {new Date(
                leave.fromDate
              ).toLocaleDateString()}
            </Text>
          </View>

          <View style={styles.smallCard}>
            <Text style={styles.label}>
              To
            </Text>

            <Text style={styles.value}>
              {new Date(
                leave.toDate
              ).toLocaleDateString()}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>
            Reason
          </Text>

          <Text style={styles.reason}>
            {leave.reason}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Action
        </Text>

        <PrimaryButton
          title="Approve Leave"
          variant="success"
          loading={
            loadingAction === "approved"
          }
          onPress={() =>
            handleDecision("approved")
          }
        />

        <PrimaryButton
          title="Reject Leave"
          variant="danger"
          loading={
            loadingAction === "rejected"
          }
          onPress={() =>
            handleDecision("rejected")
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FacultyDetailsScreen;

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

  /* ---------------- Back Button ---------------- */

  backButton: {
    alignSelf: "flex-start",
    marginBottom: 18,
  },

  backText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "700",
  },

  /* ---------------- Profile ---------------- */

  profileCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 22,

    paddingVertical: 28,
    paddingHorizontal: 20,

    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 5,

    marginBottom: 28,
  },

  avatar: {
    width: 90,
    height: 90,

    borderRadius: 45,

    backgroundColor: colors.primary,

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 16,
  },

  avatarText: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "700",
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },

  department: {
    marginTop: 6,
    fontSize: 15,
    color: "#6B7280",
  },

  /* ---------------- Section ---------------- */

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 15,
  },

  /* ---------------- Cards ---------------- */

  card: {
    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    padding: 18,

    marginBottom: 16,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 4,
  },

  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 14,
    marginBottom: 16,
  },

  smallCard: {
    flex: 1,

    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    padding: 18,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 4,
  },

  label: {
    color: "#6B7280",
    fontSize: 13,
    fontWeight: "500",
  },

  value: {
    marginTop: 8,
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  reason: {
    marginTop: 8,
    color: "#374151",
    fontSize: 15,
    lineHeight: 24,
  },
});