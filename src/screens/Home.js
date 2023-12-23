import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/home/Header";
import BottomNav from "../components/home/BottomNav";
import theme from "../../assets/constants/theme";
import Landing from "../components/home/Landing";
import History from "../components/home/History";
import Chat from "../components/home/Chat";
import Payments from "../components/home/Payments";

const Home = () => {
  const { darkPink } = theme.COLORS;
  const { medium } = theme.SHADOWS;

  const [tab, setTab] = useState("Home");

  const handleTab = (page) => {
    setTab(page);
    console.log(page);
  };

  const renderTabs = () => {
    switch (tab) {
      case "Home":
        return <Landing />;

      case "History":
        return <History />;

      case "Chat":
        return <Chat />;

      case "Payment":
        return <Payments />;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.headTitle}>
        <Text style={styles.headTitleText}>{tab}</Text>
        {tab !== "Chat" && (
          <Pressable style={[styles.requestBtn, { borderColor: darkPink }]}>
            <Text style={[styles.requestText, { color: darkPink }]}>
              Request
            </Text>
          </Pressable>
        )}
      </View>

      {renderTabs()}

      <BottomNav tab={tab} handleTab={handleTab} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headTitle: {
    marginTop: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  headTitleText: {
    fontFamily: "LatoBold",
    fontSize: 20,
  },
  requestBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 20,
  },
  requestText: {
    fontFamily: "Prociono",
    fontSize: 16,
  },
});
