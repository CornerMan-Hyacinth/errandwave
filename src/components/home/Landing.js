import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import theme from "../../../assets/constants/theme";
import OrderBox from "../general/OrderBox";
import AnimatedLottieView from "lottie-react-native";
import { saveAsyncToken } from "../../helper/AsyncStorage";
import { useNavigation } from "@react-navigation/native";
import errandData from "../../helper/errandData";

const Landing = ({ setTab, handleOrderBtn }) => {
  const navigation = useNavigation();

  const { medium } = theme.SHADOWS;
  const { darkPink, faded } = theme.COLORS;
  const threeErrands = errandData.slice(0, 3);

  const [balanceShown, setBalanceShown] = useState(false);

  const handleRequest = async (category) => {
    await saveAsyncToken("request", category);
    navigation.navigate("Request");
  };

  const goToWallet = async () => {
    await saveAsyncToken("other", "wallet");
    navigation.navigate("Other");
  };

  const handleReferBtn = async () => {
    await saveAsyncToken("other", "referral");
    navigation.navigate("Other");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.cardWidget}>
        <Pressable style={[styles.cardLeftBox, medium]} onPress={goToWallet}>
          <View style={styles.leftHead}>
            <Text style={styles.leftHeadText}>Your Balance</Text>
            <Pressable onPress={() => setBalanceShown(!balanceShown)}>
              <FontAwesome5
                name={balanceShown ? "eye" : "eye-slash"}
                size={15}
                color="black"
              />
            </Pressable>
          </View>
          <Text style={styles.protectedText}>
            {balanceShown ? <Text>&#8358; 7000</Text> : <Text>*****</Text>}
          </Text>
        </Pressable>
        <Pressable
          style={[styles.cardRightBox, { backgroundColor: darkPink }]}
          onPress={setTab}
        >
          <Text style={styles.rightNo}>0</Text>
          <Text style={styles.rightText}>orders{"\n"}requested</Text>
        </Pressable>
      </View>

      <View style={[styles.referralCard, { backgroundColor: darkPink }]}>
        <View style={{ alignItems: "center", width: "60%" }}>
          <Text style={styles.referH1}>Refer a friend</Text>
          <Text style={styles.referH2}>& earn up to 15000{"\n"}monthly</Text>
          <Pressable style={styles.referBtn} onPress={handleReferBtn}>
            <Text style={[styles.referBtnText, { color: darkPink }]}>
              Learn how
            </Text>
          </Pressable>
        </View>
        <AnimatedLottieView
          source={require("../../../assets/lotties/referral_animation.json")}
          loop
          autoPlay
          style={styles.referAnimation}
        />
      </View>

      <Text style={[styles.prevText, { marginTop: 45 }]}>Categories</Text>

      <View style={styles.catFlex}>
        <Pressable
          style={styles.catBox}
          onPress={() => handleRequest("shopping")}
        >
          <Entypo name="shopping-bag" size={20} color="white" />
          <Text style={styles.catText}>Shopping</Text>
        </Pressable>
        <Pressable style={styles.catBox} onPress={() => handleRequest("meal")}>
          <Image
            source={require("../../../assets/icons/icon_meal.png")}
            style={styles.catImage}
          />
          <Text style={styles.catText}>Meals</Text>
        </Pressable>
        <Pressable
          style={styles.catBox}
          onPress={() => handleRequest("laundry")}
        >
          <Image
            source={require("../../../assets/icons/icon_laundry.png")}
            style={styles.catImage}
          />
          <Text style={styles.catText}>Laundry</Text>
        </Pressable>
        <Pressable
          style={styles.catBox}
          onPress={() => handleRequest("parcel")}
        >
          <Image
            source={require("../../../assets/icons/icon_parcel.png")}
            style={styles.catImage}
          />
          <Text style={styles.catText}>Parcel</Text>
        </Pressable>
      </View>

      <View style={styles.prevFlex}>
        <Text style={styles.prevText}>Requests</Text>
        <Pressable>
          <Text style={[styles.prevMore, { color: faded }]}>show all</Text>
        </Pressable>
      </View>

      <View style={styles.orderBoxWidget}>
        {threeErrands.map((item, index) => (
          <OrderBox
            key={item.id}
            status={item.status}
            category={item.category}
            index={item.id}
            rider={item.rider}
            handleOrderBtn={() => handleOrderBtn(index)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 15,
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
  },
  leftHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  leftHeadText: {
    fontFamily: "Prociono",
    fontSize: 16,
  },
  protectedText: {
    fontFamily: "LatoBold",
    fontSize: 20,
  },
  cardRightBox: {
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
    width: 70,
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
    width: "80%",
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 10,
  },
  referBtnText: {
    textAlign: "center",
    fontFamily: "Prociono",
    fontSize: 15,
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
});
