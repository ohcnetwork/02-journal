import Axios from "./axios";

export const getLocalBodies = () => Axios.get(`/v1/local_bodies`);
