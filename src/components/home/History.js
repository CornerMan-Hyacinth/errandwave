import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../../assets/constants/theme";
import { useState } from "react";
import OrderBox from "../general/OrderBox";

const History = () => {
  const { darkPink, faded, lightFaded } = theme.COLORS;

  const [sort, setSort] = useState("all");

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
            { backgroundColor: sort === "pending" ? darkPink : lightFaded },
          ]}
          onPress={() => sort !== "pending" && setSort("pending")}
        >
          <Text
            style={[styles.sortText, sort !== "pending" && { color: "black" }]}
          >
            Pending
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
            En route
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

        <Pressable
          style={[
            styles.sortBox,
            { backgroundColor: sort === "canceled" ? darkPink : lightFaded },
          ]}
          onPress={() => sort !== "canceled" && setSort("canceled")}
        >
          <Text
            style={[styles.sortText, sort !== "canceled" && { color: "black" }]}
          >
            Canceled
          </Text>
        </Pressable>
      </ScrollView>

      <View style={styles.orderBoxWidget}>
        <OrderBox status={"pending"} />
        <OrderBox status={"ongoing"} />
        <OrderBox status={"delivered"} />
        <OrderBox status={"canceled"} />
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 30,
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 45,
  },
});
