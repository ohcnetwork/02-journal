import { Redirect, useParams } from "react-router";
import useRequest from "@ahooksjs/use-request";

import { getStationDetail } from "Apis/Admin/station";

function StationDetail() {
  const { id } = useParams();
  const { loading, data, error } = useRequest(getStationDetail, {
    defaultParams: [id],
  });

  if (!id) {
    return <Redirect to="/admin/stations" />;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong. Please try again.</p>;
  }

  return <p>Data, {JSON.stringify(data)}</p>;
}

export default StationDetail;
