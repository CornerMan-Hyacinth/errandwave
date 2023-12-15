import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AnimatedLottieView from "lottie-react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { saveAsyncToken } from "../helper/AsyncStorage";
import { Image } from "react-native";
import theme from "../../assets/constants/theme";

const Welcome = () => {
  const navigation = useNavigation();

  const { gradient } = theme.COLORS;

  const navigateToAuth = (arg) => {
    saveAsyncToken("auth", arg);
    navigation.navigate("Auth");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <LinearGradient
        colors={gradient}
        start={{ x: -1, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0, 1]}
        style={{ flex: 1 }}
      >
        <AnimatedLottieView
          source={require("../../assets/lotties/welcome_animation.json")}
          autoPlay
          loop
          style={styles.lottie}
        />
        <Text style={styles.welcomeText}>Welcome to ErrandWave</Text>
        <Text style={styles.welcomePara}>
          Simplify Your Life, We'll{"\n"}Handle those Errands
        </Text>

        <Pressable
          style={[styles.btn, { backgroundColor: "white" }]}
          onPress={() => navigateToAuth("register")}
        >
          <Text style={[styles.btnText, { color: "black" }]}>Get Started</Text>
        </Pressable>

        <Pressable
          style={[styles.btn, { backgroundColor: "black" }]}
          onPress={() => navigateToAuth("login")}
        >
          <Text style={[styles.btnText, { color: "white" }]}>Sign In</Text>
        </Pressable>

        <Text style={styles.continue}>Or continue with</Text>

        <View style={styles.continueFlex}>
          <Pressable>
            <Image
              source={require("../../assets/icons/google_icon.png")}
              style={[styles.icons, { marginEnd: 30 }]}
            />
          </Pressable>

          <Pressable>
            <Image
              source={require("../../assets/icons/facebook_icon.png")}
              style={styles.icons}
            />
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    marginVertical: 30,
  },
  welcomeText: {
    textAlign: "center",
    color: "#fff",
    marginTop: 30,
    fontFamily: "NewRocker",
    fontSize: 22,
  },
  welcomePara: {
    textAlign: "center",
    color: "white",
    fontFamily: "Prociono",
    fontSize: 15,
    marginTop: 10,
    opacity: 0.8,
    lineHeight: 20,
    marginBottom: 90,
  },
  btn: {
    alignSelf: "center",
    marginBottom: 20,
    width: 220,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  btnText: {
    fontFamily: "NewRocker",
    fontSize: 18,
  },
  continueFlex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  continue: {
    marginTop: 20,
    textAlign: "center",
    color: "white",
    fontFamily: "Prociono",
    fontSize: 12,
    marginBottom: 10,
  },
  icons: {
    width: 45,
    height: 45,
  },
});
