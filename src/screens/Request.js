import { StatusBar, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Category from "../components/request/general/Category";
import MainShopping from "../components/request/shopping/MainShopping";
import MainMeal from "../components/request/meal/MainMeal";
import MainParcel from "../components/request/parcel/MainParcel";
import MainLaundry from "../components/request/laundry/MainLaundry";
import { getAsyncToken } from "../helper/AsyncStorage";

const Request = () => {
  const [isOrigin, setOrigin] = useState(false);
  const [category, setCategory] = useState("");

  const updateCategory = (value) => {
    setCategory(value);
    setOrigin(false);
  };
  const handleCat = () => setOrigin(true);

  const renderCategory = () => {
    switch (category) {
      case "shopping":
        return <MainShopping handleCat={handleCat} />;

      case "meal":
        return <MainMeal handleCat={handleCat} />;

      case "laundry":
        return <MainLaundry handleCat={handleCat} />;

      case "parcel":
        return <MainParcel handleCat={handleCat} />;
      default:
        break;
    }
  };

  const renderPage = () =>
    isOrigin ? <Category updateCategory={updateCategory} /> : renderCategory();

  useEffect(() => {
    getAsyncToken("request").then((result) =>
      result !== "none" ? setCategory(result) : setOrigin(true)
    );
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />

      {renderPage()}
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({});
