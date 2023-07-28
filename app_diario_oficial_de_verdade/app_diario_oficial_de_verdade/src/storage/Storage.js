import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getLocalData(dataName) {
  try {
    const storedData = await AsyncStorage.getItem(dataName);
    if (storedData !== null) {
      return JSON.parse(storedData);
    }
  } catch (error) {
    console.log(e);
  }
}

export async function changeLocalData(dataName, object) {
  try {
    const jsonValue = JSON.stringify(object);
    await AsyncStorage.setItem(dataName, jsonValue);
  } catch (e) {
    console.log(e);
  }
}

export async function deleteLocalData(dataName) {
  try {
    await AsyncStorage.removeItem(dataName);
  } catch (e) {
    console.log(e);
  }
}
