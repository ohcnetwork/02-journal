import qs from "qs";
import Axios from "./axios";

/**
 *
 * @param {string} id ID of the cylinder from QR Code
 * @param {Object} payload data to be send
 * @param {'filled' | 'partially' | 'empty' | 'faulty'} payload.status status of cylinder
 * @param {'entry' | 'exit'} payload.entry_exit entry status of cylinder
 */
export const markCylinderStatus = (id, payload) => {
  return Axios.put(
    `/oxygen/cylinders/${id}`,
    qs.stringify({
      cylinder: payload,
    })
  );
};
