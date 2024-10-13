import instance from "./index";
import { setToken } from "./storage";
const login = async (userInfo) => {
  try {
    const response = await instance.post(
      "/mini-project/api/auth/login",
      userInfo
    );
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const register = async (userInfo) => {
  try {
    const response = await instance.post(
      "/mini-project/api/auth/register",
      userInfo
    );
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { login, register };
