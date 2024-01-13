import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const Category = ({ updateCategory }) => {
  const [category, setCategory] = useState("");

  useEffect(() => {
    updateCategory("category", category);
  }, [category]);

  return (
    <View style={{ flex: 1 }}>
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
        <Pressable
          style={[styles.catBox, category === "other" && { opacity: 1 }]}
          onPress={() => setCategory("other")}
        >
          <Text style={styles.catText}>Other</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
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
});
