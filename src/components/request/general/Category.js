import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import theme from "../../../../assets/constants/theme";
import { useNavigation } from "@react-navigation/native";

const Category = ({ updateCategory }) => {
  const navigation = useNavigation();
  const { darkPink } = theme.COLORS;

  const handleCategory = (category) => {
    updateCategory(category);
  };

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
          style={[styles.catBox]}
          onPress={() => handleCategory("shopping")}
        >
          <Entypo name="shopping-bag" size={20} color="white" />
          <Text style={styles.catText}>Shopping</Text>
        </Pressable>
        <Pressable
          style={[styles.catBox]}
          onPress={() => handleCategory("meal")}
        >
          <Image
            source={require("../../../../assets/icons/icon_meal.png")}
            style={styles.catImage}
          />
          <Text style={styles.catText}>Meals</Text>
        </Pressable>
        <Pressable
          style={[styles.catBox]}
          onPress={() => handleCategory("laundry")}
        >
          <Image
            source={require("../../../../assets/icons/icon_laundry.png")}
            style={styles.catImage}
          />
          <Text style={styles.catText}>Laundry</Text>
        </Pressable>
        <Pressable
          style={[styles.catBox]}
          onPress={() => handleCategory("parcel")}
        >
          <Image
            source={require("../../../../assets/icons/icon_parcel.png")}
            style={styles.catImage}
          />
          <Text style={styles.catText}>Parcel</Text>
        </Pressable>
      </View>
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
    minWidth: 95,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4D0127",
    marginEnd: 15,
    marginBottom: 30,
    borderRadius: 10,
  },
  catText: {
    fontFamily: "LatoBold",
    fontSize: 16,
    color: "white",
    marginTop: 5,
  },
  catImage: {
    width: 20,
    height: 20,
  },
});
