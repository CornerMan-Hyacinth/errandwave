import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import theme from "../../../../assets/constants/theme";

const { darkPink, faded, lightFaded } = theme.COLORS;

const Laundromat = () => {
  const [selected, setSelected] = useState("");

  const handleSelect = (value) => {
    selected === value ? setSelected("") : setSelected(value);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Choose a laundromat</Text>

      <View style={{ marginTop: 30 }}>
        <LaundromatCell
          title={"ExpressWash Solutions"}
          selected={selected}
          setSelected={handleSelect}
          owner={"Felix Nwachi"}
        />

        <LaundromatCell
          title={"PurePress Laundry"}
          selected={selected}
          setSelected={handleSelect}
          owner={"Dani Owe"}
        />
      </View>
    </View>
  );
};

const LaundromatCell = ({ title, selected, setSelected, owner }) => {
  const textColor = {
    color: selected === title ? "#FFFFFF" : "#000000",
  };

  const [expand, setExpand] = useState(false);

  return (
    <Pressable
      style={[
        styles.cell,
        selected === title
          ? { backgroundColor: faded }
          : { backgroundColor: lightFaded },
      ]}
      onPress={() => setSelected(title)}
    >
      <View style={styles.cellTop}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>ES</Text>
        </View>

        <View style={{ width: "70%" }}>
          <Text style={[styles.laundryName, textColor]}>{title}</Text>
          <Text style={[styles.laundryOwner, textColor]}>Owned by {owner}</Text>
        </View>

        <Pressable
          style={styles.toggleBtn}
          onPress={() => setExpand((prevState) => !prevState)}
        >
          <AntDesign
            name={expand ? "caretup" : "caretdown"}
            size={20}
            color={textColor.color}
          />
        </Pressable>
      </View>

      {expand && (
        <View style={styles.cellBottom}>
          <View style={styles.bottomWidget}>
            <FontAwesome5 name="phone-alt" size={15} color={darkPink} />
            <Text style={[styles.bottomText, textColor]}>0818 789 5540</Text>
          </View>
          <View style={[styles.bottomWidget, textColor]}>
            <Ionicons name="location" size={15} color={darkPink} />
            <Text numberOfLines={1} style={[styles.bottomText, textColor]}>
              23 JCole Street, RSU, Port Harcourt
            </Text>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default Laundromat;

const styles = StyleSheet.create({
  title: {
    fontFamily: "LatoRegular",
    fontSize: 20,
    marginTop: 15,
    color: "black",
  },
  cell: {
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 12,
    overflow: "hidden",
    marginBottom: 15,
  },
  cellTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1AEF89",
    borderRadius: 20,
    marginEnd: 15,
  },
  logoText: {
    fontFamily: "Courgette",
    fontSize: 20,
  },
  laundryName: {
    fontFamily: "Prociono",
    fontSize: 16,
    marginBottom: 5,
  },
  laundryOwner: {
    fontFamily: "LatoRegular",
    fontSize: 12,
    opacity: 0.5,
  },
  toggleBtn: {
    padding: 10,
  },
  cellBottom: {
    width: "70%",
    marginTop: 15,
    marginStart: 55,
  },
  bottomWidget: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  bottomText: {
    marginStart: 10,
    fontFamily: "LatoRegular",
    fontSize: 14,
    opacity: 0.5,
  },
});
