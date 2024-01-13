import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../../assets/constants/theme";

const PriceRange = ({ price, updatePrice }) => {
  const { darkPink } = theme.COLORS;

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Select a price range</Text>
      <Text style={[styles.warning, { color: darkPink }]}>
        *Recommended not to fix an errand of 10,000 NGN and above.
      </Text>

      <View style={{ marginTop: 30 }}>
        <Pressable
          style={styles.checkWidget}
          onPress={() => updatePrice("priceRange", "0 - 999")}
        >
          <View
            style={[
              styles.checkBox,
              price === "0 - 999" && { backgroundColor: darkPink },
            ]}
          />
          <Image
            source={require("../../../assets/icons/naira_icon.png")}
            style={{ tintColor: darkPink, width: 24, height: 24 }}
          />
          <Text style={styles.checkPrice}>0 - 999</Text>
        </Pressable>

        <Pressable
          style={styles.checkWidget}
          onPress={() => updatePrice("priceRange", "1000 - 2999")}
        >
          <View
            style={[
              styles.checkBox,
              price === "1000 - 2999" && { backgroundColor: darkPink },
            ]}
          />
          <Image
            source={require("../../../assets/icons/naira_icon.png")}
            style={{ tintColor: darkPink, width: 24, height: 24 }}
          />
          <Text style={styles.checkPrice}>1000 - 2999</Text>
        </Pressable>

        <Pressable
          style={styles.checkWidget}
          onPress={() => updatePrice("priceRange", "3000 - 5999")}
        >
          <View
            style={[
              styles.checkBox,
              price === "3000 - 5999" && { backgroundColor: darkPink },
            ]}
          />
          <Image
            source={require("../../../assets/icons/naira_icon.png")}
            style={{ tintColor: darkPink, width: 24, height: 24 }}
          />
          <Text style={styles.checkPrice}>3000 - 5999</Text>
        </Pressable>

        <Pressable
          style={styles.checkWidget}
          onPress={() => updatePrice("priceRange", "6000 - 9999")}
        >
          <View
            style={[
              styles.checkBox,
              price === "6000 - 9999" && { backgroundColor: darkPink },
            ]}
          />
          <Image
            source={require("../../../assets/icons/naira_icon.png")}
            style={{ tintColor: darkPink, width: 24, height: 24 }}
          />
          <Text style={styles.checkPrice}>6000 - 9999</Text>
        </Pressable>

        <Pressable
          style={styles.checkWidget}
          onPress={() => updatePrice("priceRange", "10000 - 15000")}
        >
          <View
            style={[
              styles.checkBox,
              price === "10000 - 15000" && { backgroundColor: darkPink },
            ]}
          />
          <Image
            source={require("../../../assets/icons/naira_icon.png")}
            style={{ tintColor: darkPink, width: 24, height: 24 }}
          />
          <Text style={styles.checkPrice}>10000 - 15000</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PriceRange;

const styles = StyleSheet.create({
  title: {
    fontFamily: "LatoRegular",
    fontSize: 20,
    marginTop: 15,
    color: "black",
  },
  warning: {
    fontFamily: "Prociono",
    fontSize: 13,
    opacity: 0.55,
    marginTop: 5,
    marginEnd: 90,
  },
  checkWidget: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkBox: {
    width: 15,
    height: 15,
    backgroundColor: "#F5E6ED",
    borderRadius: 20,
    marginEnd: 10,
  },
  checkPrice: {
    fontFamily: "LatoRegular",
    fontSize: 16,
    color: "black",
    marginStart: 5,
  },
});
