import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Help from "../components/other/Help";

const Other = () => {
  return (
    <View style={styles.container}>
      <Help />
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
