import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAsyncToken } from "../helper/AsyncStorage";
import Wallet from "../components/payment/Wallet";
import Card from "../components/payment/Card";

const Payment = () => {
  const [page, setPage] = useState("");

  useEffect(() => {
    getAsyncToken("payment").then(
      (result) => result !== null && setPage(result)
    );
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {page === "wallet" ? <Wallet /> : <Card />}
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({});
