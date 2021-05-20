import useRequest from "@ahooksjs/use-request";

import { getStations } from "Apis/Admin/station";
import SelectController from "../Form/SelectController";

function SelectStation({ name = "station", label = "Station Name", ...rest }) {
  const { data, loading } = useRequest(getStations, {
    cacheKey: "station_list",
  });

  return (
    <SelectController
      name={name}
      label={label}
      required
      placeholder="Name of the station"
      options={data}
      loading={loading}
      getOptionLabel={(item) => item.name}
      getOptionValue={(item) => item.id}
      {...rest}
    />
  );
}

export default SelectStation;
