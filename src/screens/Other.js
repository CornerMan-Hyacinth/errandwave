import { StatusBar, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Help from "../components/other/Help";
import Wallet from "../components/other/Wallet";
import Referral from "../components/other/Referral";
import { getAsyncToken } from "../helper/AsyncStorage";

const Other = () => {
  const [page, setPage] = useState("");

  const renderPage = () => {
    switch (page) {
      case "wallet":
        return <Wallet />;

      case "help":
        return <Help />;

      case "referral":
        return <Referral />;

      default:
        break;
    }
  };

  useEffect(() => {
    getAsyncToken("other").then((result) => result !== null && setPage(result));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#FFFFFF"} />
      {renderPage()}
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
