import Axios from "../axios";
import qs from "qs";

const URL = `/oxygen/admin/vendors`;

export const getSupplier = async () => {
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

export const deleteSupplier = async (id) => {
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

export const createSupplier = async (data) => {
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

export const updateSupplier = async (id, data) => {
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

export const addCylinders = async (id, data) => {
  const response = await Axios.post(
    `${URL}/${id}/cylinders/add`,
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

export const getCylinderDetail = async (vendorId, cylinderId) => {
  const response = await Axios.get(
    `${URL}/${vendorId}/cylinders/${cylinderId}`,
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
