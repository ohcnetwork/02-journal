import Axios from "../axios";

const URL = `/oxygen/admin/cylinder_search`;

export const getCylinders = async () => {
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
