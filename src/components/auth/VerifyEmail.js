import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import theme from "../../../assets/constants/theme";
import { TextInput } from "react-native";

const VerifyEmail = ({ handleBack, handleNext }) => {
  const navigation = useNavigation();
  const { darkPink } = theme.COLORS;

  const [codes, updateCodes] = useState([]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Verify Your Email</Text>
      </View>

      <Text style={styles.title}>Enter the codes we sent at</Text>
      <Text style={[styles.email, { color: darkPink }]}>
        hycorner462@gmail.com
      </Text>

      <View style={styles.inputWrapper}>
        <TextInput
          keyboardType="number-pad"
          value={codes[0]}
          onChangeText={(text) => handleChange(0, text)}
          style={styles.codeInput}
        />
      </View>
    </View>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginStart: 15,
  },
  headerText: {
    marginStart: 15,
    fontFamily: "Prociono",
    fontSize: 16,
  },
  title: {
    marginTop: 45,
    fontFamily: "Prociono",
    fontSize: 18,
    marginStart: 15,
  },
  email: {
    marginStart: 15,
    marginTop: 2,
    fontFamily: "NewRocker",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginStart: 15,
    marginTop: 30,
  },
  codeInput: {
    width: 60,
    height: 50,
    borderWidth: 1,
  },
});
