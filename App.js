import "react-native-gesture-handler";
import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { RootSiblingParent } from "react-native-root-siblings";
// import { UserProvider } from "./src/context/UserProvider";
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
import Terms from "./src/screens/Terms";

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
  const [appTheme, setAppTheme] = useState("light");

  const { darkTheme, lightTheme } = theme.COLORS;

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    const getTheme = async () => {
      getThemePreference().then((storedTheme) => {
        if (storedTheme != null) {
          setAppTheme(storedTheme);
        } else {
          setThemePreference("light");
        }
      });
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
    getTheme();
    prepareSettings();
  }, []);

  const [fontsLoaded] = useFonts({
    NewRocker: require("./assets/fonts/newrocker/NewRocker-Regular.ttf"),
    Prociono: require("./assets/fonts/prociono/Prociono-Regular.ttf"),
    LatoRegular: require("./assets/fonts/lato/Lato-Regular.ttf"),
    LatoBold: require("./assets/fonts/lato/Lato-Bold.ttf"),
    LatoLight: require("./assets/fonts/lato/Lato-Light.ttf"),
    LatoThin: require("./assets/fonts/lato/Lato-Thin.ttf"),
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
    backgroundColor: appTheme === "light" ? lightTheme : darkTheme,
  };

  const barStyle = appTheme === "light" ? "dark-content" : "light-content";

  return (
    <RootSiblingParent>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar backgroundColor={"transparent"} barStyle={barStyle} />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Welcome"
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
            <Stack.Screen
              name="Terms"
              component={Terms}
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
  },
});
