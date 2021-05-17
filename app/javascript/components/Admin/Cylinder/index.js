import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import useQuery from "Hooks/useQuery";
import { getCylinders } from "Apis/Admin/cylinder";

import ContentOutline from "../ContentOutline";
import CylinderList from "./CylinderList";

function Cylinder() {
  const [data, setData] = useState([]);
  const queryParams = useQuery();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const supplierId = queryParams.get("supplier_id");

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

  const renderSupplierHeader = () => {
    const clearSupplier = () => {
      history.replace();
    };
    return (
      <>
        <span>
          <span>Showing cylinders from </span>
          <span className="font-semibold">
            {queryParams.get("supplier_name")}
          </span>
        </span>
        <button
          type="button"
          className="ml-4 text-indigo-500 hover:text-indigo-600"
          onClick={clearSupplier}
        >
          Show All
        </button>
      </>
    );
  };

  return (
    <ContentOutline
      heading="Cylinders"
      subtitle={
        supplierId
          ? renderSupplierHeader()
          : "View and filter list of cylinders"
      }
    >
      <CylinderList
        loading={loading}
        data={data}
        supplierId={supplierId}
        key={supplierId}
      />
    </ContentOutline>
  );
}

export default Cylinder;
