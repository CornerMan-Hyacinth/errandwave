import { StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../../assets/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  const { darkPink } = theme.COLORS;
  const pinkColor = {
    color: darkPink,
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.date, pinkColor]}>14 Dec, 2023</Text>
        <Text style={styles.hello}>Good day, Nick!</Text>
      </View>
      <Pressable>
        <Ionicons name="menu-outline" size={25} color={pinkColor.color} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  date: {
    fontFamily: "Prociono",
    fontSize: 14,
  },
  hello: {
    fontFamily: "Prociono",
    fontSize: 16,
    color: "black",
  },
});
