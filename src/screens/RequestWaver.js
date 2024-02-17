import {
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../assets/constants/theme";
import BottomSheet from "@devvie/bottom-sheet";
import { getAsyncToken, saveAsyncToken } from "../helper/AsyncStorage";
import { useNavigation } from "@react-navigation/native";

const { darkPink, lightFaded } = theme.COLORS;
const { medium } = theme.SHADOWS;

const RequestWaver = () => {
  const navigation = useNavigation();
  const sheetRef = useRef(null);

  const [errand, setErrand] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [step, setStep] = useState("confirm");
  const [confirmCode, updateConfirmCode] = useState("");
  const [category, setCategory] = useState("");

  const code = "EURI_76DSID";

  const btnText = () => {
    const label = errand.category === "Shopping" ? "Items" : errand.category;

    switch (step) {
      case "confirm":
        return `Confirm ${label}`;

      case "deliver":
        return `Deliver ${label}`;

      default:
        break;
    }
  };

  const modalText = () => {
    switch (errand.category) {
      case "Shopping":
        return "items";

      case "Meal":
        return "meal";

      case "Laundry":
        return "laundry";

      case "Parcel":
        return "parcel";

      default:
        break;
    }
  };

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

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  const handleBtn = () =>
    step === "confirm" ? setModalVisible(true) : sheetRef.current.open();

  const handleModalBtn = () => {
    setStep("deliver");
    setModalVisible(false);
  };

  const handleSheetBtn = () => {
    if (confirmCode === code) {
      sheetRef.current.close();
    }
  };

  const handleCall = async () => {
    await saveAsyncToken("contact", "call");
    navigation.navigate("Contact");
  };

  const handleChat = async () => {
    await saveAsyncToken("contact", "dm");
    navigation.navigate("Contact");
  };

  useEffect(() => {
    const retrieveErrand = async () => {
      const storedErrand = await getAsyncToken("errand");
      storedErrand !== null && setErrand(JSON.parse(storedErrand));
    };

    retrieveErrand();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <Pressable style={styles.backBtn} onPress={handleNavigateBack}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </Pressable>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.waverInfo}>
          <Image
            source={require("../../assets/icons/propic.jpg")}
            style={[styles.waverPic, { borderColor: darkPink }]}
          />
          <Text style={styles.waverName}>{errand.name}</Text>
          <Text style={styles.waverLocation}>{errand.location}</Text>
          <View style={styles.waverContact}>
            <Pressable
              style={[styles.waverContactBox, { backgroundColor: darkPink }]}
              onPress={handleCall}
            >
              <Ionicons name="call" size={14} color="white" />
              <Text style={styles.waverContactText}>Call</Text>
            </Pressable>
            <Pressable
              style={[styles.waverContactBox, { backgroundColor: darkPink }]}
              onPress={handleChat}
            >
              <Ionicons name="chatbubble-ellipses" size={14} color="white" />
              <Text style={styles.waverContactText}>Chat</Text>
            </Pressable>
          </View>
        </View>

        <Text style={[styles.label, { marginTop: 45, color: darkPink }]}>
          {errand.category}
        </Text>

        <View style={styles.cellWidget}>
          <FlatList
            data={errand.errandItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>

      <Pressable
        style={[styles.downBtn, { backgroundColor: darkPink }]}
        onPress={handleBtn}
      >
        <Text style={styles.downBtnText}>{btnText()}</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent
        statusBarTranslucent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        style={{ justifyContent: "center" }}
      >
        <Pressable
          style={styles.modalGray}
          onPress={() => setModalVisible(false)}
        >
          <Pressable style={[styles.modalContainer, medium]}>
            <Text style={styles.note}>
              Have you received and confirmed the {modalText()}?
            </Text>

            <View style={styles.modalBtnWidget}>
              <Pressable
                style={styles.modalBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalBtnText}>Nope, not yet</Text>
              </Pressable>

              <Pressable
                style={[styles.modalBtn, { backgroundColor: darkPink }]}
                onPress={handleModalBtn}
              >
                <Text style={styles.modalBtnText}>Yeah, proceed</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>

      <BottomSheet
        ref={sheetRef}
        animationType="spring"
        dragHandleStyle={{ backgroundColor: darkPink }}
        height={250}
      >
        <View style={{ paddingHorizontal: 15 }}>
          <Text style={styles.sheetTitle}>Enter confirmation code</Text>
          <TextInput
            value={confirmCode}
            onChangeText={(text) => updateConfirmCode(text)}
            selectionColor={darkPink}
            style={[styles.sheetInput, { borderColor: darkPink }]}
          />

          <Pressable
            style={[styles.sheetBtn, { backgroundColor: darkPink }]}
            onPress={handleSheetBtn}
          >
            <Text style={styles.sheetBtnText}>Finish</Text>
          </Pressable>
        </View>
      </BottomSheet>
    </View>
  );
};

const ItemCell = ({ itemImage, itemName, quantity, price }) => {
  return (
    <View style={styles.cellContainer}>
      <Image
        source={require("../../assets/images/snack1.jpg")}
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
        { backgroundColor: lightFaded, borderColor: darkPink },
      ]}
    >
      <Text style={styles.cellText}>{category}</Text>
      <Text style={[styles.cellText, styles.cellPrice]}>{number} outfits</Text>
    </View>
  );
};

export default RequestWaver;

const styles = StyleSheet.create({
  backBtn: {
    position: "absolute",
    top: 20,
    left: 15,
    zIndex: 1,
  },
  waverInfo: {
    alignItems: "center",
    marginTop: 80,
  },
  waverPic: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  waverName: {
    fontFamily: "LatoRegular",
    fontSize: 20,
  },
  waverLocation: {
    fontFamily: "LatoRegular",
    fontSize: 16,
    opacity: 0.5,
    marginTop: 7,
  },
  waverContact: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  waverContactBox: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  waverContactText: {
    color: "white",
    fontFamily: "LatoRegular",
    fontSize: 16,
    marginStart: 7,
  },
  label: {
    fontFamily: "Prociono",
    fontSize: 18,
    paddingHorizontal: 15,
  },
  rowSubFlex: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  downBtn: {
    alignSelf: "center",
    width: "60%",
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
  downBtnText: {
    textAlign: "center",
    color: "white",
    fontFamily: "Prociono",
    fontSize: 16,
  },
  cellWidget: {
    paddingStart: 15,
    marginTop: 30,
    marginBottom: 45,
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
  modalGray: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 10,
    alignSelf: "center",
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  note: {
    fontFamily: "Prociono",
    fontSize: 18,
    marginBottom: 45,
  },
  modalBtnWidget: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalBtn: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  modalBtnText: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    color: "white",
  },
  sheetTitle: {
    fontFamily: "Prociono",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 30,
  },
  sheetInput: {
    width: "100%",
    height: 40,
    paddingHorizontal: 15,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 45,
  },
  sheetBtn: {
    alignSelf: "center",
    width: 200,
    paddingVertical: 10,
    borderRadius: 10,
  },
  sheetBtnText: {
    fontFamily: "LatoRegular",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
