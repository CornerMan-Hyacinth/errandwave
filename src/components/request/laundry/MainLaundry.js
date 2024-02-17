import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import theme from "../../../../assets/constants/theme";
import Delivery from "../general/Delivery";
import Confirm from "../general/Confirm";
import Services from "./Services";
import Meetup from "./Meetup";

const MainLaundry = ({ handleCat }) => {
  const navigation = useNavigation();
  const { darkPink } = theme.COLORS;
  const [step, setStep] = useState(1);
  const [requestEntry, updateRequestEntry] = useState({
    meetupLocation: "",
    services: [],
    deliveryLocation: "",
  });

  const handleRequestEntry = (field, value) => {
    updateRequestEntry((prevEntry) => ({ ...prevEntry, [field]: value }));
    console.log(`${field}: ${value}`);
  };

  const handleNext = () => {
    if (step >= 1 && step < 6) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () =>
    step === 1 ? handleCat() : setStep((prevStep) => prevStep - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Services />;

      case 2:
        return <Meetup />;

      case 3:
        return (
          <Delivery
            locationValue={requestEntry.delivery}
            updateLocation={handleRequestEntry}
          />
        );
      case 4:
        return <Confirm />;
      default:
        break;
    }
  };

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
            <Text style={styles.btnText}>{step === 5 ? "Finish" : "Next"}</Text>
            {step !== 5 && (
              <MaterialIcons name="navigate-next" size={24} color="white" />
            )}
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default MainLaundry;

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
});
