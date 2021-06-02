import { Redirect, useParams } from "react-router";
import useRequest from "@ahooksjs/use-request";
import { Link } from "react-router-dom";
import { Spinner, SpinnerSize } from "@blueprintjs/core";

import { getStationDetail } from "Apis/Admin/station";
import Button from "Common/Button";
import CylinderList from "components/Admin/Cylinder/CylinderList";
import ContentOutline from "../../ContentOutline";
import DetailList from "./DetailList";

function StationDetail() {
  const { id } = useParams();
  const { loading, data, error } = useRequest(getStationDetail, {
    defaultParams: [id],
    cacheKey: `admin_station_detail_${id}`,
  });

  if (!id) {
    return <Redirect to="/admin/stations" />;
  }

  if (loading) {
    return <Spinner size={SpinnerSize.SMALL} />;
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
      <DetailList station={station} />
      <div className="mt-14">
        <div className="ml-1 mb-4 text-sm">
          <h2 className="text-base font-semibold text-gray-500">Cylinders</h2>
          <p className="text-gray-500 mt-1">
            Cylinders that are currently marked Entry to this station
          </p>
        </div>
        <CylinderList data={entry_cylinders} />
      </div>
    </ContentOutline>
  );
}

export default StationDetail;
