import { useEffect, useState } from "react";

import ContentOutline from "../ContentOutline";
import CylinderList from "./CylinderList";

const getRemoteData = async () => {
  const data = [
    {
      id: 1,
      serial_number: "123",
      supplier_name: "BPCL",
      capacity: "D",
      status: "filled",
      station_name: "Piravom",
    },
  ];
  return Promise.resolve(data);
};

function Cylinder() {
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
      heading="Cylinders"
      subtitle="View and filter list of cylinders"
    >
      <CylinderList loading={loading} data={data} />
    </ContentOutline>
  );
}

export default Cylinder;
