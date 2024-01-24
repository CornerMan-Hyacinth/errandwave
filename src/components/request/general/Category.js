import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import theme from "../../../../assets/constants/theme";

const Category = ({ updateCategory, handleNext }) => {
  const { darkPink } = theme.COLORS;

  const [category, setCategory] = useState("");

  useEffect(() => {
    updateCategory("category", category);
  }, [category]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Request an errand</Text>
      </View>

      <Text style={styles.title}>Choose a category</Text>

      <View style={styles.catFlex}>
        <Pressable
          style={[styles.catBox, category === "shopping" && { opacity: 1 }]}
          onPress={() => setCategory("shopping")}
        >
          <Text style={styles.catText}>Shopping</Text>
        </Pressable>
        <Pressable
          style={[styles.catBox, category === "meals" && { opacity: 1 }]}
          onPress={() => setCategory("meals")}
        >
          <Text style={styles.catText}>Meals</Text>
        </Pressable>
        <Pressable
          style={[styles.catBox, category === "laundry" && { opacity: 1 }]}
          onPress={() => setCategory("laundry")}
        >
          <Text style={styles.catText}>Laundry</Text>
        </Pressable>
        <Pressable
          style={[styles.catBox, category === "delivery" && { opacity: 1 }]}
          onPress={() => setCategory("delivery")}
        >
          <Text style={styles.catText}>Delivery</Text>
        </Pressable>
      </View>

      <Pressable
        style={[styles.btn, { backgroundColor: darkPink }]}
        onPress={handleNext}
      >
        <Text style={styles.btnText}>Next</Text>

        <MaterialIcons name="navigate-next" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  catFlex: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  catBox: {
    width: 95,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4D0127",
    marginEnd: 15,
    marginBottom: 15,
    borderRadius: 10,
    opacity: 0.6,
  },
  catText: {
    fontFamily: "LatoBold",
    fontSize: 16,
    color: "white",
  },
  btn: {
    position: "absolute",
    bottom: 15,
    right: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 105,
    borderRadius: 5,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: "rgba(0, 0, 0, .8)",
  },
  btnText: {
    color: "white",
    fontFamily: "LatoRegular",
    fontSize: 18,
  },
});
