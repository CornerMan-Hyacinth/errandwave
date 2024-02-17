import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import theme from "../../../assets/constants/theme";

const Help = () => {
  const navigation = useNavigation();
  const { darkPink } = theme.COLORS;

  const [helpDetails, setHelpDetails] = useState({
    email: "",
    question: "",
  });

  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <Pressable style={{ marginTop: 15 }} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={25} color="black" />
      </Pressable>

      <Text style={styles.title}>Have a burning question?</Text>

      <Text style={styles.label}>Enter email address</Text>
      <TextInput
        style={[styles.emailInput, { borderColor: darkPink }]}
        numberOfLines={1}
        placeholder="something@email.com"
        placeholderTextColor={"rgba(0, 0, 0, .6)"}
        selectionColor={darkPink}
        value={helpDetails.email}
        onChangeText={(text) => setHelpDetails({ emaill: text })}
      />

      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: 7,
        }}
      >
        <Text style={[styles.label, { marginBottom: 0, flex: 1 }]}>
          Enter your questions
        </Text>
        <Text style={styles.maxChar}>{helpDetails.question.length}/1024</Text>
      </View>
      <TextInput
        style={[styles.questionInput, { borderColor: darkPink }]}
        multiline
        placeholder="Your questions"
        placeholderTextColor={"rgba(0, 0, 0, .6)"}
        selectionColor={darkPink}
        value={helpDetails.question}
        onChangeText={(text) => setHelpDetails({ question: text })}
        maxLength={1024}
      />

      <Text style={[styles.note, { color: darkPink }]}>
        *We reach back within 24 hours
      </Text>

      <Pressable style={[styles.submitBtn, { backgroundColor: darkPink }]}>
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Prociono",
    fontSize: 18,
    marginVertical: 30,
  },
  label: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    marginBottom: 7,
  },
  emailInput: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  questionInput: {
    width: "90%",
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 30,
    padding: 10,
    textAlignVertical: "top",
  },
  maxChar: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    color: "rgba(0, 0, 0, .5)",
  },
  note: {
    fontFamily: "LatoBold",
    fontSize: 12,
    flex: 1,
  },
  submitBtn: {
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  submitText: {
    fontFamily: "Prociono",
    fontSize: 18,
    color: "white",
  },
});
