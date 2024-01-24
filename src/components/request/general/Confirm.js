import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../../../assets/constants/theme";

const Confirm = () => {
  const { darkPink } = theme.COLORS;

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Proceed to payment</Text>

      <View style={styles.feeWidget}>
        <Text style={styles.feeLabel}>Items' price:</Text>
        <Image
          source={require("../../../../assets/icons/naira_icon.png")}
          style={{ width: 20, height: 20 }}
        />
        <Text style={[styles.fee]}>350</Text>
      </View>

      <View style={styles.feeWidget}>
        <Text style={styles.feeLabel}>Rider's fee:</Text>
        <Image
          source={require("../../../../assets/icons/naira_icon.png")}
          style={{ width: 20, height: 20 }}
        />
        <Text style={[styles.fee]}>150</Text>
      </View>

      <View style={styles.feeWidget}>
        <Text style={[styles.totalLabel, { color: darkPink }]}>
          Items' price:
        </Text>
        <Image
          source={require("../../../../assets/icons/naira_icon.png")}
          style={{ width: 25, height: 25, tintColor: darkPink }}
        />
        <Text style={[styles.totalFee, { color: darkPink }]}>550</Text>
      </View>

      <Text style={styles.finishText}>Click 'Finish' to proceed</Text>
    </View>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  title: {
    fontFamily: "LatoRegular",
    fontSize: 20,
    marginVertical: 15,
    color: "black",
  },
  feeWidget: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 23,
  },
  feeLabel: {
    fontFamily: "Prociono",
    fontSize: 16,
    marginEnd: 7,
  },
  fee: {
    fontFamily: "LatoRegular",
    fontSize: 16,
  },
  totalLabel: {
    fontFamily: "Prociono",
    fontSize: 20,
    marginEnd: 7,
  },
  totalFee: {
    fontFamily: "LatoRegular",
    fontSize: 20,
  },
  finishText: {
    marginTop: 60,
    fontFamily: "LatoBold",
    fontSize: 14,
    letterSpacing: 0.7,
  },
});
