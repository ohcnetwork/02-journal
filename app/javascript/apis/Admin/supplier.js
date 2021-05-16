import Axios from "../axios";

export const getSupplier = async () => {
  const response = await Axios.get("/admin/vendors", {
    /**
     * @TODO fix interceptor
     */
    headers: {
      "X-Auth-Token": localStorage.getItem("admin-auth-token"),
    },
  });
  return response.data;
};
