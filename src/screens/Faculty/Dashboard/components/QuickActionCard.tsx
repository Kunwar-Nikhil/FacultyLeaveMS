import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { colors } from "../../../../theme";

interface Props {
  title: string;
  onPress: () => void;
}

const QuickActionCard = ({
  title,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>📄</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          Tap to continue
        </Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
};

export default QuickActionCard;

const styles = StyleSheet.create({
  card: {
    marginTop: 16,

    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    paddingVertical: 18,
    paddingHorizontal: 18,

    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  iconContainer: {
    width: 54,
    height: 54,

    borderRadius: 27,

    backgroundColor: "#DBEAFE",

    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 24,
  },

  content: {
    flex: 1,
    marginLeft: 16,
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#6B7280",
  },

  arrow: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: "700",
  },
});