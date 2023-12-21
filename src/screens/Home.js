import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/home/Header";
import BottomNav from "../components/home/BottomNav";

const Home = () => {
  const [tab, setTab] = useState("Home");

  const handleTab = (page) => {
    setTab(page);
    console.log(page);
  };

  return (
    <View style={styles.container}>
      <Header />
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
});
