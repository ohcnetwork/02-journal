import Axios from "../axios";
import qs from "qs";

const URL = `/oxygen/admin/vendors`;

export const getSupplier = async () => {
  const response = await Axios.get(URL, {});
  return response.data;
};

export const deleteSupplier = async (id) => {
  const response = await Axios.delete(`${URL}/${id}`);
  return response.data;
};

export const createSupplier = async (data) => {
  const response = await Axios.post(
    URL,
    qs.stringify(data, { encodeValuesOnly: true })
  );
  return response.data;
};

export const updateSupplier = async (id, data) => {
  const response = await Axios.put(
    `${URL}/${id}`,
    qs.stringify(data, { encodeValuesOnly: true })
  );
  return response.data;
};

export const addCylinders = async (id, data) => {
  const response = await Axios.post(
    `${URL}/${id}/cylinders/add`,
    qs.stringify(data, { encodeValuesOnly: true })
  );
  return response.data;
};

export const getCylinderDetail = async (vendorId, cylinderId) => {
  const response = await Axios.get(
    `${URL}/${vendorId}/cylinders/${cylinderId}`
  );
  return response.data;
};
