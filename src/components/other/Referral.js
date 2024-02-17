import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import theme from "../../../assets/constants/theme";
import { Picker } from "@react-native-picker/picker";
import * as Clipboard from "expo-clipboard";
import BottomSheet from "@devvie/bottom-sheet";

const { darkPink } = theme.COLORS;
const { medium } = theme.SHADOWS;

const Referral = () => {
  const navigation = useNavigation();

  const sheetRef = useRef(null);

  const [referralCode, setReferralCode] = useState("RE26KUI-8490S");
  const [filter, setFilter] = useState("monthly");

  const handleFilter = (value) => {
    setFilter(value);
  };

  const copyCode = async () => await Clipboard.setStringAsync(referralCode);

  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.header, { backgroundColor: darkPink }]}>
        <Pressable
          style={{ marginVertical: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={25} color="white" />
        </Pressable>

        <View style={styles.rowFlex}>
          <View style={styles.leftContent}>
            <Text style={styles.referText}>Refer and Earn</Text>
            <Text style={styles.referPrice}>up to 50000 NGN{"\n"}monthly</Text>
            <Text style={styles.referDesc}>
              Receive commissions from your downlines' purchases
            </Text>

            <Pressable
              style={styles.referBtn}
              onPress={() => sheetRef.current.open()}
            >
              <Text style={[styles.referBtnText, { color: darkPink }]}>
                Learn how
              </Text>
            </Pressable>
          </View>
          <Image
            source={require("../../../assets/images/referral_image.png")}
            style={styles.referImg}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.tailContent}
      >
        <View style={[styles.rowFlex, { paddingHorizontal: 15 }]}>
          <View style={[styles.topCard, { backgroundColor: darkPink }]}>
            <Text style={styles.cardTitle}>Total Earnings</Text>
            <Text style={styles.cardValue}>&#8358;12000</Text>
          </View>

          <View style={[styles.topCard, medium]}>
            <Text style={[styles.cardTitle, { color: darkPink }]}>
              Downlines
            </Text>
            <Text style={[styles.cardValue, { color: darkPink }]}>120</Text>
          </View>
        </View>

        <View style={[styles.rowFlex, styles.referFlex]}>
          <Text style={[styles.referCode, { color: darkPink }]}>
            {referralCode}
          </Text>
          <Pressable
            style={[styles.referCodeBtn, { backgroundColor: darkPink }]}
            onPress={copyCode}
          >
            <Text style={styles.referCodeBtnText}>Tap to copy</Text>
          </Pressable>
        </View>

        <View
          style={[styles.rowFlex, { paddingHorizontal: 15, marginBottom: 30 }]}
        >
          <View style={[styles.rowSubFlex]}>
            <Text style={styles.analyzeLabel}>Analyze</Text>
            <MaterialIcons name="auto-graph" size={24} color={darkPink} />
          </View>

          <View style={[styles.filterWrapper, { borderColor: darkPink }]}>
            <Picker
              selectedValue={filter}
              onValueChange={(data) => handleFilter(data)}
              style={[styles.filterBox]}
              dropdownIconColor={darkPink}
              // mode="dropdown"
            >
              <Picker.Item
                label="Last Month"
                value={"monthly"}
                style={styles.filterText}
              />
              <Picker.Item
                label="All"
                value={"all"}
                style={styles.filterText}
              />
            </Picker>
          </View>
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          <AnalyzeCell
            name={"Daniel Ferguson"}
            filter={filter}
            monthly={1500}
            total={17000}
          />

          <AnalyzeCell
            name={"Tony Elumelu"}
            filter={filter}
            monthly={1500}
            total={17000}
          />
        </View>
      </ScrollView>

      <BottomSheet
        ref={sheetRef}
        animationType="spring"
        dragHandleStyle={{ backgroundColor: darkPink }}
        height={400}
      >
        <View style={styles.sheetContainer}>
          <Text style={styles.sheetTitle}>
            <Text>Steps to earn with</Text>
            <Text style={{ color: darkPink }}> ErrandWave</Text>
          </Text>

          <View style={{ height: "55%" }}>
            <View style={[styles.rowSubFlex, { marginBottom: 15 }]}>
              <View
                style={[styles.bulletPoint, { backgroundColor: "black" }]}
              />
              <Text style={styles.bulletText}>
                Share your referral code with your friends.
              </Text>
            </View>

            <View style={[styles.rowSubFlex, { marginBottom: 15 }]}>
              <View
                style={[styles.bulletPoint, { backgroundColor: "black" }]}
              />
              <Text style={styles.bulletText}>
                Your friends become your downlines upon registration with your
                code.
              </Text>
            </View>

            <View style={[styles.rowSubFlex, { marginBottom: 15 }]}>
              <View
                style={[styles.bulletPoint, { backgroundColor: "black" }]}
              />
              <Text style={styles.bulletText}>
                <Text>
                  You earn a commission on every errand your downlines book,{" "}
                </Text>
                <Text style={{ color: darkPink }}>FOR LIFE</Text>
              </Text>
            </View>
          </View>

          <Pressable
            style={[styles.sheetBtn, { backgroundColor: darkPink }]}
            onPress={() => sheetRef.current.close()}
          >
            <Text style={styles.sheetBtnText}>Let's go! 💰</Text>
          </Pressable>
        </View>
      </BottomSheet>
    </View>
  );
};

const AnalyzeCell = ({ image, name, filter, monthly, total }) => {
  return (
    <View style={[styles.rowFlex, { marginBottom: 15 }]}>
      <View style={styles.rowSubFlex}>
        <View style={styles.analyzeImage} />
        <Text style={styles.analyzeName}>{name}</Text>
      </View>

      <View
        style={[
          styles.rowSubFlex,
          styles.analyzePriceBox,
          { backgroundColor: darkPink },
        ]}
      >
        <Image
          source={require("../../../assets/icons/naira_icon.png")}
          style={styles.analyzeNaira}
        />
        <Text style={styles.analyzePriceText}>
          {filter === "monthly" ? monthly : total}
        </Text>
      </View>
    </View>
  );
};

export default Referral;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
  },
  rowFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowSubFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftContent: {
    width: "50%",
  },
  referText: {
    fontFamily: "LatoRegular",
    fontSize: 18,
    color: "rgba(255, 255, 255, .7)",
    marginBottom: 7,
  },
  referPrice: {
    fontFamily: "LatoBold",
    fontSize: 20,
    color: "white",
    marginBottom: 15,
  },
  referDesc: {
    fontFamily: "Prociono",
    fontSize: 14,
    color: "rgba(255, 255, 255, .7)",
    marginBottom: 30,
  },
  referBtn: {
    backgroundColor: "white",
    width: "70%",
    marginBottom: 30,
    borderRadius: 10,
  },
  referBtnText: {
    textAlign: "center",
    paddingVertical: 10,
    fontFamily: "LatoRegular",
    fontSize: 16,
  },
  tailContent: {
    paddingTop: 30,
  },
  topCard: {
    width: 150,
    height: 100,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 45,
  },
  cardTitle: {
    fontFamily: "Prociono",
    fontSize: 16,
    color: "white",
    opacity: 0.8,
    marginBottom: 15,
  },
  cardValue: {
    textAlign: "center",
    fontFamily: "LatoRegular",
    fontSize: 22,
    color: "white",
  },
  referFlex: {
    backgroundColor: "rgba(0, 0, 0, .2)",
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
    marginBottom: 45,
  },
  referCode: {
    fontFamily: "LatoRegular",
    fontSize: 18,
  },
  referCodeBtn: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 20,
  },
  referCodeBtnText: {
    color: "white",
    fontFamily: "Prociono",
    fontSize: 12,
  },
  analyzeLabel: {
    fontFamily: "Prociono",
    fontSize: 18,
    marginEnd: 5,
  },
  analyzeImage: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, .3)",
  },
  analyzeName: {
    fontFamily: "LatoRegular",
    fontSize: 16,
    marginStart: 15,
  },
  analyzePriceBox: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 10,
  },
  analyzeNaira: {
    tintColor: "white",
    width: 15,
    height: 15,
  },
  analyzePriceText: {
    fontFamily: "LatoRegular",
    fontSize: 12,
    color: "white",
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
  sheetContainer: {
    height: "100%",
    marginTop: 15,
    paddingHorizontal: 15,
  },
  sheetTitle: {
    fontFamily: "Prociono",
    fontSize: 18,
    marginBottom: 30,
  },
  bulletPoint: {
    width: 5,
    height: 5,
    borderRadius: 10,
    marginEnd: 10,
  },
  bulletText: {
    fontFamily: "LatoRegular",
    fontSize: 16,
  },
  sheetBtn: {
    alignSelf: "center",
    width: "80%",
    paddingVertical: 10,
    borderRadius: 10,
  },
  sheetBtnText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Prociono",
    fontSize: 18,
  },
});
