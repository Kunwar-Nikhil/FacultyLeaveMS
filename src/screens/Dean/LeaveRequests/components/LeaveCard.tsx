import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../theme";

const LeaveCard = ({ leave }: any) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.card}>
      {/* Header */}

      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {leave.user.fullName.charAt(0).toUpperCase()}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>
            {leave.user.fullName}
          </Text>

          <Text style={styles.department}>
            {leave.user.department}
          </Text>
        </View>

        <View style={styles.pendingChip}>
          <Text style={styles.pendingText}>
            Pending
          </Text>
        </View>
      </View>

      {/* Leave Type */}

      <View style={styles.section}>
        <Text style={styles.label}>
          Leave Type
        </Text>

        <Text style={styles.value}>
          {leave.leaveType.name}
        </Text>
      </View>

      {/* Date */}

      <View style={styles.section}>
        <Text style={styles.label}>
          Leave Duration
        </Text>

        <Text style={styles.value}>
          {new Date(leave.fromDate).toLocaleDateString()}
          {"  →  "}
          {new Date(leave.toDate).toLocaleDateString()}
        </Text>
      </View>

      {/* Button */}

      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            "FacultyDetails",
            {
              leave,
            }
          )
        }
      >
        <Text style={styles.buttonText}>
          View Details →
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LeaveCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",

    marginHorizontal: 18,
    marginTop: 18,

    padding: 20,

    borderRadius: 20,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 55,
    height: 55,

    borderRadius: 28,

    backgroundColor: "#DBEAFE",

    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.primary,
  },

  info: {
    flex: 1,
    marginLeft: 14,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  department: {
    marginTop: 4,
    color: "#6B7280",
    fontSize: 14,
  },

  pendingChip: {
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  pendingText: {
    color: "#D97706",
    fontWeight: "700",
    fontSize: 12,
  },

  section: {
    marginTop: 18,
  },

  label: {
    color: "#6B7280",
    fontSize: 13,
  },

  value: {
    marginTop: 5,
    color: "#111827",
    fontWeight: "600",
    fontSize: 16,
  },

  button: {
    marginTop: 22,

    backgroundColor: colors.primary,

    height: 50,

    borderRadius: 14,

    justifyContent: "center",
    alignItems: "center",

    shadowColor: colors.primary,
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});