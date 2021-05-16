import { useEffect, useState } from "react";
import ContentOutline from "../ContentOutline";
import AddStation from "./AddStation";

import StationList from "./StationList";

const getRemoteData = async () => {
  const data = [
    {
      id: 1,
      name: "Name of the station",
      address: "some address of station",
      phone: "12341234",
    },
  ];
  return Promise.resolve(data);
};

function Station() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      setData(await getRemoteData());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ContentOutline
      heading="Stations"
      subtitle="Create & View list of filling stations"
      rightEl={<AddStation refetch={getData} />}
    >
      <StationList loading={loading} data={data} />
    </ContentOutline>
  );
}

export default Station;
