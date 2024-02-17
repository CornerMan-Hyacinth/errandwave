import React, { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import theme from "../../../assets/constants/theme";

const BottomNav = ({ tab, handleTab }) => {
  const { darkPink } = theme.COLORS;
  const blackBg = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const Dashboard = () => {
    return (
      <Pressable onPress={() => handleTab("Dashboard")}>
        <View
          style={[
            styles.iconWidget,
            tab === "Dashboard" && { backgroundColor: blackBg.backgroundColor },
          ]}
        >
          <MaterialIcons
            name="dashboard"
            size={tab === "Dashboard" ? 20 : 25}
            color="white"
          />
        </View>
      </Pressable>
    );
  };

  const Errands = () => {
    return (
      <Pressable onPress={() => handleTab("Errands")}>
        <View
          style={[
            styles.iconWidget,
            tab === "Errands" && { backgroundColor: blackBg.backgroundColor },
          ]}
        >
          <Image
            source={require("../../../assets/icons/errand_icon.png")}
            style={
              tab === "Errands"
                ? { width: 20, height: 20 }
                : { width: 25, height: 25 }
            }
          />
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
          <Ionicons
            name="chatbubbles-sharp"
            size={tab === "Chat" ? 20 : 25}
            color="white"
          />
        </View>
      </Pressable>
    );
  };

  return (
    <View style={[styles.tabContainer, { backgroundColor: darkPink }]}>
      <Dashboard />
      <Errands />
      <Chat />
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
