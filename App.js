import "react-native-gesture-handler";
import { StyleSheet, View, StatusBar, SafeAreaView, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import theme from "./assets/constants/theme";
import {
  getThemePreference,
  setThemePreference,
} from "./src/preferences/Theme";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { getAsyncToken, saveAsyncToken } from "./src/helper/AsyncStorage";
import Welcome from "./src/screens/Welcome";
import Auth from "./src/screens/Auth";
import Forgot from "./src/screens/Forgot";
import Home from "./src/screens/Home";
import Other from "./src/screens/Other";
import ChatRoom from "./src/screens/ChatRoom";
import Request from "./src/screens/Request";
import Payment from "./src/screens/Payment";
import HomeWaver from "./src/screens/HomeWaver";
import RequestWaver from "./src/screens/RequestWaver";
import Contact from "./src/screens/Contact";

const Stack = createStackNavigator();

const screenOptions = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            translateX: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -layouts.screen.width],
                })
              : 1,
          },
        ],
      },
    };
  },
};

export default function App() {
  const { darkPink } = theme.COLORS;

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    const prepareSettings = async () => {
      await getAsyncToken("notification").then((response) => {
        response === null && saveAsyncToken("notification", "yes");
      });

      await getAsyncToken("update").then((response) => {
        response === null && saveAsyncToken("update", "yes");
      });
    };

    prepare();
    prepareSettings();
  }, []);

  const [fontsLoaded] = useFonts({
    NewRocker: require("./assets/fonts/newrocker/NewRocker-Regular.ttf"),
    Prociono: require("./assets/fonts/prociono/Prociono-Regular.ttf"),
    LatoRegular: require("./assets/fonts/lato/Lato-Regular.ttf"),
    LatoBold: require("./assets/fonts/lato/Lato-Bold.ttf"),
    LatoLight: require("./assets/fonts/lato/Lato-Light.ttf"),
    LatoThin: require("./assets/fonts/lato/Lato-Thin.ttf"),
    Courgette: require("./assets/fonts/courgette/Courgette-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const safeAreaViewStyle = {
    backgroundColor: darkPink,
  };

  const barStyle = "light-content";

  return (
    <RootSiblingParent>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar backgroundColor={darkPink} barStyle={barStyle} />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={screenOptions}
            />
            <Stack.Screen
              name="Forgot"
              component={Forgot}
              options={screenOptions}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HomeWaver" component={HomeWaver} />
            <Stack.Screen name="Chat" component={ChatRoom} />
            <Stack.Screen name="Request" component={Request} />
            <Stack.Screen
              name="RequestWaver"
              component={RequestWaver}
              options={screenOptions}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={screenOptions}
            />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen
              name="Other"
              component={Other}
              options={screenOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
