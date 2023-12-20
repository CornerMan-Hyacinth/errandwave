import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InputField from "../general/InputField";
import theme from "../../../assets/constants/theme";
import { TouchableOpacity } from "react-native";
import { saveAsyncToken } from "../../helper/AsyncStorage";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../../FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import PickerField from "../general/PickerField";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ActivityIndicator } from "react-native";

const RegisterForm = ({ handleNext }) => {
  const auth = FIREBASE_AUTH;

  const navigation = useNavigation();
  const { darkPink } = theme.COLORS;

  const genderArray = ["Male", "Female"];

  const [schoolData, updateSchoolData] = useState([
    {
      id: 1,
      name: "University of Port-Harcourt (UniPort)",
    },
    {
      id: 2,
      name: "Rivers State University (RSU)",
    },
  ]);

  const [formData, updateFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    school: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [isLoading, setLoading] = useState(false);

  const updateField = (field, value) => {
    updateFormData((prevForm) => ({ ...prevForm, [field]: value }));
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

  const isValidUsername = (name) => {
    // Simple name validation regex
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**  this function validates the user unputs, calls the createUser function
  before storing the user data in FIRESTORE */
  const handleSubmit = async () => {
    // destructuring the formData object
    const {
      firstName,
      lastName,
      email,
      gender,
      school,
      password,
      confirmPassword,
      agree,
    } = formData;

    // validating each field before proceeding
    if (
      !firstName ||
      !lastName ||
      !email ||
      !gender ||
      !school ||
      !password ||
      !confirmPassword
    ) {
      await showToastMessage("All fields are required!");
    } else if (!isValidUsername(firstName)) {
      await showToastMessage("First name must contain only letters.");
    } else if (!isValidUsername(lastName)) {
      await showToastMessage("Last name must contain only letters.");
    } else if (!isValidEmail(email)) {
      await showToastMessage("Email is not valid.");
    } else if (password.length < 6 || password.length > 16) {
      await showToastMessage(
        "Password must be at least 6 to 16 characters long."
      );
    } else if (password !== confirmPassword) {
      await showToastMessage("Passwords do not match!");
    } else if (!agree) {
      await showToastMessage("Agree to the Terms to continue");
    } else {
      // Perform registration logic here
      setLoading(true);

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          showToastMessage("An account has been created with the email.");
          console.log("Yeah, this dude's already being created.");
        })
        .catch(async (error) => {
          switch (error.code) {
            case "auth/invalid-credential":
              const jsonFormData = JSON.stringify(formData);
              await saveAsyncToken("jsonUserData", jsonFormData);
              handleNext();
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
                "An error occurred during sign up. Please try again later."
              );
              console.log(error.code);
              break;
          }
        })
        .finally(() =>
          setTimeout(() => {
            setLoading(false);
          }, 1000)
        );
    }
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
      <PickerField
        data={genderArray}
        field="gender"
        value={formData.gender}
        updateField={updateField}
      />
      <PickerField
        data={schoolData}
        field="school"
        value={formData.school}
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

      <View style={styles.agreeWrapper}>
        <Pressable
          style={[
            styles.agreeCheck,
            { borderColor: darkPink, marginEnd: 10 },
            formData.agree && { backgroundColor: darkPink },
          ]}
          onPress={() =>
            updateFormData((prevForm) => ({
              ...prevForm,
              agree: !prevForm.agree,
            }))
          }
        />
        <Text style={styles.agreeText}>I agree to the </Text>
        <TouchableOpacity
          onPress={() => {
            saveAsyncToken("terms", "yes");
            navigation.navigate("Terms");
          }}
        >
          <Text
            style={[
              styles.agreeText,
              {
                fontFamily: "LatoBold",
                textDecorationLine: "underline",
                color: darkPink,
              },
            ]}
          >
            Terms and Conditions{" "}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: darkPink }]}
        onPress={handleSubmit}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.btnText}>Move In</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  btn: {
    width: 220,
    alignSelf: "center",
    paddingVertical: 10,
    marginTop: 45,
    borderRadius: 15,
    marginBottom: 10,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontFamily: "NewRocker",
    fontSize: 18,
  },
  agreeWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginStart: 20,
  },
  agreeCheck: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 30,
  },
});
