import { Suspense, lazy } from "react";
import { useHistory } from "react-router";
import useRequest from "@ahooksjs/use-request";

import useQuery from "Hooks/useQuery";
import { getCylinders } from "Apis/Admin/cylinder";

import ContentOutline from "../ContentOutline";
import CylinderList from "./CylinderList";
const ExportList = lazy(() => import("./ExportList"));

function AllCylinders() {
  const queryParams = useQuery();
  const history = useHistory();
  const { data, loading, refresh } = useRequest(getCylinders, {
    cacheKey: "admin_cylinder_list",
  });

  const supplierId = queryParams.get("supplier_id");

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
      rightEl={
        <Suspense loading={null}>
          <ExportList data={data} />
        </Suspense>
      }
    >
      <CylinderList
        loading={loading}
        data={data}
        supplierId={supplierId}
        key={supplierId}
        refresh={refresh}
      />
    </ContentOutline>
  );
}

export default AllCylinders;
