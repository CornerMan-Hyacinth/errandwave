import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveAsyncToken = async (key, token) => {
  try {
    await AsyncStorage.setItem(key, token);
    console.log(key, "saved successfully.");
    return true;
  } catch (error) {
    console.log(`Failed to save ${key} token ${error}`);
    return false;
  }
};

export const getAsyncToken = async (key) => {
  try {
    const token = await AsyncStorage.getItem(key);
    console.log("Token retrieved successfully: ", token);
    return token;
  } catch (error) {
    console.log(`Failed to retrieve ${key}: ${error}`);
    return null;
  }
};

export const removeAsyncToken = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Successfully removed token ", key);
    return true;
  } catch (error) {
    console.log(`Failed to remove token ${key}: ${error}`);
    return false;
  }
};

export const removeAllAsyncTokens = async () => {
  try {
    await AsyncStorage.clear();
    console.log("Successfully cleared Async storage");
    return true;
  } catch (error) {
    console.log("Failed to clear Async storage: ", error);
    return false;
  }
};
