import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import theme from "../../../assets/constants/theme";

const Card = () => {
  const navigation = useNavigation();
  const { darkPink } = theme.COLORS;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Request an errand</Text>
      </View>

      <Text style={[styles.title, { color: darkPink }]}>
        Enter your card details
      </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  headerText: {
    fontFamily: "Prociono",
    fontSize: 16,
    marginStart: 15,
  },
  title: {
    fontFamily: "LatoRegular",
    fontSize: 20,
    marginTop: 15,
    color: "black",
  },
});
