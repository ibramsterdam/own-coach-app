import * as SecureStore from "expo-secure-store";

export const saveValue = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
  console.log("Stored key: ", key);
};

export const removeValue = async (key: string) => {
  await SecureStore.deleteItemAsync(key);
  console.log("Removed key: ", key);
};

export const getValue = async (key: string) => {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    console.log("🔐 Here's your value 🔐 \n" + result);
    return result;
  }
  console.log("No values stored under that key.");
  return "Bearer <No Token>";
};
