import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import theme from "../../../assets/constants/theme";
import { useNavigation } from "@react-navigation/native";

const Wallet = ({ changePage }) => {
  const navigation = useNavigation();
  const { darkPink, faded } = theme.COLORS;

  const [walletDetails, setWalletDetails] = useState({
    balance: 3970,
    name: "Cornerstone Hyacinth",
  });
  const [isVisible, setVisible] = useState(false);

  const handleCheckout = () => {
    changePage("success");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Waver Wallet</Text>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <View style={[styles.wallet, { backgroundColor: darkPink }]}>
          <View style={styles.walletTop}>
            <Text style={styles.walletTitle}>Wallet Balance</Text>
            <Pressable
              style={styles.walletVisible}
              onPress={() => setVisible((prevState) => !prevState)}
            >
              <FontAwesome6
                name={isVisible ? "eye" : "eye-slash"}
                size={20}
                color={darkPink}
              />
            </Pressable>
          </View>
          {isVisible ? (
            <View style={styles.walletMid}>
              <Image
                source={require("../../../assets/icons/naira_icon.png")}
                style={{ tintColor: "white" }}
              />
              <Text style={styles.walletPrice}>{walletDetails.balance}</Text>
            </View>
          ) : (
            <View style={styles.walletMid}>
              <Text style={styles.walletPrice}>*****</Text>
            </View>
          )}
          <Text style={styles.walletName}>Cornerstone Hyacinth</Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 15 }}>
        <Pressable
          style={{ alignSelf: "flex-end" }}
          onPress={() => changePage("card")}
        >
          <Text style={[styles.instead, { color: darkPink }]}>
            Switch to Card
          </Text>
        </Pressable>

        <View style={styles.bottom}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("../../../assets/icons/naira_icon.png")} />
            <Text style={styles.bottomText}>1700</Text>
          </View>

          <Pressable
            style={[styles.checkoutBtn, { backgroundColor: darkPink }]}
            onPress={handleCheckout}
          >
            <Text style={styles.checkoutText}>Checkout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 15,
  },
  headerText: {
    fontFamily: "Prociono",
    fontSize: 16,
    marginStart: 15,
  },
  title: {
    fontFamily: "LatoRegular",
    fontSize: 20,
    marginTop: 15,
    color: "black",
    marginBottom: 45,
  },
  wallet: {
    marginTop: 30,
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  walletTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  walletTitle: {
    fontFamily: "LatoBold",
    fontSize: 18,
    color: "rgba(255, 255, 255, .7)",
  },
  walletVisible: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 30,
  },
  walletMid: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  walletPrice: {
    fontFamily: "LatoRegular",
    fontSize: 25,
    color: "white",
  },
  walletName: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    color: "rgba(255, 255, 255, .7)",
    alignSelf: "flex-end",
  },
  instead: {
    fontFamily: "Prociono",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  bottomText: {
    fontFamily: "LatoRegular",
    fontSize: 20,
  },
  checkoutBtn: {
    flex: 1,
    marginStart: 15,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
  },
  checkoutText: {
    fontFamily: "LatoRegular",
    fontSize: 18,
    color: "white",
  },
});
