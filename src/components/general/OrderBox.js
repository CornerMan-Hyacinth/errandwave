import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import theme from "../../../assets/constants/theme";

const OrderBox = ({ status, category, rider, handleOrderBtn }) => {
  const { darkPink } = theme.COLORS;

  const MidBox = () => {
    return (
      <View style={styles.midBox}>
        <View style={[styles.midView, { marginBottom: 10 }]}>
          <View style={styles.riderBox}>
            <Text style={styles.riderText}>Rider</Text>
          </View>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {rider}
          </Text>
        </View>
        <View style={[styles.midView, { marginBottom: 10 }]}>
          <MaterialIcons name="payments" size={15} color="white" />
          <Text style={styles.flexText}>&#x20A6;1300</Text>
        </View>
        <View style={styles.midView}>
          <Image
            source={require("../../../assets/icons/status_Icon.png")}
            style={styles.statusIcon}
          />
          <Text
            style={[
              styles.delivered,
              status === "Received" && { color: "#4AEF3C" },
            ]}
          >
            {status}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Pressable style={[styles.container, { backgroundColor: darkPink }]}>
      <View style={styles.leftBox}>
        <Text style={styles.date}>13 Dec 2023</Text>
        <Text style={styles.time}>{category}</Text>
      </View>
      <View>
        <MidBox />
      </View>
      <Pressable style={styles.nextBtn} onPress={handleOrderBtn}>
        <AntDesign name="arrowright" size={20} color="black" />
      </Pressable>
    </Pressable>
  );
};

export default OrderBox;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxHeight: 120,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 15,
  },
  leftBox: {
    width: 100,
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, .65)",
    paddingStart: 10,
    justifyContent: "center",
    borderTopEndRadius: 50,
    borderTopStartRadius: 20,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 20,
  },
  date: {
    fontFamily: "LatoRegular",
    fontSize: 12,
    marginBottom: 10,
    opacity: 0.6,
  },
  time: {
    fontFamily: "LatoBold",
    fontSize: 14,
    opacity: 0.6,
  },
  midBox: {
    paddingVertical: 15,
    paddingStart: 10,
  },
  midView: {
    flexDirection: "row",
    alignItems: "center",
  },
  riderBox: {
    padding: 3,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "white",
    marginEnd: 5,
  },
  riderText: {
    fontFamily: "LatoBold",
    fontSize: 10,
  },
  name: {
    fontFamily: "Prociono",
    fontSize: 14,
    color: "white",
    maxWidth: 120,
  },
  statusIcon: {
    width: 20,
    height: 20,
    tintColor: "white",
  },
  flexText: {
    fontFamily: "LatoBold",
    fontSize: 12,
    marginStart: 5,
    color: "white",
  },
  delivered: {
    fontFamily: "LatoBold",
    fontSize: 12,
    marginHorizontal: 3,
    color: "white",
  },
  statusText: {
    fontFamily: "LatoRegular",
    fontSize: 16,
    marginHorizontal: 7,
    color: "white",
  },
  iconView: {
    padding: 3,
    borderRadius: 20,
  },
  nextBtn: {
    position: "absolute",
    paddingHorizontal: 7,
    paddingVertical: 3,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, .65)",
    borderRadius: 10,
  },
});
