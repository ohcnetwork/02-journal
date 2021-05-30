import useRequest from "@ahooksjs/use-request";
import { pick, get } from "lodash";
import { Dialog } from "@blueprintjs/core";

import { updateStation } from "Apis/Admin/station";

import StationForm from "./StationForm";

function EditStation({ initialValues, onClose }) {
  const { loading, run } = useRequest(updateStation, {
    manual: true,
    onSuccess: () => {
      onClose();
    },
  });

  const handleEdit = async (data) => {
    const variables = {
      station: {
        ...pick(data, ["name", "address", "phone"]),
        lb_code: get(data, "local_body.value"),
      },
    };
    run(variables);
  };

  return (
    <Dialog isOpen={true} onClose={onClose} title="Edit Station">
      <StationForm
        initialValues={initialValues}
        loading={loading}
        onSubmit={handleEdit}
      />
    </Dialog>
  );
}

export default EditStation;
