import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AnimatedLottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../../assets/constants/theme";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../../FirebaseConfig";
import Toast from "react-native-root-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { getAsyncToken, saveAsyncToken } from "../../helper/AsyncStorage";

const ChooseRole = ({ handleNext }) => {
  const auth = FIREBASE_AUTH;
  const db = FIREBASE_DB;

  const { gradient } = theme.COLORS;

  const [userData, setUserData] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getAsyncToken("jsonUserData").then((response) => {
      const responseData = JSON.parse(response);
      setUserData(responseData);
    });
  }, []);

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

  // this function creates the user using email and password via FIREBASE AUTH
  const createUser = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return response;
    } catch (error) {
      console.log(error);

      switch (error.code) {
        case "auth/invalid-email":
          showToastMessage("The email address is not valid.");
          break;

        case "auth/email-already-in-use":
          showToastMessage("The email address is already in use.");
          break;

        case "auth/weak-password":
          showToastMessage("The password is not strong enough.");
          break;

        case "auth/operation-not-allowed":
          showToastMessage("This operation is not allowed!");
          break;

        default:
          showToastMessage(
            "An error occurred during sign up. Please try again later."
          );
          console.log(error.code);
          break;
      }
    }
  };

  const handleYes = () => {};

  const handleNo = async () => {
    setLoading(true);

    const { firstName, lastName, email, gender, school, password } = userData;

    const response = await createUser(email, password);

    if (response) {
      const collectionRef = collection(db, "users");

      // saving the user's data in firestore
      await addDoc(collectionRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        gender: gender,
        school: school,
        password: password,
        rider: false,
      })
        .then((response) => {
          console.log("User saved successfully!");
          saveAsyncToken("userId", response.id);
          handleNext();
        })
        .catch((error) => console.log(error))
        .finally(() =>
          setTimeout(() => {
            setLoading(false);
          }, 1000)
        );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <AnimatedLottieView
        source={require("../../../assets/lotties/rider_animation.json")}
        autoPlay
        loop
        style={styles.lottie}
      />

      <Text style={styles.subtitle}>
        Want to deliver for us and{"\n"}earn money?
      </Text>

      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 1]}
        style={styles.bottomView}
      >
        <Text style={styles.continue}>continue as a RIDER</Text>

        <View style={styles.btnWrapper}>
          <Pressable
            style={[styles.btn, { backgroundColor: "black", marginEnd: 45 }]}
            onPress={handleNo}
          >
            <Text style={[styles.btnText, { color: "white" }]}>Not for me</Text>
          </Pressable>

          <Pressable
            style={[styles.btn, { backgroundColor: "white" }]}
            onPress={handleYes}
          >
            <Text style={[styles.btnText, { color: "black" }]}>Let's go</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ChooseRole;

const styles = StyleSheet.create({
  lottie: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    marginTop: 30,
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "NewRocker",
    fontSize: 16,
    color: "black",
    opacity: 0.7,
    marginTop: 30,
  },
  bottomView: {
    flex: 1,
    marginTop: 90,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  continue: {
    color: "white",
    textAlign: "center",
    marginTop: 60,
    fontFamily: "Prociono",
    fontSize: 18,
    letterSpacing: 0.5,
  },
  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 45,
    paddingHorizontal: 25,
  },
  btn: {
    width: 120,
    paddingVertical: 15,
    borderRadius: 20,
  },
  btnText: {
    textAlign: "center",
    fontFamily: "NewRocker",
    fontSize: 18,
  },
});
