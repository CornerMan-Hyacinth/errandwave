import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAsyncToken } from "../helper/AsyncStorage";
import Wallet from "../components/payment/Wallet";
import Card from "../components/payment/Card";
import Success from "../components/request/general/Success";

const Payment = () => {
  const [page, setPage] = useState("");

  useEffect(() => {
    getAsyncToken("payment").then(
      (result) => result !== null && setPage(result)
    );
  }, []);

  const changePage = (page) => {
    setPage(page);
  };

  const renderPage = () => {
    switch (page) {
      case "card":
        return <Card changePage={changePage} />;

      case "wallet":
        return <Wallet changePage={changePage} />;

      case "success":
        return <Success message={"shopping"} />;
      default:
        break;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>{renderPage()}</View>
  );
};

export default Payment;

const styles = StyleSheet.create({});
