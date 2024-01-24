import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import theme from "../../../assets/constants/theme";
import OrderBox from "../general/OrderBox";
import AnimatedLottieView from "lottie-react-native";

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

      <View style={[styles.referralCard, { backgroundColor: darkPink }]}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.referH1}>Refer a friend</Text>
          <Text style={styles.referH2}>& get 3 free deliveries</Text>
          <Pressable style={styles.referBtn}>
            <Text style={[styles.referBtnText, { color: darkPink }]}>
              Start Referring
            </Text>
          </Pressable>
        </View>
        <AnimatedLottieView
          source={require("../../../assets/lotties/referral_animation.json")}
          loop
          autoPlay
          style={styles.referAnimation}
        />
      </View>

      <Text style={[styles.prevText, { marginTop: 45 }]}>
        Request by Category
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
      </View>

      <View style={styles.prevFlex}>
        <Text style={styles.prevText}>Previous Orders</Text>
        <Pressable>
          <Text style={[styles.prevMore, { color: faded }]}>show all</Text>
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
  referralCard: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    borderRadius: 5,
    overflow: "hidden",
  },
  referAnimation: {
    position: "absolute",
    right: -5,
    width: 150,
  },
  referH1: {
    color: "white",
    fontFamily: "LatoBold",
    fontSize: 20,
    marginBottom: 10,
  },
  referH2: {
    color: "rgba(255, 255, 255, .7)",
    fontFamily: "LatoBold",
    fontSize: 15,
    marginBottom: 20,
  },
  referBtn: {
    height: 35,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 10,
  },
  referBtnText: {
    textAlign: "center",
    fontFamily: "Prociono",
    fontSize: 15,
    paddingHorizontal: 10,
  },
  prevFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
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
