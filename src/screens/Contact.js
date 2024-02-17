import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAsyncToken } from "../helper/AsyncStorage";
import theme from "../../assets/constants/theme";
import DM from "../components/contact/DM";
import Call from "../components/contact/Call";

const Contact = () => {
  const { darkPink } = theme.COLORS;
  const [contactPage, setContactPage] = useState("dm");

  const renderPage = () => {
    switch (contactPage) {
      case "dm":
        return <DM handleCall={() => setContactPage("call")} />;

      case "call":
        return <Call />;

      default:
        break;
    }
  };

  useEffect(() => {
    const getPage = async () => {
      getAsyncToken("contact").then(
        (result) => result !== null && setContactPage(result)
      );
    };

    getPage();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: darkPink }}>
      <StatusBar backgroundColor={darkPink} barStyle={"light-content"} />
      {renderPage()}
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({});
