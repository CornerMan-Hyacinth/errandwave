import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import BottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import theme from "../../../../assets/constants/theme";
import Delivery from "../general/Delivery";
import Confirm from "../general/Confirm";
import Order from "./Order";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";

const MainMeal = ({ handleCat }) => {
  const navigation = useNavigation();
  const { darkPink, lightFaded, gradient } = theme.COLORS;

  const sheetRef = useRef(null);

  const [step, setStep] = useState(1);
  const [requestEntry, updateRequestEntry] = useState({
    meal: [],
    totalPrice: "",
    deliveryLocation: "",
  });
  const [isToastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000); // Hide toast after 2 seconds
  };

  const handleRequestEntry = (field, value) => {
    updateRequestEntry((prevEntry) => ({ ...prevEntry, [field]: value }));
    console.log(`${field}: ${value}`);
  };

  const handleNext = () => {
    if (step === 2) {
      if (requestEntry.meal.length === 0) {
        showToast();
      } else {
        sheetRef.current.open();
      }
    } else if (step === 1 && requestEntry.eatery === "") {
      showToast();
    } else if (step === 4) {
      // navigate to payment
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () =>
    step === 1 ? handleCat() : setStep((prevStep) => prevStep - 1);

  const handleConfirmOrder = () => {
    sheetRef.current.close();
    setTimeout(() => {
      setStep((prevStep) => prevStep + 1);
    }, 500);
  };

  // this function sets the meal orders to the useState
  const handleAllOrders = (allOrders) => {
    updateRequestEntry((prevEntry) => ({ ...prevEntry, meal: allOrders }));
    console(allOrders);
  };

  // displays a component based on the step the user is currently in
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Order
            isToastVisible={isToastVisible}
            updateAllOrders={handleAllOrders}
          />
        );

      case 2:
        return (
          <Delivery
            locationValue={requestEntry.delivery}
            updateLocation={handleRequestEntry}
          />
        );
      case 3:
        return <Confirm />;
      default:
        break;
    }
  };

  const renderMealItems = requestEntry.meal.map((item, index) => (
    <OrderItem key={index} item={item[0]} price={item[1]} />
  ));

  return (
    <View style={[styles.container, step < 6 && { paddingHorizontal: 15 }]}>
      {step < 6 && (
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Request an errand</Text>
        </View>
      )}

      {renderStep()}

      {step < 6 && (
        <View style={styles.btnWidget}>
          <Pressable
            style={[
              styles.btn,
              {
                left: 0,
                borderTopStartRadius: 20,
                borderBottomStartRadius: 20,
              },
            ]}
            onPress={handleBack}
          >
            <MaterialIcons name="navigate-before" size={24} color="white" />
            <Text style={styles.btnText}>Back</Text>
          </Pressable>

          <Pressable
            style={[
              styles.btn,
              {
                right: 0,
                borderTopEndRadius: 20,
                borderBottomEndRadius: 20,
                backgroundColor: darkPink,
              },
            ]}
            onPress={handleNext}
          >
            <Text style={styles.btnText}>{step === 4 ? "Finish" : "Next"}</Text>
            {step !== 4 && (
              <MaterialIcons name="navigate-next" size={24} color="white" />
            )}
          </Pressable>
        </View>
      )}

      <BottomSheet
        ref={sheetRef}
        animationType="spring"
        dragHandleStyle={{ backgroundColor: darkPink }}
        height={400}
        hideDragHandle
      >
        <View style={[styles.bottomSheet]}>
          <LinearGradient
            colors={gradient}
            start={{ x: -1, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0, 1]}
            style={styles.sheetContainer}
          >
            <Text style={styles.sheetTitle}>Confirm your order</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              {renderMealItems}
            </ScrollView>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Text style={styles.totalText}>Total -</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../../../assets/icons/naira_icon.png")}
                  style={styles.itemIcon}
                />
                <Text style={styles.itemPrice}>400</Text>
              </View>
            </View>

            <Pressable style={styles.confirmBtn} onPress={handleConfirmOrder}>
              <Text style={[styles.confirmText, { color: darkPink }]}>
                Confirm
              </Text>
            </Pressable>
          </LinearGradient>
        </View>
      </BottomSheet>
    </View>
  );
};

const OrderItem = ({ item, price }) => {
  return (
    <View style={styles.itemList}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text numberOfLines={1} style={styles.itemName}>
          {item}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../../../assets/icons/naira_icon.png")}
            style={styles.itemIcon}
          />
          <Text style={styles.itemPrice}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

export default MainMeal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  headerText: {
    fontFamily: "Prociono",
    fontSize: 16,
    marginStart: 15,
  },
  btnWidget: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    position: "absolute",
    bottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 105,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, .8)",
  },
  btnText: {
    color: "white",
    fontFamily: "LatoRegular",
    fontSize: 18,
  },
  bottomSheet: {
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, .7)",
  },
  sheetContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  sheetTitle: {
    fontFamily: "Prociono",
    fontSize: 18,
    marginBottom: 30,
    color: "white",
  },
  itemList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  itemName: {
    width: 100,
    color: "white",
    marginEnd: 20,
    fontFamily: "LatoRegular",
    fontSize: 16,
  },
  itemIcon: {
    tintColor: "white",
  },
  itemPrice: {
    color: "white",
    fontFamily: "LatoRegular",
    fontSize: 16,
    marginStart: 3,
  },
  totalText: {
    fontFamily: "Prociono",
    fontSize: 16,
    color: "white",
    marginEnd: 5,
  },
  confirmBtn: {
    backgroundColor: "white",
    width: "70%",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 20,
    paddingVertical: 10,
  },
  confirmText: {
    fontFamily: "Prociono",
    fontSize: 16,
  },
});
