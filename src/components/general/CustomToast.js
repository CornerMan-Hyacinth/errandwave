import React, { useEffect } from "react";
import { Animated, View, Text, StyleSheet } from "react-native";

const CustomToast = ({ visible, message }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [visible, fadeAnim]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
    padding: 10,
    position: "absolute",
    bottom: 65,
    alignSelf: "center",
    zIndex: 1,
  },
  text: {
    color: "white",
  },
});

export default CustomToast;
