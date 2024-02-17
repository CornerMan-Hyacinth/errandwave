import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../../assets/constants/theme";
import { Picker } from "@react-native-picker/picker";

const Landing = ({ setTab }) => {
  const { medium } = theme.SHADOWS;
  const { darkPink, faded } = theme.COLORS;

  const [filter, setFilter] = useState("week");

  const handleFilter = (value) => {
    setFilter(value);
  };

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.cardWidget}>
          <Pressable
            style={[styles.cardLeftBox, medium]}
            onPress={() => setTab("Errands")}
          >
            <Text style={styles.leftHeadText}>Unfulfilled Orders</Text>
            <Text style={styles.protectedText}>12</Text>
          </Pressable>
          <Pressable
            style={[styles.cardRightBox, { backgroundColor: darkPink }]}
            onPress={() => setTab("Chat")}
          >
            <Text style={styles.rightNo}>0</Text>
            <Text style={styles.rightText}>new messages</Text>
          </Pressable>
        </View>

        <View style={[styles.earnBox, { backgroundColor: darkPink }]}>
          <Text style={styles.earn}>You've fulfilled 8 deliveries today</Text>

          <Pressable style={styles.earnBtn} onPress={() => setTab("Errands")}>
            <Text style={[styles.earnBtnText, { color: darkPink }]}>
              Keep Going 💪
            </Text>
          </Pressable>
        </View>

        <View style={styles.analyzeTop}>
          <View style={styles.analyzeTopLeft}>
            <Text style={styles.analyzeLabel}>Analyze</Text>
            <AntDesign name="linechart" size={20} color={darkPink} />
          </View>

          <View style={[styles.filterWrapper, { borderColor: darkPink }]}>
            <Picker
              selectedValue={filter}
              onValueChange={(data) => handleFilter(data)}
              style={[styles.filterBox]}
              dropdownIconColor={darkPink}
              mode="dropdown"
            >
              <Picker.Item
                label="This Week"
                value={"week"}
                style={styles.filterText}
              />
              <Picker.Item
                label="Last Month"
                value={"month"}
                style={styles.filterText}
              />
              <Picker.Item
                label="6 Months Ago"
                value={"half"}
                style={styles.filterText}
              />
            </Picker>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 30,
  },
  cardWidget: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 45,
  },
  cardLeftBox: {
    backgroundColor: "white",
    width: 175,
    height: 100,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  leftHeadText: {
    fontFamily: "Prociono",
    fontSize: 14,
    marginBottom: 15,
  },
  protectedText: {
    fontFamily: "LatoBold",
    fontSize: 25,
  },
  cardRightBox: {
    backgroundColor: "white",
    width: 140,
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 5,
  },
  rightNo: {
    fontFamily: "LatoRegular",
    fontSize: 25,
    color: "white",
    marginEnd: 15,
  },
  rightText: {
    width: 65,
    fontFamily: "Prociono",
    fontSize: 16,
    color: "white",
    lineHeight: 20,
  },
  referralCard: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  referAnimation: {
    position: "absolute",
    right: -5,
    width: 150,
  },
  referH1: {
    color: "white",
    fontFamily: "LatoBold",
    fontSize: 20,
    marginBottom: 10,
  },
  referH2: {
    color: "rgba(255, 255, 255, .7)",
    fontFamily: "LatoBold",
    fontSize: 15,
    marginBottom: 20,
    textAlign: "center",
  },
  referBtn: {
    height: 35,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 5,
  },
  referBtnText: {
    textAlign: "center",
    fontFamily: "Prociono",
    fontSize: 15,
    paddingHorizontal: 10,
  },
  prevFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
  },
  prevText: {
    fontFamily: "LatoRegular",
    fontSize: 16,
  },
  prevMore: {
    fontFamily: "Prociono",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  orderBoxWidget: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  catFlex: {
    marginTop: 10,
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
    marginBottom: 15,
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
  levelBox: {
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, .1)",
  },
  levelBadge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: "rgba(31, 5, 130, .7)",
    borderRadius: 10,
    marginEnd: 30,
  },
  levelBadgeText: {
    fontFamily: "LatoRegular",
    fontSize: 18,
    color: "white",
  },
  levelTask: {
    fontFamily: "Prociono",
    fontSize: 18,
  },
  earnBox: {
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 45,
  },
  earn: {
    fontFamily: "LatoRegular",
    fontSize: 18,
    color: "white",
    marginBottom: 20,
  },
  earnBtn: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 7,
    borderRadius: 10,
  },
  earnBtnText: {
    fontFamily: "Prociono",
    fontSize: 16,
  },
  filterWrapper: {
    width: 150,
    maxHeight: 35,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },
  filterBox: {
    flex: 1,
  },
  filterText: {
    fontFamily: "Prociono",
    fontSize: 12,
  },
  analyzeTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  analyzeTopLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  analyzeLabel: {
    fontFamily: "Prociono",
    fontSize: 18,
    marginEnd: 10,
  },
});
