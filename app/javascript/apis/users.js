import Axios from "./axios";

export const show = (id) => Axios.get(`/v1/users/${id}`);
