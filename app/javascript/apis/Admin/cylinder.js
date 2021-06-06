import Axios from "../axios";

export const getCylinders = async () => {
  const response = await Axios.get(`/oxygen/admin/cylinder_search`);
  return response.data;
};

export const deleteCylinder = async ({ id, supplierId }) => {
  const response = await Axios.delete(
    `/oxygen/admin/vendors/${supplierId}/cylinders/${id}`
  );
  return response.data;
};
