import { useEffect, useState } from "react";

import { getCylinders } from "Apis/Admin/cylinder";
import ContentOutline from "../ContentOutline";
import CylinderList from "./CylinderList";

function Cylinder() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await getCylinders();
      setData(response);
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
