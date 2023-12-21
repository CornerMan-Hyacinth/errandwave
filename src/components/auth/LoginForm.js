import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import InputField from "../general/InputField";
import { Pressable } from "react-native";
import theme from "../../../assets/constants/theme";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { saveAsyncToken } from "../../helper/AsyncStorage";
import Toast from "react-native-root-toast";

const LoginForm = () => {
  const auth = FIREBASE_AUTH;
  const db = FIREBASE_DB;

  const navigation = useNavigation();
  const { darkPink } = theme.COLORS;

  const [formData, updateFormData] = useState({
    email: "",
    password: "",
  });

  const updateField = (field, value) => {
    updateFormData({ ...formData, [field]: value });
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
    }, 5000); // 3000 milliseconds
  };

  const handleLogin = async () => {
    const { email, password } = formData;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const q = query(collection(db, "users"), where("email", "==", email));

        console.log("Okay");

        onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            saveAsyncToken("userId", doc.id);
            navigation.navigate("Home");
          });
        });
        // navigation.navigate("Home");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            showToastMessage("The email is invalid.");
            break;

          case "auth/invalid-credential":
            showToastMessage("No account has been created with this email.");
            break;

          case "auth/user-disabled":
            showToastMessage(
              "This account has being suspended. Try again later."
            );
            break;

          case "auth/network-request-failed":
            showToastMessage("Check your network connection.");
            break;

          case "auth/operation-not-allowed":
            showToastMessage("This operation is not allowed!");
            break;

          default:
            showToastMessage(
              "An error occurred during sign in. Please try again later."
            );
            console.log(error.code);
            break;
        }
      });
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

      <Pressable
        onPress={() => navigation.navigate("Forgot")}
        style={{ alignSelf: "flex-start" }}
      >
        <Text style={[styles.forgot, { color: darkPink }]}>
          Forgot your password?
        </Text>
      </Pressable>

      <Pressable
        style={[styles.btn, { backgroundColor: darkPink }]}
        onPress={handleLogin}
      >
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
