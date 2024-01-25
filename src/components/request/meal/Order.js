import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import theme from "../../../../assets/constants/theme";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import mealData from "../../../helper/mealData";
import { Picker } from "@react-native-picker/picker";

const { darkPink } = theme.COLORS;

const Order = () => {
  const [mealOrder, updateMealOrder] = useState([]);
  const [cellCount, setCellCount] = useState(1);

  const addNewOrder = async (newOrder, index) => {
    const mealExists = mealOrder.some(
      (innerArray) => innerArray[0] === newOrder[0]
    );

    if (mealExists) {
      return new Error("This meal has already being selected!");
    } else if (mealOrder[index] !== undefined) {
      const newMealOrder = [...mealOrder];
      newMealOrder[index] = await newOrder;

      updateMealOrder(newMealOrder);
    } else {
      updateMealOrder((prevOrder) => [...prevOrder, newOrder]);
    }
  };

  const testSomething = () => {
    setTimeout(() => {
      // console.log(`Added new meal: ${newOrder}`);
      console.log(`All: ${mealOrder}`);
      console.log(`Number of meals: ${mealOrder.length}`);
    }, 1000);
  };

  const modifyOrder = async (orderIndex, valueIndex, newValue) => {
    // Modify the content of the order array at the specified index and itemIndex
    const newOrder = [...mealOrder];
    if (
      newOrder[orderIndex] &&
      newOrder[orderIndex][valueIndex] !== undefined
    ) {
      newOrder[orderIndex][valueIndex] = await newValue;
    }

    updateMealOrder(newOrder);
  };

  const duplicateOrderCell = () => setCellCount((prevCount) => prevCount + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Place your order</Text>

      <View style={{ marginTop: 5 }}>
        {[...Array(cellCount)].map((_, index) => (
          <OrderCell
            key={index}
            index={index}
            data={mealData}
            addOrder={addNewOrder}
            modifyOrder={modifyOrder}
          />
        ))}
      </View>

      <View style={styles.cellAdd}>
        <Pressable
          style={[styles.cellBtn, { backgroundColor: darkPink }]}
          onPress={duplicateOrderCell}
        >
          <AntDesign name="plus" size={30} color="white" />
        </Pressable>

        {/* <Pressable
          style={[styles.cellBtn, { backgroundColor: darkPink }]}
          onPress={() => testSomething()}
        >
          <Text>Check</Text>
        </Pressable> */}
      </View>
    </View>
  );
};

const OrderCell = ({ index, data, addOrder, modifyOrder }) => {
  const [order, updateOrder] = useState({
    meal: "",
    price: 0,
  });

  const [priceIncrement, setPriceIncrement] = useState(0);

  // this function retrieves the index position of the meal in the data
  const getMealIndex = (meal) => {
    const mealIndex = data.findIndex((obj) =>
      Object.values(obj).includes(meal)
    );
    return mealIndex;
  };

  // this function updates the value of the meal in the useState
  const handleMeal = async (meal) => {
    const basePrice = data[getMealIndex(meal)].basePrice;

    updateOrder((prevOrder) => ({
      ...prevOrder,
      meal: meal,
      price: basePrice,
    }));

    await addOrder([meal, basePrice], index);
  };

  /* this function updates the value of the price in the useState by
  either incrementing or decrementing */
  const handlePrice = async (btn, index) => {
    const oldPrice = order.price;
    const incremental = data[getMealIndex(order.meal)].incremental;
    console.log(incremental);

    switch (btn) {
      case "plus":
        if (order.price > 0) {
          const newPrice = oldPrice + incremental;
          updateOrder((prevOrder) => ({ ...prevOrder, price: newPrice }));
          setPriceIncrement((prevIncrement) => prevIncrement + 1);

          await modifyOrder(index, 1, newPrice);
        }
        break;

      case "minus":
        if (data[getMealIndex(order.meal)].basePrice !== order.price) {
          const newPrice = oldPrice - incremental;
          updateOrder((prevOrder) => ({ ...prevOrder, price: newPrice }));
          setPriceIncrement((prevIncrement) => prevIncrement - 1);

          await modifyOrder(index, 1, newPrice);
        }
        break;

      default:
        break;
    }
  };

  const renderData = data.map((item, index) => (
    <Picker.Item
      key={item.id || index}
      label={item.name || item}
      value={item.name || item}
      style={styles.pickerItem}
    />
  ));

  return (
    <View style={styles.cell}>
      <View style={[styles.mealCell, { marginEnd: 20, borderColor: darkPink }]}>
        <View style={styles.topLabel}>
          <Text style={[styles.topLabelText, { color: darkPink }]}>Meals</Text>
        </View>

        <Picker
          selectedValue={order.meal}
          onValueChange={(value) => handleMeal(value)}
          style={[styles.picker, { margin: 0, padding: 0 }]}
          dropdownIconColor={darkPink}
          mode="dropdown"
        >
          <Picker.Item
            label={"Select a meal"}
            value=""
            style={styles.pickerItem}
          />
          {renderData}
        </Picker>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable onPress={() => handlePrice("minus", index)}>
          <AntDesign
            name="minus"
            size={20}
            color={priceIncrement > 0 ? "black" : "rgba(0, 0, 0, .4)"} // if a meal has being selected
          />
        </Pressable>

        <View style={[styles.priceCell, { borderColor: darkPink }]}>
          <View style={[styles.topLabel, { left: 20 }]}>
            <Text style={[styles.topLabelText, { color: darkPink }]}>
              Price
            </Text>
          </View>
          <Text style={styles.mealText}>{order.price > 0 && order.price}</Text>
        </View>

        <Pressable onPress={() => handlePrice("plus", index)}>
          <AntDesign
            name="plus"
            size={20}
            color={order.price > 0 ? "black" : "rgba(0, 0, 0, .4)"} // if the price is greater than 0
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: "LatoRegular",
    fontSize: 20,
    marginTop: 15,
    color: "black",
  },
  cell: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    paddingVertical: 5,
  },
  mealCell: {
    width: 170,
    height: 45,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: "center",
  },
  topLabel: {
    position: "absolute",
    top: -9,
    left: 20,
    backgroundColor: "white",
    paddingHorizontal: 3,
  },
  topLabelText: {
    fontFamily: "LatoBold",
    fontSize: 12,
  },
  picker: {
    flex: 1,
    color: "black",
  },
  pickerItem: {
    fontFamily: "Prociono",
    fontSize: 14,
  },
  priceCell: {
    width: 80,
    height: 45,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  cellAdd: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 60,
  },
  cellBtn: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
});
