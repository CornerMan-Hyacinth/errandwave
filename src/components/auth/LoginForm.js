import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import InputField from "../general/InputField";
import { Pressable } from "react-native";
import theme from "../../../assets/constants/theme";

const LoginForm = () => {
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
    marginTop: 30,
    borderRadius: 15,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontFamily: "NewRocker",
    fontSize: 18,
  },
});
