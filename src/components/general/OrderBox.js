import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import theme from "../../../assets/constants/theme";

const OrderBox = ({ status }) => {
  const { darkPink } = theme.COLORS;

  const MidBox = () => {
    switch (status) {
      case "ongoing":
        return (
          <View style={[styles.midView, { marginStart: 15, opacity: 0.8 }]}>
            <Image
              source={require("../../../assets/icons/status_Icon.png")}
              style={styles.statusIcon}
            />
            <Text style={styles.statusText}>En Route</Text>
            <View style={[styles.iconView, { backgroundColor: "#F31709" }]}>
              <MaterialCommunityIcons
                name="progress-clock"
                size={20}
                color="white"
              />
            </View>
          </View>
        );

      case "pending":
        return (
          <View style={[styles.midView, { marginStart: 15, opacity: 0.8 }]}>
            <Image
              source={require("../../../assets/icons/status_Icon.png")}
              style={styles.statusIcon}
            />
            <Text style={styles.statusText}>Pending</Text>
            <View style={[styles.iconView, { backgroundColor: "#F3A309" }]}>
              <MaterialIcons name="pending" size={20} color="white" />
            </View>
          </View>
        );

      case "canceled":
        return (
          <View style={[styles.midView, { marginStart: 15, opacity: 0.8 }]}>
            <Image
              source={require("../../../assets/icons/status_Icon.png")}
              style={styles.statusIcon}
            />
            <Text style={styles.statusText}>Canceled</Text>
            <View style={[styles.iconView, { backgroundColor: "#F31709" }]}>
              <MaterialIcons name="cancel" size={20} color="white" />
            </View>
          </View>
        );

      case "delivered":
        return (
          <View style={styles.midBox}>
            <View style={[styles.midView, { marginBottom: 12 }]}>
              <View style={styles.riderBox}>
                <Text style={styles.riderText}>Rider</Text>
              </View>
              <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                Victor Akachukwu Obinna
              </Text>
            </View>
            <View style={[styles.midView, { marginBottom: 12 }]}>
              <View style={[styles.midView, { marginEnd: 15 }]}>
                <Ionicons name="star-sharp" size={15} color="white" />
                <Text style={styles.flexText}>3.7</Text>
              </View>
              <View style={styles.midView}>
                <MaterialIcons name="payments" size={15} color="white" />
                <Text style={styles.flexText}>&#x20A6; 1300</Text>
              </View>
            </View>
            <View style={styles.midView}>
              <Image
                source={require("../../../assets/icons/status_Icon.png")}
                style={styles.statusIcon}
              />
              <Text style={styles.delivered}>Received</Text>
              <View
                style={[
                  styles.iconView,
                  { backgroundColor: "#157E02", padding: 2 },
                ]}
              >
                <AntDesign name="check" size={15} color="white" />
              </View>
            </View>
          </View>
        );

      default:
        break;
    }
  };

  return (
    <Pressable style={[styles.container, { backgroundColor: darkPink }]}>
      <View style={styles.leftBox}>
        <Text style={styles.date}>13 Dec 2023</Text>
        <Text style={styles.time}>13:23</Text>
      </View>
      <View>
        <MidBox />
      </View>
      <View style={styles.nextBtn}>
        <AntDesign name="arrowright" size={20} color="black" />
      </View>
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
    alignItems: "center",
    justifyContent: "center",
    borderTopEndRadius: 50,
    borderTopStartRadius: 20,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 20,
  },
  date: {
    fontFamily: "LatoBold",
    fontSize: 12,
    marginBottom: 10,
  },
  time: {
    fontFamily: "LatoRegular",
    fontSize: 16,
    opacity: 0.7,
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
    marginHorizontal: 7,
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
