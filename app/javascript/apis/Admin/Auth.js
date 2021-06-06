import Axios from "../axios";

let authHeaderInterceptor;

export const signIn = (payload) =>
  Axios.post(`/v1/admin/sessions`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

const addInterceptor = (token) => {
  authHeaderInterceptor = Axios.interceptors.request.use(function (config) {
    return {
      ...config,
      headers: {
        "X-Auth-Token": token,
        ...config.headers,
      },
    };
  });
};

export const isLoggedIn = async () => {
  const token = localStorage.getItem("admin-auth-token");
  addInterceptor(token);
  return token;
};

export const logout = () => {
  localStorage.clear();
  if (authHeaderInterceptor) {
    Axios.interceptors.request.eject(authHeaderInterceptor);
  }
};
