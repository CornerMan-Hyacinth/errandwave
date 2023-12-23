import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import theme from "../../../assets/constants/theme";

const Landing = () => {
  const { medium } = theme.SHADOWS;
  const { darkPink, faded } = theme.COLORS;

  return (
    <View style={styles.container}>
      <View style={styles.cardWidget}>
        <View style={[styles.cardLeftBox, medium]}>
          <View style={styles.leftHead}>
            <Text style={styles.leftHeadText}>Your Balance</Text>
            <Pressable>
              <FontAwesome5 name="eye-slash" size={15} color="black" />
            </Pressable>
          </View>
          <Text style={styles.protectedText}>&#8358; 7000</Text>
        </View>
        <View style={[styles.cardRightBox, { backgroundColor: darkPink }]}>
          <Text style={styles.rightNo}>0</Text>
          <Text style={styles.rightText}>orders delivered</Text>
        </View>
      </View>
      <View style={styles.cardWidget}>
        <View style={[styles.cardLeftBox, { backgroundColor: darkPink }]}>
          <View style={styles.leftHead}>
            <Text style={[styles.leftHeadText, { color: "white" }]}>
              Total Purchases
            </Text>
            <Pressable>
              <FontAwesome5 name="eye-slash" size={15} color="white" />
            </Pressable>
          </View>
          <Text style={[styles.protectedText, { color: "white" }]}>*****</Text>
        </View>
        <View
          style={[styles.cardRightBox, { backgroundColor: "white" }, medium]}
        >
          <Text style={[styles.rightNo, { color: "black" }]}>9+</Text>
          <Text style={[styles.rightText, { color: "black" }]}>
            new inboxes
          </Text>
        </View>
      </View>

      <View style={styles.prevFlex}>
        <Text style={styles.prevText}>Previous Orders</Text>
        <Pressable>
          <Text style={[styles.prevMore, { color: faded }]}>show more</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 30,
  },
  cardWidget: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  cardLeftBox: {
    backgroundColor: "white",
    width: 175,
    height: 100,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  leftHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  leftHeadText: {
    fontFamily: "Prociono",
    fontSize: 16,
  },
  protectedText: {
    fontFamily: "LatoBold",
    fontSize: 20,
  },
  cardRightBox: {
    width: 140,
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 5,
  },
  rightNo: {
    fontFamily: "LatoRegular",
    fontSize: 25,
    color: "white",
    marginEnd: 15,
  },
  rightText: {
    width: 65,
    fontFamily: "Prociono",
    fontSize: 16,
    color: "white",
    lineHeight: 25,
  },
  prevFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  prevText: {
    fontFamily: "LatoLight",
    fontSize: 18,
  },
  prevMore: {
    fontFamily: "Prociono",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
