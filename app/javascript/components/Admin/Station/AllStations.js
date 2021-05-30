import useRequest from "@ahooksjs/use-request";

import { getStations } from "Apis/Admin/station";

import ContentOutline from "../ContentOutline";
import AddStation from "./AddStation";
import StationList from "./StationList";

function AllStations() {
  const { loading, data, refresh, error } = useRequest(getStations, {
    cacheKey: "admin_station_list",
  });

  return (
    <ContentOutline
      heading="Stations"
      subtitle="Create & View list of filling stations"
      rightEl={<AddStation refresh={refresh} />}
    >
      <StationList
        loading={loading}
        data={data}
        refresh={refresh}
        error={error}
      />
    </ContentOutline>
  );
}

export default AllStations;
