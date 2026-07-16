import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import { colors } from "../theme";

interface Item {
  label: string;
  value: string;
}

interface Props {
  placeholder: string;
  data: Item[];
  value: string;
  onChange: (value: string) => void;
}

const CustomDropdown = ({
  placeholder,
  data,
  value,
  onChange,
}: Props) => {
  const [visible, setVisible] = useState(false);

  const selectedItem = data.find((item) => item.value === value);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.input}
        onPress={() => setVisible(!visible)}
      >
        <Text
          style={[
            styles.text,
            {
              color: selectedItem
                ? colors.textPrimary
                : colors.textLight,
            },
          ]}
        >
          {selectedItem ? selectedItem.label : placeholder}
        </Text>

        <Text style={styles.arrow}>
          {visible ? "▲" : "▼"}
        </Text>
      </TouchableOpacity>

      {visible && (
        <View style={styles.dropdown}>
          <ScrollView
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
          >
            {data.map((item) => (
              <TouchableOpacity
                key={item.value}
                style={styles.item}
                onPress={() => {
                  onChange(item.value);
                  setVisible(false);
                }}
              >
                <Text style={styles.itemText}>
                  {item.label}
                </Text>

                {value === item.value && (
                  <Text style={styles.check}>
                    ✓
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
  },

  input: {
    height: 56,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  text: {
    fontSize: 16,
    color: colors.textPrimary,
  },

  arrow: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: "700",
  },

  dropdown: {
    marginTop: 8,
    maxHeight: 220,
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 5,
    overflow: "hidden",
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },

  itemText: {
    fontSize: 16,
    color: colors.textPrimary,
  },

  check: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "700",
  },
});