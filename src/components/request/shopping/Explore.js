import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import theme from "../../../../assets/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { darkPink, faded, lightFaded } = theme.COLORS;

const DATA = [
  {
    id: 1,
    title: "Snacks",
  },
  {
    id: 2,
    title: "Drinks",
  },
  {
    id: 3,
    title: "Groceries",
  },
  {
    id: 4,
    title: "Supplies",
  },
];

const ProductCell = ({ id, name, price, vendor, section }) => {
  fadedPink = "rgba(179, 7, 132, 0.1)";

  return (
    <Pressable style={[styles.product, { borderColor: fadedPink }]}>
      <Image
        source={require("../../../../assets/images/snack3.jpg")}
        style={styles.productImg}
      />
      <View style={[styles.productDown, { backgroundColor: fadedPink }]}>
        <Text style={styles.productName} numberOfLines={1}>
          Digestive Biscuit
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Image
            source={require("../../../../assets/icons/naira_icon.png")}
            style={styles.priceIcon}
          />
          <Text style={styles.productPrice}>350</Text>
        </View>
        <Text style={styles.productVendor}>Stellaz Stores</Text>

        <Pressable style={[styles.cartBtn, { backgroundColor: darkPink }]}>
          <MaterialCommunityIcons name="cart" size={20} color="white" />
          <Text style={styles.cartText}>Add to cart</Text>
        </Pressable>
      </View>
      {/* <Pressable style={[styles.cartBtn, { backgroundColor: darkPink }]}>
        <MaterialCommunityIcons name="cart" size={20} color="white" />
      </Pressable> */}
    </Pressable>
  );
};

const Explore = () => {
  const [section, setSection] = useState("Snacks");
  const [searchText, updateSearchText] = useState("");

  const Item = ({ title }) => (
    <Pressable
      style={[
        styles.section,
        section === title && { borderBottomColor: darkPink, opacity: 1 },
      ]}
      onPress={() => setSection(title)}
    >
      <Text
        style={[
          styles.sectionText,
          section === title && {
            color: darkPink,
            textDecorationLine: "underline",
          },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );

  return (
    <View style={{ flex: 1 }}>
      <View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>

      <View style={[styles.search, { borderColor: darkPink }]}>
        <TextInput
          placeholder={`Browse ${section}`}
          placeholderTextColor={"rgba(0, 0, 0, .5)"}
          selectionColor={darkPink}
          style={styles.searchInput}
          value={searchText}
          onChangeText={(text) => updateSearchText(text)}
        />
        <View style={[styles.searchBtn, { backgroundColor: darkPink }]}>
          <Image
            source={require("../../../../assets/icons/search_icon.png")}
            style={styles.searchIcon}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 45,
          overflow: "hidden",
          //   paddingHorizontal: 15,
        }}
      >
        <ProductCell />
        <ProductCell />
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  section: {
    marginTop: 10,
  },
  sectionText: {
    fontFamily: "LatoRegular",
    fontSize: 16,
    color: "black",
    marginEnd: 20,
  },
  search: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: "Prociono",
    fontSize: 14,
  },
  searchBtn: {
    width: 60,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    width: 30,
    height: 30,
    tintColor: "white",
  },
  product: {
    width: "45%",
    height: 220,
    borderWidth: 2,
    borderRadius: 20,
    paddingTop: 5,
    overflow: "hidden",
  },
  productImg: {
    width: "100%",
    height: 100,
  },
  productDown: {
    flex: 1,
    padding: 5,
    height: 100,
  },
  productName: {
    fontFamily: "LatoBold",
    maxWidth: "100%",
    marginBottom: 5,
    fontSize: 14,
  },
  priceIcon: {
    width: 20,
    height: 20,
  },
  productPrice: {
    fontFamily: "LatoRegular",
    fontSize: 14,
  },
  productVendor: {
    fontFamily: "Prociono",
    opacity: 0.5,
    fontSize: 12,
  },
  cartBtn: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 4,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cartText: {
    color: "white",
    fontFamily: "Prociono",
    fontSize: 12,
    marginStart: 5,
  },
});
