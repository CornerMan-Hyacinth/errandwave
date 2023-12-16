import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InputField from "../general/InputField";
import theme from "../../../assets/constants/theme";
import { TouchableOpacity } from "react-native";
import { saveAsyncToken } from "../../helper/AsyncStorage";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../../FirebaseConfig";
import { collection } from "firebase/firestore";
import PickerField from "../general/PickerField";

const RegisterForm = () => {
  const auth = FIREBASE_AUTH;
  const db = FIREBASE_DB;

  const navigation = useNavigation();
  const { darkPink } = theme.COLORS;

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
    school: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

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
    // Simple email validation regex
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
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

  /**  this function validates the user unputs, calls the createUser function
  before storing the user data in FIRESTORE */
  const handleSubmit = async () => {
    // destructuring the formData object
    const {
      firstName,
      lastName,
      email,
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
      !school ||
      !password ||
      !confirmPassword
    ) {
      await showToastMessage("All fields are required!");
    } else if (!isValidUsername(firstName) || !isValidUsername(lastName)) {
      await showToastMessage("Username must contain only letters.");
    } else if (password.length < 6 || password.length > 16) {
      await showToastMessage(
        "Password must be at least 6 characters long and not over 16."
      );
    } else if (password !== confirmPassword) {
      await showToastMessage("Passwords do not match!");
    } else if (!agree) {
      await showToastMessage("Agree to the Terms to continue");
    } else {
      // Perform registration logic here
      const response = await createUser(email, password);

      if (response) {
        const userId = response.user.uid;

        // saving userId to AsyncStorage
        saveAsyncToken("userId", userId);

        const collectionRef = collection(db, "users");

        // saving the user's data in firestore
        await addDoc(collectionRef, {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          rider: false,
        })
          .then(() => {
            console.log("User saved successfully!");
            handleNext();
          })
          .catch((error) => console.log(error));
      }
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
