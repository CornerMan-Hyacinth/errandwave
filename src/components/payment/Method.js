import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import theme from "../../../assets/constants/theme";
import { saveAsyncToken } from "../../helper/AsyncStorage";
import { useNavigation } from "@react-navigation/native";

const Method = ({ isOn, setOn }) => {
  const navigation = useNavigation();

  const { darkPink, lightFaded } = theme.COLORS;

  const [isDefault, setDefault] = useState(false);

  const handlePayment = async (method) => {
    setOn(false);
    await saveAsyncToken("payment", method);
    navigation.navigate("Payment");
  };

  return (
    isOn && (
      <Pressable style={styles.modalBg} onPress={() => setOn(false)}>
        <Pressable style={[styles.modalBox]}>
          <Text style={styles.modalTitle}>Choose a payment method</Text>

          <View style={styles.default}>
            <Pressable
              style={[
                styles.defaultBtn,
                isDefault && { backgroundColor: darkPink },
              ]}
              onPress={() => setDefault((prevDefault) => !prevDefault)}
            />
            <Text style={styles.defaultText}>Set as default</Text>
          </View>

          <Pressable
            style={[styles.paymentBtn, { backgroundColor: darkPink }]}
            onPress={() => handlePayment("wallet")}
          >
            <FontAwesome6 name="wallet" size={20} color={"white"} />
            <Text style={[styles.paymentText, { color: "white" }]}>
              Waver Wallet
            </Text>
          </Pressable>

          <Pressable
            style={[styles.paymentBtn, { backgroundColor: lightFaded }]}
            onPress={() => handlePayment("card")}
          >
            <FontAwesome6 name="credit-card" size={20} color="black" />
            <Text style={[styles.paymentText]}>Card</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    )
  );
};

export default Method;

const styles = StyleSheet.create({
  modalBg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    position: "absolute",
    width: 280,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 20,
    zIndex: 2,
  },
  modalTitle: {
    fontFamily: "LatoRegular",
    fontSize: 18,
    marginBottom: 15,
  },
  default: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  defaultBtn: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: 15,
    height: 15,
    borderRadius: 5,
    marginEnd: 10,
  },
  defaultText: {
    fontFamily: "LatoRegular",
    fontSize: 14,
  },
  paymentBtn: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingStart: 30,
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 20,
  },
  paymentText: {
    fontFamily: "Prociono",
    fontSize: 16,
    marginStart: 10,
  },
});
