import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import theme from "../../../assets/constants/theme";
import OrderBox from "../general/OrderBox";

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

      <Text style={[styles.prevText, { marginTop: 30 }]}>
        Choose a category
      </Text>

      <View style={styles.catFlex}>
        <Pressable style={styles.catBox}>
          <Text style={styles.catText}>Shopping</Text>
        </Pressable>
        <Pressable style={styles.catBox}>
          <Text style={styles.catText}>Meals</Text>
        </Pressable>
        <Pressable style={styles.catBox}>
          <Text style={styles.catText}>Laundry</Text>
        </Pressable>
        <Pressable style={styles.catBox}>
          <Text style={styles.catText}>Delivery</Text>
        </Pressable>
        <Pressable style={styles.catBox}>
          <Text style={styles.catText}>Others</Text>
        </Pressable>
      </View>

      <View style={styles.prevFlex}>
        <Text style={styles.prevText}>Previous Orders</Text>
        <Pressable>
          <Text style={[styles.prevMore, { color: faded }]}>show more</Text>
        </Pressable>
      </View>

      <View style={styles.orderBoxWidget}>
        <OrderBox status={"pending"} />
        <OrderBox status={"ongoing"} />
        <OrderBox status={"delivered"} />
        <OrderBox status={"canceled"} />
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
    marginTop: 50,
  },
  prevText: {
    fontFamily: "LatoRegular",
    fontSize: 16,
  },
  prevMore: {
    fontFamily: "Prociono",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  orderBoxWidget: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  catFlex: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  catBox: {
    width: 95,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4D0127",
    marginEnd: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  catText: {
    fontFamily: "LatoBold",
    fontSize: 16,
    color: "white",
  },
});
