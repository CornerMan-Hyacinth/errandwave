import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../../assets/constants/theme";
import { useState } from "react";
import OrderBox from "../general/OrderBox";
import errandData from "../../helper/errandData";

const History = ({ handleOrderBtn }) => {
  const { darkPink, faded, lightFaded } = theme.COLORS;

  const [sort, setSort] = useState("all");

  const renderAll = errandData.map((item, index) => (
    <OrderBox
      key={item.id}
      status={item.status}
      category={item.category}
      index={item.id}
      rider={item.rider}
      handleOrderBtn={() => handleOrderBtn(index)}
    />
  ));

  const renderOngoing = errandData.map(
    (item, index) =>
      item.status === "Ongoing" && (
        <OrderBox
          key={item.id}
          status={item.status}
          category={item.category}
          index={item.id}
          rider={item.rider}
          handleOrderBtn={() => handleOrderBtn(index)}
        />
      )
  );

  const renderReceived = errandData.map(
    (item, index) =>
      item.status === "Received" && (
        <OrderBox
          key={item.id}
          status={item.status}
          category={item.category}
          index={item.id}
          rider={item.rider}
          handleOrderBtn={() => handleOrderBtn(index)}
        />
      )
  );

  const renderOrders = () => {
    switch (sort) {
      case "all":
        return renderAll;

      case "ongoing":
        return renderOngoing;

      case "received":
        return renderReceived;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Pressable
          style={[
            styles.sortBox,
            { backgroundColor: sort === "all" ? darkPink : lightFaded },
          ]}
          onPress={() => sort !== "all" && setSort("all")}
        >
          <Text style={[styles.sortText, sort !== "all" && { color: "black" }]}>
            All
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.sortBox,
            { backgroundColor: sort === "ongoing" ? darkPink : lightFaded },
          ]}
          onPress={() => sort !== "ongoing" && setSort("ongoing")}
        >
          <Text
            style={[styles.sortText, sort !== "ongoing" && { color: "black" }]}
          >
            Ongoing
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.sortBox,
            { backgroundColor: sort === "received" ? darkPink : lightFaded },
          ]}
          onPress={() => sort !== "received" && setSort("received")}
        >
          <Text
            style={[styles.sortText, sort !== "received" && { color: "black" }]}
          >
            Received
          </Text>
        </Pressable>
      </View>

      <ScrollView
        style={styles.orderBoxWidget}
        showsVerticalScrollIndicator={false}
      >
        {renderOrders()}
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  topNav: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    top: 0,
    left: 15,
    zIndex: 1,
  },
  sortBox: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 20,
    marginEnd: 15,
  },
  sortText: {
    fontFamily: "Prociono",
    fontSize: 14,
    color: "white",
  },
  orderBoxWidget: {
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 50,
    paddingTop: 5,
  },
});
