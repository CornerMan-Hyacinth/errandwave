import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import InputField from "../general/InputField";
import { Pressable } from "react-native";
import theme from "../../../assets/constants/theme";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const navigation = useNavigation();
  const { darkPink } = theme.COLORS;

  const [formData, updateFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    school: "",
    password: "",
    confirmPassword: "",
  });

  const updateField = (field, value) => {
    updateFormData({ ...formData, [field]: value });
  };

  return (
    <View>
      <InputField
        field="email"
        value={formData.email}
        updateField={updateField}
        autoFocus={true}
      />
      <InputField
        field="password"
        value={formData.password}
        updateField={updateField}
        autoFocus={false}
      />

      <Pressable onPress={() => navigation.navigate("Forgot")}>
        <Text style={[styles.forgot, { color: darkPink }]}>
          Forgot your password?
        </Text>
      </Pressable>

      <Pressable style={[styles.btn, { backgroundColor: darkPink }]}>
        <Text style={styles.btnText}>Move In</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  btn: {
    width: 220,
    alignSelf: "center",
    paddingVertical: 10,
    marginTop: 45,
    borderRadius: 15,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontFamily: "NewRocker",
    fontSize: 18,
  },
  forgot: {
    marginStart: 20,
    fontFamily: "Prociono",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
