import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../../assets/constants/theme";

const Confirm = () => {
  const { darkPink } = theme.COLORS;

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headText}>
        Based on your entries, the rider's fee will cost:
      </Text>

      <View style={styles.feeWidget}>
        <Image
          source={require("../../../assets/icons/naira_icon.png")}
          style={{ tintColor: darkPink, width: 24, height: 24, marginTop: 7 }}
        />
        <Text style={[styles.fee, { color: darkPink }]}>200</Text>
      </View>

      <Text style={styles.finishText}>Click 'Finish' to confirm</Text>
    </View>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  headText: {
    fontFamily: "LatoRegular",
    fontSize: 16,
    marginTop: 15,
    color: "black",
    width: 250,
  },
  feeWidget: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 23,
  },
  fee: {
    fontFamily: "Prociono",
    fontSize: 30,
  },
  finishText: {
    marginTop: 45,
    fontFamily: "LatoBold",
    fontSize: 14,
    letterSpacing: 0.7,
  },
});
