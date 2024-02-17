import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/home/Header";
import BottomNav from "../components/home/BottomNav";
import theme from "../../assets/constants/theme";
import Landing from "../components/home/Landing";
import History from "../components/home/History";
import Chat from "../components/home/Chat";
import Account from "../components/home/Account";
import { saveAsyncToken } from "../helper/AsyncStorage";
import { useNavigation } from "@react-navigation/native";
import errandData from "../helper/errandData";
import BottomOrderSheet from "../components/home/BottomOrderSheet";

const Home = () => {
  const navigation = useNavigation();

  const sheetRef = useRef(null);
  const { darkPink } = theme.COLORS;

  const [tab, setTab] = useState("Home");
  const [errand, updateErrand] = useState({});

  const handleTab = (page) => {
    setTab(page);
    console.log(page);
  };

  const handleRequest = async () => {
    await saveAsyncToken("request", "none");
    navigation.navigate("Request");
  };

  const handleOrderBtn = async (index) => {
    updateErrand(errandData[index]);
    await sheetRef.current.open();
  };

  const renderTabs = () => {
    switch (tab) {
      case "Home":
        return (
          <Landing
            setTab={() => handleTab("History")}
            handleOrderBtn={handleOrderBtn}
          />
        );

      case "History":
        return <History handleOrderBtn={handleOrderBtn} />;

      case "Chat":
        return <Chat />;

      case "Account":
        return <Account />;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.headTitle}>
        <Text style={styles.headTitleText}>{tab}</Text>
        {tab === "Home" && (
          <Pressable
            style={[styles.requestBtn, { borderColor: darkPink }]}
            onPress={handleRequest}
          >
            <Text style={[styles.requestText, { color: darkPink }]}>
              Request
            </Text>
          </Pressable>
        )}
      </View>

      <View style={{ flex: 1, marginBottom: 60 }}>{renderTabs()}</View>

      <BottomNav tab={tab} handleTab={handleTab} />

      <BottomOrderSheet sheetRef={sheetRef} errand={errand} />
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
    marginBottom: 5,
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
