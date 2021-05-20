import qs from "qs";

import Axios from "./axios";

let authHeaderInterceptor = null;

export const login = async (payload) => {
  const response = await Axios.post(
    "/oxygen/sessions",
    qs.stringify({
      user: payload,
    })
  );

  if (response?.data) {
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    addInterceptor(response.data.authentication_token);
  }

  return response;
};

export const checkLogin = async (phone) => {
  return Axios.post("/oxygen/sessions", qs.stringify({ user: { phone } }));
};

const addInterceptor = (token) => {
  authHeaderInterceptor = Axios.interceptors.request.use((config) => {
    return {
      ...config,
      headers: {
        "X-Auth-Token": token,
        ...config.headers,
      },
    };
  });
};

const getLocalUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

export const isLoggedIn = async () => {
  try {
    const currentUser = getLocalUser();
    if (!currentUser) {
      return false;
    }
    const { authentication_token, phone } = currentUser;
    addInterceptor(authentication_token);
    const response = await checkLogin(phone);
    if (response.data?.id) {
      return true;
    } else {
      throw new Error();
    }
  } catch (err) {
    return false;
  }
};

export const logout = async () => {
  localStorage.clear();
  if (authHeaderInterceptor) {
    Axios.interceptors.request.eject(authHeaderInterceptor);
  }
};
