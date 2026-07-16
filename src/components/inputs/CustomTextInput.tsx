import React from "react";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import { colors } from "../../theme";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;

  secureTextEntry?: boolean;
  rightText?: string;
  onRightPress?: () => void;

  multiline?: boolean;
  numberOfLines?: number;

  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad";

  editable?: boolean;
}

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  rightText,
  onRightPress,
  multiline = false,
  numberOfLines = 1,
  keyboardType = "default",
  editable = true,
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          multiline && styles.multiline,
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.textLight}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlignVertical={multiline ? "top" : "center"}
        keyboardType={keyboardType}
        editable={editable}
      />

      {rightText && (
        <TouchableOpacity
          style={styles.rightButton}
          onPress={onRightPress}
        >
          <Text style={styles.rightText}>
            {rightText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 16,
  },

  input: {
    height: 56,
    backgroundColor: colors.white,

    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,

    paddingHorizontal: 18,

    color: colors.textPrimary,

    fontSize: 16,

    elevation: 2,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  multiline: {
    height: 120,
    paddingTop: 15,
  },

  rightButton: {
    position: "absolute",
    right: 18,
    top: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  rightText: {
    color: colors.primary,
    fontWeight: "700",
    fontSize: 14,
  },
});