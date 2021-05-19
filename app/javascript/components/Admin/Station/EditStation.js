import { Dialog } from "@headlessui/react";
import useRequest from "@ahooksjs/use-request";
import { pick, get } from "lodash";

import { updateStation } from "Apis/Admin/station";
import Modal from "Common/Modal";
import StationForm from "./StationForm";

function EditStation({ initialValues, onClose }) {
  const { loading, run } = useRequest(updateStation, {
    manual: true,
    onSuccess: onClose,
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
    <Modal open={true} onClose={onClose}>
      <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
        <div className="text-center">
          <Dialog.Title
            as="h3"
            className="text-lg leading-6 font-semibold text-gray-900"
          >
            Edit Station
          </Dialog.Title>
        </div>
        <StationForm
          initialValues={initialValues}
          loading={loading}
          onSubmit={handleEdit}
        />
      </div>
    </Modal>
  );
}

export default EditStation;
