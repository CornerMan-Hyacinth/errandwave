import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import theme from "../../../../assets/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import productData from "../../../helper/productData";

const { darkPink } = theme.COLORS;

const TABS = ["Snacks", "Drinks", "Groceries", "Stationeries"];

const Explore = () => {
  fadedPink = "rgba(179, 7, 132, 0.1)";

  const [section, setSection] = useState("Snacks");
  const [searchText, updateSearchText] = useState("");
  const [selected, addSelected] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalProductId, setModalProductId] = useState();
  const [isAdd, setAdd] = useState(false);

  const handleAddCart = (index) => {
    addSelected((prevSelected) => [...prevSelected, index]);
    console.log(selected);
  };

  const handleConfirmProduct = (id) => {
    const matchingItem = selected.find((item, index) => item === index);

    productData.find((obj, index) => obj.id === id && setModalProductId(index));

    matchingItem ? setAdd(false) : setAdd(true);
    setModalVisible(true);
  };

  // Function to render product components in pairs
  const renderProductDataInPairs = () => {
    const pairs = [];
    for (let i = 0; i < productData.length; i += 2) {
      pairs.push([productData[i], productData[i + 1]]);
    }
    return pairs;
  };

  // product component
  const productCell = ({ item }) => {
    return (
      <View style={styles.productWidget}>
        <Pressable style={[styles.product, { borderColor: fadedPink }]}>
          <Image
            source={require("../../../../assets/images/snack3.jpg")}
            style={styles.productImg}
          />
          <View style={[styles.productDown, { backgroundColor: fadedPink }]}>
            <Text style={styles.productName} numberOfLines={1}>
              {item[0].name}
            </Text>
            <Text style={styles.productPrice} numberOfLines={1}>
              &#8358;{item[0].price}
            </Text>

            <Pressable
              style={[
                styles.cartBtn,
                selected.includes(item[0].id) && {
                  backgroundColor: darkPink,
                },
              ]}
              onPress={() => handleConfirmProduct(item[0].id)}
            >
              <MaterialCommunityIcons name="cart" size={20} color="white" />
              <Text style={styles.cartText}>Add to cart</Text>
            </Pressable>
          </View>
        </Pressable>

        {item[1] && (
          <Pressable style={[styles.product, { borderColor: fadedPink }]}>
            <Image
              source={require("../../../../assets/images/snack3.jpg")}
              style={styles.productImg}
            />
            <View style={[styles.productDown, { backgroundColor: fadedPink }]}>
              <Text style={styles.productName} numberOfLines={1}>
                {item[1].name}
              </Text>
              <Text style={styles.productPrice} numberOfLines={1}>
                &#8358;{item[1].price}
              </Text>

              <Pressable
                style={[
                  styles.cartBtn,
                  selected.includes(item[1].id) && {
                    backgroundColor: darkPink,
                  },
                ]}
                onPress={() => handleConfirmProduct(item[1].id)}
              >
                <MaterialCommunityIcons name="cart" size={20} color="white" />
                <Text style={styles.cartText}>Add to cart</Text>
              </Pressable>
            </View>
          </Pressable>
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.sectionNav}>
        {TABS.map((item, index) => (
          <Pressable
            key={index}
            style={[
              styles.section,
              section === item && { borderBottomColor: darkPink, opacity: 1 },
            ]}
            onPress={() => setSection(item)}
          >
            <Text
              style={[
                styles.sectionText,
                section === item && {
                  color: darkPink,
                  textDecorationLine: "underline",
                },
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
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
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 30,
        }}
      >
        <FlashList
          data={renderProductDataInPairs()}
          renderItem={productCell}
          keyExtractor={(_, index) => index.toString()}
          estimatedItemSize={5}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={[styles.counter, { backgroundColor: darkPink }]}>
        <Text style={styles.counterText}>{selected.length}</Text>
      </View>

      <Modal
        animationType="spring"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <Pressable
          style={styles.modalBackdrop}
          onPress={() => setModalVisible(false)}
        >
          <Pressable style={styles.modalContainer}>
            <Text style={styles.modalProductName}>
              {productData[modalProductId[0]].name}
            </Text>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  sectionNav: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  section: {},
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
  productWidget: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  product: {
    width: "45%",
    height: 210,
    borderWidth: 2,
    borderRadius: 20,
    paddingTop: 5,
    overflow: "hidden",
    marginBottom: 20,
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
    marginBottom: 10,
    fontSize: 14,
  },
  priceIcon: {
    width: 20,
    height: 20,
  },
  productPrice: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    marginBottom: 5,
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
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .4)",
  },
  cartText: {
    color: "white",
    fontFamily: "Prociono",
    fontSize: 12,
    marginStart: 5,
  },
  counter: {
    position: "absolute",
    bottom: 5,
    right: 0,
    height: 45,
    width: 45,
    borderRadius: 30,
    justifyContent: "center",
    opacity: 0.7,
    zIndex: 0,
  },
  counterText: {
    fontFamily: "LatoBold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});
