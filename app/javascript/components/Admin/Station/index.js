import useRequest from "@ahooksjs/use-request";

import { getStations } from "Apis/Admin/station";

import ContentOutline from "../ContentOutline";
import AddStation from "./AddStation";
import StationList from "./StationList";

function Station() {
  const { loading, data, refresh } = useRequest(getStations);

  return (
    <ContentOutline
      heading="Stations"
      subtitle="Create & View list of filling stations"
      rightEl={<AddStation refresh={refresh} />}
    >
      <StationList loading={loading} data={data} />
    </ContentOutline>
  );
}

export default Station;
