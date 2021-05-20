import useRequest from "@ahooksjs/use-request";

import { listStations } from "Apis/user";
import SelectController from "../Form/SelectController";

function SelectStation({ name = "station", label = "Station Name", ...rest }) {
  const { data: response, loading } = useRequest(listStations, {
    cacheKey: "station_list",
  });

  return (
    <SelectController
      name={name}
      label={label}
      required
      placeholder="Name of the station"
      options={response?.data ?? []}
      loading={loading}
      getOptionLabel={(item) => item.name}
      getOptionValue={(item) => item.id}
      {...rest}
    />
  );
}

export default SelectStation;
