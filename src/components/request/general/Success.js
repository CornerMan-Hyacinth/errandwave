import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../../../assets/constants/theme";
import AnimatedLottieView from "lottie-react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Success = () => {
  const navigation = useNavigation();
  const { gradient } = theme.COLORS;

  const handleOk = () => {
    navigation.navigate("HomeDrawer");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <LinearGradient
        colors={gradient}
        start={{ x: -1, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0, 1]}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <AnimatedLottieView
          source={require("../../../../assets/lotties/success_animation.json")}
          autoPlay
          loop={false}
          style={styles.lottie}
        />

        <Text style={styles.yay}>Thank you for using{"\n"}ErrandWave</Text>
        <Text style={styles.success}>Your request has been{"\n"}processed</Text>

        <Pressable style={styles.btn} onPress={handleOk}>
          <Text style={styles.btnText}>Continue</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  lottie: {
    height: 300,
  },
  yay: {
    fontFamily: "NewRocker",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  success: {
    fontFamily: "Prociono",
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginTop: 30,
    opacity: 0.8,
  },
  btn: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginTop: 75,
    borderRadius: 30,
  },
  btnText: {
    fontFamily: "NewRocker",
    fontSize: 18,
    color: "white",
  },
});
