import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import theme from "../../../assets/constants/theme";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const InputField = ({ field, value, updateField, autoFocus }) => {
  const [isFocused, setFocused] = useState(false);
  const [isSecure, setSecured] = useState(true);

  const { darkPink } = theme.COLORS;

  const keyboardType = field === "email" ? "email-address" : "default";

  const label = () => {
    switch (field) {
      case "firstName":
        return "First name";

      case "lastName":
        return "Last name";

      case "email":
        return "Email";

      case "password":
        return "Password";

      case "confirmPassword":
        return "Confirm password";

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelBox}>
        <Text style={styles.labelText}>{label()}</Text>
      </View>

      <View
        style={[styles.inputWrapper, isFocused && { borderColor: darkPink }]}
      >
        <TextInput
          autoCapitalize="none"
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          value={value}
          onChangeText={(text) => updateField(field, text)}
          style={styles.input}
          secureTextEntry={
            (field === "password" || field === "confirmPassword") && isSecure
          }
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {(field === "password" || field === "confirmPassword") && (
          <TouchableOpacity
            style={styles.eye}
            onPress={() => setSecured((prevState) => !prevState)}
          >
            {isSecure ? (
              <Entypo name="eye-with-line" size={20} color="black" />
            ) : (
              <Entypo name="eye" size={20} color="black" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 63,
    justifyContent: "center",
    marginBottom: 15,
  },
  inputWrapper: {
    alignSelf: "center",
    width: "90%",
    height: 45,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  labelBox: {
    position: "absolute",
    paddingHorizontal: 5,
    top: 0,
    left: 40,
    backgroundColor: "white",
    zIndex: 1,
  },
  labelText: {
    fontFamily: "LatoBold",
  },
  input: {
    flex: 1,
    fontFamily: "Prociono",
    fontSize: 16,
  },
  eye: {
    position: "absolute",
    right: 10,
  },
});
