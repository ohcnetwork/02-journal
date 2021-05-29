import { Redirect, useParams } from "react-router";
import useRequest from "@ahooksjs/use-request";
import { Link } from "react-router-dom";

import { getStationDetail } from "Apis/Admin/station";
import Button from "Common/Button";
import CylinderList from "components/Admin/Cylinder/CylinderList";
import ContentOutline from "../../ContentOutline";
import IconList from "./IconList";

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
    <ContentOutline
      heading={station.name}
      rightEl={
        <Link to="/admin/stations">
          <Button>Go Back</Button>
        </Link>
      }
    >
      <IconList station={station} />
      <div className="mt-14">
        <CylinderList data={entry_cylinders} />
      </div>
    </ContentOutline>
  );
}

export default StationDetail;
