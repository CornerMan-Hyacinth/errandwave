import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import theme from "../../assets/constants/theme";
import { getAsyncToken } from "../helper/AsyncStorage";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const Auth = () => {
  const { darkPink } = theme.COLORS;

  const [isLogin, setLogin] = useState();

  useEffect(() => {
    getAsyncToken("auth").then((response) =>
      response === "login" ? setLogin(true) : setLogin(false)
    );
  }, []);

  const backgroundColor = useRef(new Animated.Value(0)).current;

  const animateBackgroundColor = () => {
    Animated.timing(backgroundColor, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoFlex}>
        <Image
          source={require("../../assets/images/errandwave_logo.png")}
          style={styles.logoIcon}
        />
        <Text style={[styles.logoText, { color: darkPink }]}>ErrandWave</Text>
      </View>

      <View style={styles.navFlex}>
        <Pressable
          style={[
            styles.navBox,
            !isLogin && {
              backgroundColor: darkPink,
              borderTopEndRadius: 20,
              borderBottomEndRadius: 20,
            },
          ]}
          onPress={() => isLogin && setLogin(false)}
        >
          <Text style={[styles.navText, !isLogin && { color: "white" }]}>
            Sign Up
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.navBox,
            isLogin && {
              backgroundColor: darkPink,
              borderTopStartRadius: 20,
              borderBottomStartRadius: 20,
            },
          ]}
          onPress={() => !isLogin && setLogin(true)}
        >
          <Text style={[styles.navText, isLogin && { color: "white" }]}>
            Sign In
          </Text>
        </Pressable>
      </View>

      {isLogin ? <LoginForm /> : <RegisterForm />}
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logoFlex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  logoIcon: {
    width: 40,
    height: 40,
  },
  logoText: {
    fontFamily: "NewRocker",
    fontSize: 25,
    marginStart: 7,
  },
  navFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 45,
  },
  navBox: {
    width: "50%",
    alignItems: "center",
    paddingVertical: 15,
  },
  navText: {
    fontFamily: "Prociono",
    fontSize: 16,
  },
});
