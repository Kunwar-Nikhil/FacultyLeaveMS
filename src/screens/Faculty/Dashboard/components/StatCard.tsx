import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../../theme";

interface Props {
  title: string;
  value: string | number;
}

const StatCard = ({ title, value }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.topBar} />

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
};

export default StatCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,

    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    paddingVertical: 22,
    paddingHorizontal: 18,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 5,

    overflow: "hidden",
  },

  topBar: {
    position: "absolute",

    top: 0,
    left: 0,
    right: 0,

    height: 5,

    backgroundColor: colors.primary,
  },

  title: {
    fontSize: 15,
    fontWeight: "500",

    color: "#6B7280",

    marginTop: 8,
  },

  value: {
    fontSize: 34,

    fontWeight: "700",

    color: "#111827",

    marginTop: 12,
  },
});