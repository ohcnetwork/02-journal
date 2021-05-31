import { useState } from "react";
import useRequest from "@ahooksjs/use-request";
import { pick, get } from "lodash";
import { Dialog } from "@blueprintjs/core";

import { createStation } from "Apis/Admin/station";
import StationForm from "./StationForm";

function AddStation({ refresh }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, run, error } = useRequest(createStation, {
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
      <Dialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Station"
      >
        <StationForm loading={loading} apiError={error} onSubmit={handleAdd} />
      </Dialog>
    </>
  );
}

export default AddStation;
