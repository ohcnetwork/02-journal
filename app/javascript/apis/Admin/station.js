import Axios from "../axios";
import qs from "qs";

const URL = `/oxygen/admin/stations`;

export const getStations = async () => {
  const response = await Axios.get(URL);
  return response.data;
};

export const getStationDetail = async (id) => {
  const response = await Axios.get(`${URL}/${id}/cylinders`);
  return response.data;
};

export const createStation = async (data) => {
  const response = await Axios.post(
    URL,
    qs.stringify(data, { encodeValuesOnly: true })
  );
  return response.data;
};

export const updateStation = async (id, data) => {
  const response = await Axios.put(
    `${URL}/${id}`,
    qs.stringify(data, { encodeValuesOnly: true })
  );
  return response.data;
};

export const deleteStation = async (id) => {
  const response = await Axios.delete(`${URL}/${id}`);
  return response.data;
};
