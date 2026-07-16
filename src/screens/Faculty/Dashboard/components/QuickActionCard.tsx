import React from "react";
import {
  TouchableOpacity,
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
      style={styles.card}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default QuickActionCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    padding: 18,
    borderRadius: 14,
    marginTop: 20,
    alignItems: "center",

    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  text: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 16,
  },
});