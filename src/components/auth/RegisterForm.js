import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InputField from "../general/InputField";
import theme from "../../../assets/constants/theme";

const RegisterForm = () => {
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
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <InputField
        field="firstName"
        value={formData.firstName}
        updateField={updateField}
        autoFocus={true}
      />
      <InputField
        field="lastName"
        value={formData.lastName}
        updateField={updateField}
      />
      <InputField
        field="email"
        value={formData.email}
        updateField={updateField}
      />
      <InputField
        field="password"
        value={formData.password}
        updateField={updateField}
      />
      <InputField
        field="confirmPassword"
        value={formData.confirmPassword}
        updateField={updateField}
      />

      <Pressable style={[styles.btn, { backgroundColor: darkPink }]}>
        <Text style={styles.btnText}>Move In</Text>
      </Pressable>
    </ScrollView>
  );
};

export default RegisterForm;

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
