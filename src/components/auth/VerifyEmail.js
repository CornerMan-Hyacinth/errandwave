import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import theme from "../../../assets/constants/theme";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import Toast from "react-native-root-toast";

const VerifyEmail = ({ handleBack, handleNext }) => {
  const navigation = useNavigation();
  const { darkPink } = theme.COLORS;

  const emailCodes = ["2", "3", "0", "8"];

  const [secondsTimer, setSecondsTimer] = useState(90);

  const [codes, updateCodes] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const [isFocused, setFocused] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  useEffect(() => {
    if (secondsTimer > 0) {
      const timer = setTimeout(() => {
        setSecondsTimer((prevSeconds) => prevSeconds - 1);
      }, 1000);

      // clear the timeout when the component unmounts
      return () => clearTimeout(timer);
    }
  }, [secondsTimer]);

  const handleChange = (item, value) => {
    updateCodes((prevCodes) => ({ ...prevCodes, [item]: value }));
  };

  const handleResendCode = () => {
    if (secondsTimer === 0) {
      setSecondsTimer(90);
    }
  };

  const showToastMessage = async (message) => {
    // Show a simple toast
    let toast = await Toast.show(message, {
      duration: Toast.durations.LONG, // You can customize the duration
      position: Toast.positions.BOTTOM, // You can customize the position
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });

    // You can also use the returned `toast` object to control the toast
    // For example, you can dismiss the toast after a certain time
    setTimeout(() => {
      Toast.hide(toast);
    }, 5000);
  };

  const verifyEmailCodes = () => {
    const { first, second, third, fourth } = codes;

    if (!first || !second || !third || !fourth) {
      showToastMessage("Enter the codes to verify email.");
    } else if (
      first !== emailCodes[0] ||
      second !== emailCodes[1] ||
      third !== emailCodes[2] ||
      fourth !== emailCodes[3]
    ) {
      showToastMessage("The codes are incorrect.");
    } else {
      setTimeout(() => {
        handleNext();
      }, 1000);
    }
  };

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
          autoFocus
          keyboardType="number-pad"
          value={codes[0]}
          onChangeText={(text) => handleChange("first", text)}
          style={[
            styles.codeInput,
            isFocused.first && { borderColor: darkPink },
          ]}
          onFocus={() =>
            setFocused((prevState) => ({ ...prevState, first: true }))
          }
          onBlur={() =>
            setFocused((prevState) => ({ ...prevState, first: false }))
          }
        />
        <TextInput
          keyboardType="number-pad"
          value={codes[1]}
          onChangeText={(text) => handleChange("second", text)}
          style={[
            styles.codeInput,
            isFocused.second && { borderColor: darkPink },
          ]}
          onFocus={() =>
            setFocused((prevState) => ({ ...prevState, second: true }))
          }
          onBlur={() =>
            setFocused((prevState) => ({ ...prevState, second: false }))
          }
        />
        <TextInput
          keyboardType="number-pad"
          value={codes[2]}
          onChangeText={(text) => handleChange("third", text)}
          style={[
            styles.codeInput,
            isFocused.third && { borderColor: darkPink },
          ]}
          onFocus={() =>
            setFocused((prevState) => ({ ...prevState, third: true }))
          }
          onBlur={() =>
            setFocused((prevState) => ({ ...prevState, third: false }))
          }
        />
        <TextInput
          keyboardType="number-pad"
          value={codes[3]}
          onChangeText={(text) => handleChange("fourth", text)}
          style={[
            styles.codeInput,
            isFocused.fourth && { borderColor: darkPink },
          ]}
          onFocus={() =>
            setFocused((prevState) => ({ ...prevState, fourth: true }))
          }
          onBlur={() =>
            setFocused((prevState) => ({ ...prevState, fourth: false }))
          }
        />
      </View>

      <Pressable
        style={[styles.btn, { backgroundColor: darkPink, marginTop: 75 }]}
        onPress={verifyEmailCodes}
      >
        <Text style={styles.btnText}>Finish</Text>
      </Pressable>

      <Pressable
        style={[
          styles.btn,
          { backgroundColor: "black" },
          secondsTimer > 0 && { backgroundColor: "rgba(0, 0, 0, .6)" },
        ]}
        onPress={handleResendCode}
      >
        <Text
          style={[
            styles.btnText,
            secondsTimer > 0 && { color: "rgba(255, 255, 255, .6)" },
          ]}
        >
          Resend Code
        </Text>
        <Text style={[styles.timerText]}>{secondsTimer}s rem</Text>
      </Pressable>
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
    borderRadius: 20,
    backgroundColor: "rgba(179, 7, 132, .05)",
    marginEnd: 10,
    textAlign: "center",
    fontFamily: "Prociono",
    fontSize: 16,
  },
  btn: {
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 15,
  },
  btnText: {
    fontFamily: "NewRocker",
    fontSize: 18,
    color: "white",
  },
  timerText: {
    position: "absolute",
    fontFamily: "Prociono",
    fontSize: 14,
    right: 10,
    top: "50%",
    justifyContent: "center",
  },
});
