import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import theme from "../../../../assets/constants/theme";

const Eatery = () => {
  const [eatery, setEatery] = useState("");

  const handleValue = (value) => setEatery(value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an eatery</Text>

      <View style={styles.radioBlock}>
        <EateryCell
          value={eatery}
          updateValue={handleValue}
          title={"Munch & Mingle"}
        />

        <EateryCell
          value={eatery}
          updateValue={handleValue}
          title={"Plateful Delight"}
        />

        <EateryCell
          value={eatery}
          updateValue={handleValue}
          title={"Biastro Bliss"}
        />
      </View>
    </View>
  );
};

const EateryCell = ({ value, updateValue, title }) => {
  const { darkPink, lightFaded } = theme.COLORS;

  return (
    <Pressable style={styles.radio} onPress={() => updateValue(title)}>
      <View
        style={[
          styles.radioBtn,
          { borderColor: darkPink },
          title === value
            ? { backgroundColor: darkPink }
            : { backgroundColor: lightFaded },
        ]}
      />
      <Text style={styles.radioText}>{title}</Text>
    </Pressable>
  );
};

export default Eatery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: "LatoRegular",
    fontSize: 20,
    marginTop: 15,
    color: "black",
  },
  radioBlock: {
    marginTop: 30,
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  radioBtn: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginEnd: 10,
    borderWidth: 1,
  },
  radioText: {
    fontFamily: "Prociono",
    fontSize: 16,
  },
});
