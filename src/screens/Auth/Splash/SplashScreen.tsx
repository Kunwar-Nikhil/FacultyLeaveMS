import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
  ActivityIndicator,
} from "react-native";

import { colors } from "../../../theme";

interface Props {
  onFinish: () => void;
}

const SplashScreen = ({ onFinish }: Props) => {
  const fade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fade,
            transform: [{ scale }],
          },
        ]}
      >
        <View style={styles.logoCircle}>
          <Text style={styles.logoLetter}>F</Text>
        </View>

        <Text style={styles.title}>
          Faculty Leave
        </Text>

        <Text style={styles.title2}>
          Management System
        </Text>

        <Text style={styles.subtitle}>
          Smart Leave Management
        </Text>

        <ActivityIndicator
          size="large"
          color="#fff"
          style={{ marginTop: 35 }}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
  },

  logoContainer: {
    alignItems: "center",
  },

  logoCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },

  logoLetter: {
    fontSize: 52,
    fontWeight: "800",
    color: "#2563EB",
  },

  title: {
    marginTop: 35,
    fontSize: 32,
    fontWeight: "800",
    color: "#fff",
  },

  title2: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
  },

  subtitle: {
    marginTop: 12,
    color: "#E5E7EB",
    fontSize: 16,
  },
});