import { useEffect, useMemo, useState } from "react";
import { random } from "lodash";

import Table from "Common/Table/ReactTable";
import { getSupplier } from "Apis/Admin/supplier";

function SupplierList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await getSupplier();
        const augmented = response?.map((sup) => ({
          ...sup,
          cylinder_count: random(0, 300),
        }));
        setData(augmented);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const columns = useMemo(
    () => [
      {
        id: "NAME",
        Header: "Supplier Name",
        accessor: "name",
        className: "text-gray-900",
        sortable: true,
        filter: "fuzzyText",
        filterable: true,
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      // {
      //   Header: "Cylinders",
      //   accessor: "cylinder_count",
      //   headerClassName: "text-center justify-center",
      //   className: "text-center",
      //   sortable: true,
      // },
    ],
    []
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not retrieve supplier list. Please try again.</p>;
  }

  return <Table columns={columns} data={data} />;
}

export default SupplierList;
