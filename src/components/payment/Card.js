import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import theme from "../../../assets/constants/theme";

const Card = ({ changePage }) => {
  const navigation = useNavigation();
  const { darkPink } = theme.COLORS;

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    saved: false,
  });

  // Function to format the card number with spaces after every 4 digits
  const handleCardDetails = (field, input) => {
    if (field === "number") {
      // Remove any existing spaces and non-numeric characters
      const cleanedInput = input.replace(/\D/g, "");

      // Insert a space after every 4 characters
      const formattedInput = cleanedInput.replace(/(.{4})/g, "$1 ");

      // Update the state with the formatted input
      setCardDetails((prevDetails) => ({
        ...prevDetails,
        cardNumber: formattedInput,
      }));
    } else {
      setCardDetails((prevDetails) => ({
        ...prevDetails,
        [field]: input,
      }));
    }
  };

  const handleCheckout = () => {
    changePage("success");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Request an errand</Text>
      </View>

      <Text style={[styles.title, { color: darkPink }]}>
        Enter your card details
      </Text>

      <View style={{ flex: 1 }}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>CARD NUMBER</Text>
          <TextInput
            style={styles.input}
            selectionColor={darkPink}
            keyboardType="numeric"
            value={cardDetails.cardNumber}
            onChangeText={(text) => handleCardDetails("number", text)}
            maxLength={19}
            numberOfLines={1}
          />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>CARD HOLDER NAME</Text>
          <TextInput
            style={styles.input}
            selectionColor={darkPink}
            value={cardDetails.cardName}
            onChangeText={(text) => handleCardDetails("cardName", text)}
            numberOfLines={1}
          />
        </View>

        <View style={styles.inputBoxFlex}>
          <View>
            <Text style={styles.inputLabel}>EXPIRY DATE</Text>
            <TextInput
              style={styles.input}
              selectionColor={darkPink}
              keyboardType="numeric"
              value={cardDetails.expiryDate}
              onChangeText={(text) => handleCardDetails("expiryDate", text)}
              numberOfLines={1}
            />
          </View>

          <View>
            <Text style={styles.inputLabel}>CVV</Text>
            <TextInput
              style={styles.input}
              selectionColor={darkPink}
              keyboardType="numeric"
              value={cardDetails.cvv}
              onChangeText={(text) => handleCardDetails("cvv", text)}
              numberOfLines={1}
            />
          </View>
        </View>

        <View style={styles.checkBox}>
          <Pressable
            style={[
              styles.checkBtn,
              cardDetails.saved
                ? { backgroundColor: darkPink }
                : { borderColor: darkPink },
            ]}
            onPress={() =>
              setCardDetails((prevDetails) => ({
                ...prevDetails,
                saved: !prevDetails.saved,
              }))
            }
          >
            <Entypo name="check" size={15} color="white" />
          </Pressable>
          <Text style={styles.checkText}>
            Save this card for future transactions
          </Text>
        </View>

        <View style={styles.breakLine} />
      </View>

      <View style={{ paddingHorizontal: 15 }}>
        <Pressable
          style={{ alignSelf: "flex-end" }}
          onPress={() => changePage("wallet")}
        >
          <Text style={[styles.instead, { color: darkPink }]}>
            Switch to Wallet
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

export default Card;

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
    paddingHorizontal: 15,
  },
  inputBox: {
    width: "100%",
    marginBottom: 40,
    paddingHorizontal: 15,
  },
  inputBoxFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
    paddingHorizontal: 15,
  },
  inputLabel: {
    fontFamily: "LatoRegular",
    fontSize: 16,
    color: "rgba(0, 0, 0, .5)",
    marginBottom: 0,
    letterSpacing: 0.5,
  },
  input: {
    height: 40,
    minWidth: 100,
    fontFamily: "LatoBold",
    fontSize: 20,
    color: "black",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  checkBtn: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginEnd: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  checkText: {
    fontFamily: "LatoRegular",
    fontSize: 14,
  },
  breakLine: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
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
