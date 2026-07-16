import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../../theme";

interface Props {
  leaveType: string;
  fromDate: string;
  toDate: string;
  status: "pending" | "approved" | "rejected";
}

const LeaveHistoryCard = ({
  leaveType,
  fromDate,
  toDate,
  status,
}: Props) => {
  const getStatusColor = () => {
    switch (status) {
      case "approved":
        return "#16A34A";

      case "rejected":
        return "#DC2626";

      default:
        return "#F59E0B";
    }
  };

  const getStatusBg = () => {
    switch (status) {
      case "approved":
        return "#DCFCE7";

      case "rejected":
        return "#FEE2E2";

      default:
        return "#FEF3C7";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "approved":
        return "✔";

      case "rejected":
        return "✖";

      default:
        return "⏳";
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>📄</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.leaveType}>
            {leaveType}
          </Text>

          <Text style={styles.date}>
            {fromDate}
          </Text>

          <Text style={styles.toDate}>
            to {toDate}
          </Text>
        </View>

        <View
          style={[
            styles.statusContainer,
            {
              backgroundColor: getStatusBg(),
            },
          ]}
        >
          <Text
            style={[
              styles.status,
              {
                color: getStatusColor(),
              },
            ]}
          >
            {getStatusIcon()} {status.toUpperCase()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LeaveHistoryCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    padding: 18,

    marginTop: 16,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
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

  iconContainer: {
    width: 52,
    height: 52,

    borderRadius: 26,

    backgroundColor: "#DBEAFE",

    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 24,
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  leaveType: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  date: {
    marginTop: 6,
    fontSize: 14,
    color: "#6B7280",
  },

  toDate: {
    marginTop: 2,
    fontSize: 14,
    color: "#6B7280",
  },

  statusContainer: {
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  status: {
    fontSize: 12,
    fontWeight: "700",
  },
});