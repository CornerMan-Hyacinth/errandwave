import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../../assets/constants/theme";

const ChooseRole = ({ handleNext }) => {
  const { gradient } = theme.COLORS;

  const handleYes = () => {};

  const handleNo = () => {
    handleNext();
  };

  return (
    <View style={{ flex: 1 }}>
      <AnimatedLottieView
        source={require("../../../assets/lotties/rider_animation.json")}
        autoPlay
        loop
        style={styles.lottie}
      />

      <Text style={styles.subtitle}>
        Want to deliver for us and{"\n"}earn money?
      </Text>

      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 1]}
        style={styles.bottomView}
      >
        <Text style={styles.continue}>continue as a RIDER</Text>

        <View style={styles.btnWrapper}>
          <Pressable
            style={[styles.btn, { backgroundColor: "black", marginEnd: 45 }]}
            onPress={handleNo}
          >
            <Text style={[styles.btnText, { color: "white" }]}>Not for me</Text>
          </Pressable>

          <Pressable
            style={[styles.btn, { backgroundColor: "white" }]}
            onPress={handleYes}
          >
            <Text style={[styles.btnText, { color: "black" }]}>Let's go</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ChooseRole;

const styles = StyleSheet.create({
  lottie: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    marginTop: 30,
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "NewRocker",
    fontSize: 16,
    color: "black",
    opacity: 0.7,
    marginTop: 30,
  },
  bottomView: {
    flex: 1,
    marginTop: 90,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  continue: {
    color: "white",
    textAlign: "center",
    marginTop: 60,
    fontFamily: "Prociono",
    fontSize: 18,
    letterSpacing: 0.5,
  },
  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 45,
    paddingHorizontal: 25,
  },
  btn: {
    width: 120,
    paddingVertical: 15,
    borderRadius: 20,
  },
  btnText: {
    textAlign: "center",
    fontFamily: "NewRocker",
    fontSize: 18,
  },
});
