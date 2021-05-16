import { useEffect, useState } from "react";
import CreatableSelectController from "Common/Form/CreatableSelectController";

function SelectSupplier({ name = "name", label = "Supplier Name", ...rest }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getSupplierInformation = async () => {
      setLoading(true);
      try {
        const data = [
          {
            label: "Supplier 1",
            value: "sup",
          },
        ];
        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getSupplierInformation();
  }, []);

  return (
    <CreatableSelectController
      name={name}
      label={label}
      required
      placeholder="Name of the supplier"
      options={data}
      loading={loading}
      {...rest}
    />
  );
}

export default SelectSupplier;
