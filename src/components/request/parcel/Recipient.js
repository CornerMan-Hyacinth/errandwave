import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import theme from "../../../../assets/constants/theme";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Recipient = ({ name, phone, location, updateEntry }) => {
  const { darkPink, lightFaded } = theme.COLORS;

  const [nameFocused, setNameFocused] = useState(true);
  const [locationFocused, setLocationFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Enter recipient's details</Text>

      <View style={{ marginTop: 30 }}>
        <View style={styles.inputContainer}>
          <View
            style={[
              styles.inputWrapper,
              nameFocused && { borderColor: darkPink },
            ]}
          >
            <View
              style={[
                styles.iconBox,
                nameFocused && { backgroundColor: darkPink },
              ]}
            >
              <AntDesign name="user" size={20} color={"white"} />
            </View>

            <TextInput
              autoCapitalize="words"
              autoFocus={nameFocused}
              value={name}
              placeholder="Name"
              placeholderTextColor={"rgba(0, 0, 0, .5)"}
              onChangeText={(text) => updateEntry("recipientName", text)}
              selectionColor={darkPink}
              style={styles.input}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View
            style={[
              styles.inputWrapper,
              phoneFocused && { borderColor: darkPink },
            ]}
          >
            <View
              style={[
                styles.iconBox,
                phoneFocused && { backgroundColor: darkPink },
              ]}
            >
              <AntDesign name="phone" size={20} color={"white"} />
            </View>

            <TextInput
              autoCapitalize="words"
              autoFocus={phoneFocused}
              value={phone}
              placeholder="0801 000 0000"
              placeholderTextColor={"rgba(0, 0, 0, .5)"}
              onChangeText={(text) => updateEntry("recipientPhone", text)}
              selectionColor={darkPink}
              style={styles.input}
              onFocus={() => setPhoneFocused(true)}
              onBlur={() => setPhoneFocused(false)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View
            style={[
              styles.inputWrapper,
              locationFocused && { borderColor: darkPink },
            ]}
          >
            <View
              style={[
                styles.iconBox,
                locationFocused && { backgroundColor: darkPink },
              ]}
            >
              <Entypo name="location-pin" size={20} color="white" />
            </View>

            <TextInput
              autoCapitalize="words"
              autoFocus={locationFocused}
              value={location}
              placeholder="e.g. Grace Lodge, Ubasin** Street"
              placeholderTextColor={"rgba(0, 0, 0, .5)"}
              onChangeText={(text) => updateEntry("recipientLocation", text)}
              selectionColor={darkPink}
              style={styles.input}
              onFocus={() => setLocationFocused(true)}
              onBlur={() => setLocationFocused(false)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const InputField = ({ value, field, updateField, focus }) => {};

export default Recipient;

const styles = StyleSheet.create({
  title: {
    fontFamily: "LatoRegular",
    fontSize: 20,
    marginTop: 15,
    color: "black",
  },
  inputContainer: {
    width: "100%",
    height: 63,
    justifyContent: "center",
    // marginBottom: 15,
  },
  inputWrapper: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    overflow: "hidden",
  },
  iconBox: {
    width: 50,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  input: {
    flex: 1,
    fontFamily: "Prociono",
    fontSize: 16,
    marginHorizontal: 10,
  },
});
