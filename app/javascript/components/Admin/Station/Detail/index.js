import { Redirect, useParams } from "react-router";
import useRequest from "@ahooksjs/use-request";

import { getStationDetail } from "Apis/Admin/station";
import ContentOutline from "../../ContentOutline";
import IconList from "./IconList";
import CylinderList from "../../Cylinder/CylinderList";

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

  const { station, entry_cylinders } = data;

  return (
    <ContentOutline heading={station.name} rightEl={null}>
      <IconList station={station} />
      <div className="mt-14">
        <CylinderList data={entry_cylinders} />
      </div>
    </ContentOutline>
  );
}

export default StationDetail;
