import Axios from "../axios";
import qs from "qs";

const URL = `/oxygen/admin/stations`;

export const getStations = async () => {
  const response = await Axios.get(URL, {
    /**
     * @TODO fix interceptor
     */
    headers: {
      "X-Auth-Token": localStorage.getItem("admin-auth-token"),
    },
  });
  return response.data;
};

export const getStationDetail = async (id) => {
  const response = await Axios.get(`${URL}/${id}/cylinders`, {
    /**
     * @TODO fix interceptor
     */
    headers: {
      "X-Auth-Token": localStorage.getItem("admin-auth-token"),
    },
  });
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
      },
    }
  );
  return response.data;
};

export const deleteStation = async (id) => {
  const response = await Axios.delete(`${URL}/${id}`, {
    /**
     * @TODO fix interceptor
     */
    headers: {
      "X-Auth-Token": localStorage.getItem("admin-auth-token"),
    },
  });
  return response.data;
};
