import Axios from "./axios";

export const userOngoingVisits = () => Axios.get(`/v1/visits/ongoing`);

export const exitVisit = (id) => Axios.put(`/v1/visits/${id}/exit`);

export const logVisit = (visitableId, visitableType) =>
  Axios.post(`/v1/visits`, {
    visitable_type: visitableType,
    visitable_id: visitableId,
  });
