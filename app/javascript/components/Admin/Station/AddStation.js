import React from "react";

function AddStation({ refetch }) {
  const handleAdd = () => {
    refetch();
  };

  return (
    <div className="mt-3 sm:mt-0 sm:ml-4">
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleAdd}
      >
        Create new Station
      </button>
    </div>
  );
}

export default AddStation;
