import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef } from "react";
import BottomSheet from "@devvie/bottom-sheet";
import theme from "../../../assets/constants/theme";
import { FontAwesome } from "@expo/vector-icons";

const { darkPink, lightFaded } = theme.COLORS;

const BottomOrderSheet = ({ errand, sheetRef }) => {
  const renderItem = ({ item }) => {
    switch (errand.category) {
      case "Shopping":
        return (
          <ItemCell
            itemName={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        );

      case "Meal":
        return <MealCell mealName={item.name} price={item.price} />;

      case "Laundry":
        return <LaundryCell category={item.category} number={item.number} />;

      default:
        break;
    }
  };

  return (
    <BottomSheet
      ref={sheetRef}
      animationType="spring"
      dragHandleStyle={{ backgroundColor: darkPink }}
      height={errand.status === "Ongoing" ? "75%" : "70%"}
    >
      <View style={{ height: "100%" }}>
        <View style={styles.sheetHeader}>
          <Text style={styles.sheetHeaderText}>Order details</Text>
          <Pressable onPress={() => sheetRef.current.close()}>
            <FontAwesome name="close" size={24} color={darkPink} />
          </Pressable>
        </View>
        <View style={[styles.sheetLine, { backgroundColor: darkPink }]} />

        <View style={styles.sheetBody}>
          <Text style={styles.sheetBodyText}>
            <Text style={{ fontFamily: "LatoBold", color: darkPink }}>
              Rider
            </Text>
            <Text style={{ fontFamily: "LatoRegular" }}>
              {"  "}
              {errand.rider}
            </Text>
          </Text>
          <Text style={styles.sheetBodyText}>
            <Text style={{ fontFamily: "LatoBold", color: darkPink }}>
              Category -
            </Text>
            <Text style={{ fontFamily: "LatoRegular" }}>
              {"  "}
              {errand.category}
            </Text>
          </Text>
          <Text style={styles.sheetBodyText}>
            <Text style={{ fontFamily: "LatoBold", color: darkPink }}>
              Price -
            </Text>
            <Text style={{ fontFamily: "LatoRegular" }}>
              {"  "}
              &#8358;{errand.totalPrice}
            </Text>
          </Text>
          <Text style={styles.sheetBodyText}>
            <Text style={{ fontFamily: "LatoBold", color: darkPink }}>
              Status -
            </Text>
            <Text style={{ fontFamily: "LatoRegular" }}>
              {"  "}
              {errand.status}
            </Text>
          </Text>
        </View>

        <View style={styles.cellWidget}>
          <FlatList
            data={errand.errandItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {errand.status === "Ongoing" && (
          <Pressable style={[styles.cancelBtn, { backgroundColor: darkPink }]}>
            <Text style={styles.cancelBtnText}>Cancel Order</Text>
          </Pressable>
        )}
      </View>
    </BottomSheet>
  );
};

const ItemCell = ({ itemImage, itemName, quantity, price }) => {
  return (
    <View style={styles.cellContainer}>
      <Image
        source={require("../../../assets/images/snack1.jpg")}
        style={[styles.cellImage, { borderColor: lightFaded }]}
      />
      <Text style={styles.cellText}>{itemName}</Text>
      <Text style={[styles.cellText, styles.cellQuantity]}>
        Quantity: {quantity}
      </Text>
      <Text style={[styles.cellText, styles.cellPrice]}>&#8358;{price}</Text>
    </View>
  );
};

const MealCell = ({ mealName, price }) => {
  return (
    <View
      style={[
        styles.mealCellContainer,
        { backgroundColor: lightFaded, borderColor: darkPink },
      ]}
    >
      <Text style={styles.cellText}>{mealName}</Text>
      <Text style={[styles.cellText, styles.cellPrice]}>&#8358;{price}</Text>
    </View>
  );
};

const LaundryCell = ({ category, number }) => {
  return (
    <View
      style={[
        styles.mealCellContainer,
        { backgroundColor: lightFaded, borderColor: darkPink, width: 130 },
      ]}
    >
      <Text style={styles.cellText}>{category}</Text>
      <Text style={[styles.cellText, styles.cellPrice]}>{number} outfits</Text>
    </View>
  );
};

export default BottomOrderSheet;

const styles = StyleSheet.create({
  cellWidget: {
    paddingStart: 15,
  },
  cellContainer: {
    width: 120,
    alignItems: "center",
    marginEnd: 10,
  },
  mealCellContainer: {
    width: 100,
    alignItems: "center",
    marginEnd: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
  },
  cellImage: {
    width: 70,
    height: 70,
    borderRadius: 30,
    borderWidth: 1,
  },
  cellText: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
  cellQuantity: {
    marginTop: 8,
    opacity: 0.5,
  },
  cellPrice: {
    marginTop: 4,
    opacity: 0.5,
  },
  sheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  sheetHeaderText: {
    fontFamily: "Prociono",
    fontSize: 20,
  },
  sheetLine: {
    height: 1,
    width: "100%",
    marginBottom: 30,
  },
  sheetBody: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  sheetBodyText: {
    marginBottom: 15,
    fontSize: 16,
  },
  cancelBtn: {
    position: "absolute",
    bottom: 70,
    width: "80%",
    alignSelf: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },
  cancelBtnText: {
    textAlign: "center",
    fontFamily: "Prociono",
    fontSize: 18,
    color: "white",
  },
});
