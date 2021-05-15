import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

import Modal from "Common/Modal";
import StationForm from "./StationForm";

const createStation = () => {
  return Promise.resolve();
};

function AddStation({ refetch }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    refetch();
  };

  const handleAdd = async (data) => {
    setLoading(true);
    try {
      await createStation(data);
    } catch (err) {
      console.log(err);
    } finally {
      refetch();
      setLoading(false);
    }
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
