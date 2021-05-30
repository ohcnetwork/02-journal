import { lazy, Suspense } from "react";
import useQuery from "Hooks/useQuery";

const CylinderDetail = lazy(() => import("components/Admin/Cylinder/Detail"));

const config = {
  cylinder: {
    Component: CylinderDetail,
  },
};

const extractParams = (params) => {
  const restParams = {};
  for (let [key, value] of params) {
    restParams[key] = value;
  }
  return restParams;
};

function Modals() {
  const queryParams = useQuery();

  if (!queryParams.has("detail")) {
    return null;
  }

  const detail = queryParams.get("detail");
  const detailConfig = config[detail];
  if (!detailConfig) {
    console.warning("Component not found for corresponding detail", { detail });
    return null;
  }

  const { Component, ...rest } = detailConfig;
  return (
    <Suspense fallback={null}>
      <Component {...rest} {...extractParams(queryParams)} />
    </Suspense>
  );
}

export default Modals;
