import Axios from "../axios";
import qs from "qs";

const URL = `/oxygen/admin/station`;

export const getStation = async () => {
  const response = await Axios.get(URL);
  return response.data;
};

export const createStation = async (data) => {
  const response = await Axios.post(
    URL,
    qs.stringify(data, { encodeValuesOnly: true }),
    {
      /**
       * @TODO fix interceptor
       */
      headers: {
        "X-Auth-Token": localStorage.getItem("admin-auth-token"),
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }
  );
  return response.data;
};

export const updateStation = async (id, data) => {
  const response = await Axios.put(
    `${URL}/${id}`,
    qs.stringify(data, { encodeValuesOnly: true }),
    {
      /**
       * @TODO fix interceptor
       */
      headers: {
        "X-Auth-Token": localStorage.getItem("admin-auth-token"),
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }
  );
  return response.data;
};
