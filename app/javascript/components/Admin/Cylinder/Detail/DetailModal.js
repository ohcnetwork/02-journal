import useRequest from "@ahooksjs/use-request";
import { Spinner, SpinnerSize, NonIdealState } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import { getCylinderDetail } from "Apis/Admin/supplier";

function DetailModal({ cylinderId, supplierId }) {
  const { loading, error, data } = useRequest(getCylinderDetail, {
    defaultParams: {
      vendorId: supplierId,
      cylinderId: cylinderId,
    },
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

  return <p>DetailModal {JSON.stringify(data)}</p>;
}

export default DetailModal;
