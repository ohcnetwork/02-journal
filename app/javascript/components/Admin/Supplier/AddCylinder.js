import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Icon } from "@blueprintjs/core";

import useQuery from "Hooks/useQuery";
import Input from "Common/Form/Input";
import Button from "Common/Button";
import {
  CylinderStatus,
  CylinderCapacity,
  CylinderType,
} from "Common/CustomFields";

import FormOutline from "./FormOutline";
import { useHistory } from "react-router";

const getDefaultValues = (urlParams) => {
  return {
    serial_number: urlParams.get("serial_number") || "",
    capacity: urlParams.get("capacity") || "d",
    status: urlParams.get("status") || "filled",
    type: urlParams.get("type") || "medo2",
  };
};

function AddCylinder() {
  const urlParams = useQuery();
  const history = useHistory();
  const { handleSubmit, control, register, errors } = useForm({
    defaultValues: {
      cylinders: [getDefaultValues(urlParams)],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "cylinders",
    control,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (fields.length === 0) {
      append(getDefaultValues(urlParams));
    }
  }, [fields]);

  const handleFormValues = (data) => {
    setLoading(true);
    try {
      console.log(data);
      history.push(`/supplier`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormOutline
      heading="Add Cylinder"
      subtitle="Add individual cylinders. You can add cylinders by clicking Add Cylinder button."
    >
      <div className="bg-white shadow sm:rounded-lg">
        <form
          className="space-y-4"
          noValidate
          onSubmit={handleSubmit(handleFormValues)}
        >
          {fields.map((field, index) => {
            return (
              <div
                className="py-6 px-10 border-2 border-gray-200 space-y-8"
                key={field.id}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-semibold text-indigo-500 truncate">
                    Cylinder {index + 1}
                  </h4>
                  <button title="Remove" onClick={() => remove(index)}>
                    <Icon icon={"small-cross"} />
                  </button>
                </div>
                <Input
                  name={`cylinders[${index}].serial_number`}
                  label="Serial Number"
                  required
                  placeholder="Serial number of cylinder"
                  register={register()}
                  errors={errors}
                  defaultValue={field.serial_number}
                />
                <CylinderStatus
                  name={`cylinders[${index}].status`}
                  errors={errors}
                  register={register()}
                  defaultValue={field.status}
                />
                <CylinderCapacity
                  name={`cylinders[${index}].capacity`}
                  errors={errors}
                  register={register()}
                  defaultValue={field.capacity}
                />
                <CylinderType
                  name={`cylinders[${index}].type`}
                  errors={errors}
                  register={register()}
                  defaultValue={field.type}
                />
              </div>
            );
          })}
          <div className="mt-8 space-y-6">
            <span className="block w-full rounded-md shadow-sm">
              <Button
                htmlType="button"
                colorType="secondary"
                sizeType="lg"
                block
                onClick={() => append(getDefaultValues(urlParams))}
              >
                Add Cylinder
              </Button>
            </span>
            <span className="block w-full rounded-md shadow-sm">
              <Button
                htmlType="submit"
                colorType="primary"
                sizeType="lg"
                block
                loading={loading}
              >
                Generate QR Codes
              </Button>
            </span>
          </div>
        </form>
      </div>
    </FormOutline>
  );
}

export default AddCylinder;
