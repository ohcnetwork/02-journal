import { useState } from "react";
import { Dialog } from "@headlessui/react";
import useRequest from "@ahooksjs/use-request";
import { pick, get } from "lodash";

import { createStation } from "Apis/Admin/station";
import Modal from "Common/Modal";
import StationForm from "./StationForm";

function AddStation({ refresh }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, run } = useRequest(createStation, {
    manual: true,
    onSuccess: () => {
      refresh();
      setIsModalOpen(false);
    },
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleAdd = async (data) => {
    const variables = {
      station: {
        ...pick(data, ["name", "address", "phone"]),
        lb_code: get(data, "local_body.value"),
      },
    };
    run(variables);
  };

  return (
    <>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleOpenModal}
        >
          Create new Station
        </button>
      </div>
      <Modal open={isModalOpen} onClose={setIsModalOpen}>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="text-center">
            <Dialog.Title
              as="h3"
              className="text-lg leading-6 font-semibold text-gray-900"
            >
              Add Station
            </Dialog.Title>
          </div>
          <StationForm loading={loading} onSubmit={handleAdd} />
        </div>
      </Modal>
    </>
  );
}

export default AddStation;
