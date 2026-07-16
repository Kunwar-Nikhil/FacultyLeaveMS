import React from "react";

import{
    TouchableOpacity,Text,StyleSheet
} from "react-native"

import { colors,spacing } from "../../theme";

interface Props {
    title: string;
    onPress: ()=> void;
    loading?: boolean;
    variant?: "primary" | "success" | "danger";
}

const PrimaryButton = ({
    title,
    onPress,
    loading = false,
    variant = "primary",
}:Props) =>{
    const getBackgroundColor = () => {

  switch (variant) {

    case "success":
      return "#22C55E";

    case "danger":
      return "#EF4444";

    default:
      return colors.primary;

  }

};
return(
    <TouchableOpacity style={[styles.button,{backgroundColor:getBackgroundColor()}]}
    activeOpacity={0.8}
    onPress={onPress}
    disabled={loading}>
    <Text style={styles.text}>
    {loading ? "Please Wait...." : title}</Text>
    </TouchableOpacity>
)}
export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 14,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 24,

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});
