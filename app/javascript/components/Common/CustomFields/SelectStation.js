import { useEffect, useState } from "react";

import { getStations } from "Apis/Admin/station";
import SelectController from "../Form/SelectController";

function SelectStation({ name = "station", label = "Station Name", ...rest }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getStationInformation = async () => {
      setLoading(true);
      try {
        const data = await getStations();
        const options = data.map((option) => ({
          ...option,
          label: option.name,
          value: option.id,
        }));
        setData(options);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getStationInformation();
  }, []);

  return (
    <SelectController
      name={name}
      label={label}
      required
      placeholder="Name of the station"
      options={data}
      loading={loading}
      {...rest}
    />
  );
}

export default SelectStation;
