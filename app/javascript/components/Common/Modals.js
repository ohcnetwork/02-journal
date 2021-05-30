import { lazy, Suspense } from "react";
import useQuery from "Hooks/useQuery";
import { useHistory } from "react-router";

const CylinderDetail = lazy(() => import("components/Admin/Cylinder/Detail"));

const config = {
  cylinder: {
    Component: CylinderDetail,
  },
};
export const DETAIL = "detail";

const extractParams = (params) => {
  const restParams = {};
  for (let [key, value] of params) {
    restParams[key] = value;
  }
  return restParams;
};

function Modals() {
  const queryParams = useQuery();
  const history = useHistory();

  if (!queryParams.has(DETAIL)) {
    return null;
  }

  const detail = queryParams.get(DETAIL);
  const detailConfig = config[detail];
  if (!detailConfig) {
    console.warning("Component not found for corresponding detail", { detail });
    return null;
  }

  const handleClose = (keys = []) => {
    const allKeys = [DETAIL, ...keys];
    allKeys.forEach((key) => {
      if (queryParams.has(key)) {
        queryParams.delete(key);
      }
      history.replace({
        search: queryParams.toString(),
      });
    });
  };

  const { Component, ...rest } = detailConfig;
  return (
    <Suspense fallback={null}>
      <Component
        {...rest}
        {...extractParams(queryParams)}
        onClose={handleClose}
      />
    </Suspense>
  );
}

export default Modals;
