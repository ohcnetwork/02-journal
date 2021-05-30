import useRequest from "@ahooksjs/use-request";
import {
  Spinner,
  SpinnerSize,
  NonIdealState,
  Divider,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import { getCylinderDetail } from "Apis/Admin/supplier";

import BasicDetails from "./BasicDetails";
import Timeline from "./Timeline";

function DetailModal({ cylinderId, supplierId }) {
  const { loading, error, data } = useRequest(getCylinderDetail, {
    defaultParams: [supplierId, cylinderId],
  });

  if (loading) {
    return <Spinner size={SpinnerSize.SMALL} />;
  }

  if (error) {
    return (
      <div className="py-24">
        <NonIdealState
          icon={IconNames.WARNING_SIGN}
          title="Cylinder Not found"
          description="Please select another cylinder and try again."
        />
      </div>
    );
  }

  return (
    <div className="p-4">
      <BasicDetails cylinder={data.cylinder} />
      <Divider />
      <div className="py-4">
        <Timeline history={data.history} />
      </div>
    </div>
  );
}

export default DetailModal;
