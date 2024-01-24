import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef } from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import theme from "../../../../assets/constants/theme";

const Delivery = ({ locationValue, updateLocation, meetupLocation }) => {
  const { darkPink } = theme.COLORS;

  const inputRef = useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Enter a delivery location</Text>

      <View style={styles.inputWidget}>
        <Entypo name="location-pin" size={30} color={darkPink} />
        <TextInput
          autoCapitalize="words"
          autoFocus={true}
          placeholder="e.g. Front Gate, Grace Lodge"
          onChangeText={(text) => updateLocation("delivery", text)}
          ref={inputRef}
          style={styles.input}
          value={locationValue}
        />
        <Pressable
          style={{ marginStart: 3 }}
          onPress={() => inputRef.current.clear()}
        >
          <MaterialIcons name="cancel" size={24} color={darkPink} />
        </Pressable>
      </View>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  title: {
    fontFamily: "LatoRegular",
    fontSize: 20,
    marginTop: 15,
    color: "black",
  },
  inputWidget: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
    width: "100%",
    backgroundColor: "#FAF2F6",
    borderRadius: 10,
    marginTop: 30,
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    fontFamily: "Prociono",
    fontSize: 16,
    color: "black",
  },
});
