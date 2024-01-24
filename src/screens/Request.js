import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import theme from "../../assets/constants/theme";
import Main from "../components/request/shopping/Main";
import Category from "../components/request/general/Category";

const Request = () => {
  const [isOrigin, setOrigin] = useState(false);
  const [category, setCategory] = useState("");

  const updateCategory = (value) => setCategory(value);

  return (
    <View style={{ flex: 1 }}>
      {isOrigin ? (
        <Category
          updateCategory={updateCategory}
          handleNext={() => setOrigin(false)}
        />
      ) : (
        <Main handleCat={() => setOrigin(true)} />
      )}
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({});
