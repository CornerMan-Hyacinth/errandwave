import { StatusBar, StyleSheet, View } from "react-native";
import React, { useState } from "react";
// import MainShopping from "../components/request/shopping/Main";
import Category from "../components/request/general/Category";
import MainMeal from "../components/request/meal/MainMeal";

const Request = () => {
  const [isOrigin, setOrigin] = useState(false);
  const [category, setCategory] = useState("");

  const updateCategory = (value) => setCategory(value);
  const handleCat = () => setOrigin(true);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />

      {isOrigin ? (
        <Category
          updateCategory={updateCategory}
          handleNext={() => setOrigin(false)}
        />
      ) : (
        // <MainShopping handleCat={handleCat} />
        <MainMeal handleCat={handleCat} />
      )}
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({});
