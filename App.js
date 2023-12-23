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
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { getAsyncToken, saveAsyncToken } from "./src/helper/AsyncStorage";
import Welcome from "./src/screens/Welcome";
import Auth from "./src/screens/Auth";
import Forgot from "./src/screens/Forgot";
import Home from "./src/screens/Home";
import Other from "./src/screens/Other";
import About from "./src/components/other/About";
import Settings from "./src/components/other/Settings";
import Terms from "./src/components/other/Terms";
import SignOut from "./src/components/other/SignOut";
import { LinearGradient } from "expo-linear-gradient";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

  const { gradient, darkPink, faded, lightFaded } = theme.COLORS;

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
    backgroundColor: darkPink,
  };

  const barStyle = "light-content";

  const DrawerContent = (props) => {
    return (
      <LinearGradient colors={gradient} style={{ flex: 1 }}>
        {/* Your drawer content here */}
        {props.children}
        <Text>Hello</Text>
      </LinearGradient>
    );
  };

  const HomeDrawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            // backgroundColor: "transparent",
            headerShown: false,
            drawerActiveTintColor: darkPink,
            drawerInactiveTintColor: "black",
            drawerActiveBackgroundColor: lightFaded,
            drawerLabelStyle: {
              fontSize: 16,
              fontFamily: "Prociono",
            },
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "ios-home" : "ios-home-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name={
                  focused ? "information-circle" : "information-circle-outline"
                }
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "ios-settings" : "ios-settings-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Terms"
          component={Terms}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "book" : "book-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={SignOut}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "log-out" : "log-out-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <RootSiblingParent>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar backgroundColor={darkPink} barStyle={barStyle} />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeDrawer"
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
            <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
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
  },
});
