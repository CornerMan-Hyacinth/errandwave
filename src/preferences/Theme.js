import AsyncStorage from "@react-native-async-storage/async-storage";

export const setThemePreference = async (theme) => {
  try {
    await AsyncStorage.setItem("theme", theme);
  } catch (error) {
    console.log(`Error setting theme color: ${error}`);
  }
};

export const getThemePreference = async () => {
  try {
    const theme = await AsyncStorage.getItem("theme");
    if (theme !== null) {
      return theme;
    }
    return null;
  } catch (error) {
    console.log(`Error getting theme color: ${error}`);
  }
};
