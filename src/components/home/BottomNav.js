import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import theme from "../../../assets/constants/theme";

const BottomNav = ({ tab, handleTab }) => {
  const { darkPink } = theme.COLORS;
  const blackBg = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const Home = () => {
    return (
      <Pressable onPress={() => handleTab("Home")}>
        <View
          style={[
            styles.iconWidget,
            tab === "Home" && { backgroundColor: blackBg.backgroundColor },
          ]}
        >
          <Entypo name="home" size={24} color="white" />
        </View>
      </Pressable>
    );
  };

  const History = () => {
    return (
      <Pressable onPress={() => handleTab("History")}>
        <View
          style={[
            styles.iconWidget,
            tab === "History" && { backgroundColor: blackBg.backgroundColor },
          ]}
        >
          <FontAwesome5 name="history" size={24} color="white" />
        </View>
      </Pressable>
    );
  };

  const Chat = () => {
    return (
      <Pressable onPress={() => handleTab("Chat")}>
        <View
          style={[
            styles.iconWidget,
            tab === "Chat" && { backgroundColor: blackBg.backgroundColor },
          ]}
        >
          <Ionicons name="chatbubbles-sharp" size={24} color="white" />
        </View>
      </Pressable>
    );
  };

  const Payment = () => {
    return (
      <Pressable onPress={() => handleTab("Payment")}>
        <View
          style={[
            styles.iconWidget,
            tab === "Payment" && { backgroundColor: blackBg.backgroundColor },
          ]}
        >
          <MaterialIcons name="payments" size={24} color="white" />
        </View>
      </Pressable>
    );
  };

  return (
    <View style={[styles.tabContainer, { backgroundColor: darkPink }]}>
      <Home />
      <History />
      <Chat />
      <Payment />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    maxHeight: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    zIndex: 0,
  },
  iconWidget: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  iconText: {
    fontFamily: "MiriamBold",
    fontSize: 14,
  },
});

export default BottomNav;
