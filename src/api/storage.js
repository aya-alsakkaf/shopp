import { getItemAsync, setItemAsync, deleteItemAsync } from "expo-secure-store";

const getToken = async () => {
  try {
    return await getItemAsync("token");
  } catch (error) {
    console.error(error);
  }
};

const setToken = async (token) => {
  try {
    await setItemAsync("token", token);
  } catch (error) {
    console.error(error);
  }
};

const removeToken = async () => {
  try {
    await deleteItemAsync("token");
  } catch (error) {
    console.error(error);
  }
};

export { getToken, setToken, removeToken };
