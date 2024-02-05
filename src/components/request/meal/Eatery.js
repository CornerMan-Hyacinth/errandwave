import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import theme from "../../../../assets/constants/theme";
import CustomToast from "../../general/CustomToast";

const Eatery = ({ isToastVisible, updateEatery }) => {
  const [eatery, setEatery] = useState("");

  const handleValue = (value) => {
    setEatery(value);
    updateEatery("eatery", value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an eatery</Text>

      <View style={{ marginTop: 30 }}>
        <EateryCell
          value={eatery}
          updateValue={handleValue}
          title={"Munch & Mingle"}
          owner={"Eze Coliins"}
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

      <CustomToast
        visible={isToastVisible}
        message={"Choose an eatery to continue"}
      />
    </View>
  );
};

const EateryCell = ({ title, value, updateValue, owner }) => {
  const { darkPink, faded, lightFaded } = theme.COLORS;

  const textColor = {
    color: value === title ? "#FFFFFF" : "#000000",
  };

  const [expand, setExpand] = useState(false);

  return (
    <Pressable
      style={[
        styles.cell,
        value === title
          ? { backgroundColor: faded }
          : { backgroundColor: lightFaded },
      ]}
      onPress={() => updateValue(title)}
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
