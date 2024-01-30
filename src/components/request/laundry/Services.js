import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import theme from "../../../../assets/constants/theme";
import { Feather } from "@expo/vector-icons";

const DATA = ["Dry cleaning", "Washing", "Ironing", "Washing & Ironing"];
const { darkPink, lightFaded } = theme.COLORS;

const Services = () => {
  const [services, updateServices] = useState({
    service: "",
    clothes: [
      {
        type: "",
        quantity: 0,
        price: 0,
      },
    ],
    serviceTotalPrice: 0,
  });

  const [selected, setSelected] = useState("");

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>
        Select preferred services for your laundry
      </Text>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Service
            title={item}
            selected={selected}
            setSelected={handleSelect}
          />
        )}
        keyExtractor={(_, index) => index}
        horizontal
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

const Service = ({ title, selected, setSelected }) => {
  const [complete, setComplete] = useState(false);

  const handleSelect = () => {
    setSelected(title);
    setComplete(true);
  };

  return (
    <Pressable
      style={[
        styles.cell,
        selected !== title
          ? { backgroundColor: lightFaded }
          : { backgroundColor: darkPink },
      ]}
      onPress={handleSelect}
    >
      <Text style={[styles.cellText, selected === title && { color: "white" }]}>
        {title}
      </Text>
      {complete && (
        <View style={styles.checkBox}>
          <Feather name="check" size={12} color="#011EB6" />
        </View>
      )}
    </Pressable>
  );
};

export default Services;

const styles = StyleSheet.create({
  title: {
    width: "70%",
    fontFamily: "LatoRegular",
    fontSize: 20,
    marginTop: 15,
    color: "black",
  },
  flatList: {
    maxHeight: 50,
    marginTop: 30,
  },
  cell: {
    flexDirection: "row",
    minWidth: 120,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginEnd: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  cellText: {
    fontFamily: "LatoRegular",
    fontSize: 16,
  },
  checkBox: {
    padding: 5,
    backgroundColor: "white",
    borderRadius: 10,
    marginStart: 10,
  },
});
