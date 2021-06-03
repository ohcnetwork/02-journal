import Axios from "../axios";

export const getCylinders = async () => {
  const response = await Axios.get(`/oxygen/admin/cylinder_search`, {
    /**
     * @TODO fix interceptor
     */
    headers: {
      "X-Auth-Token": localStorage.getItem("admin-auth-token"),
    },
  });
  return response.data;
};

export const deleteCylinder = async ({ id, supplierId }) => {
  const response = await Axios.delete(
    `/oxygen/admin/vendors/${supplierId}/cylinders/${id}`,
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
