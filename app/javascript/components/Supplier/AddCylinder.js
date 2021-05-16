import { Fragment, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import Input from "Common/Form/Input";
import Button from "Common/Button";
import {
  CylinderStatus,
  CylinderCapacity,
  CylinderType,
} from "Common/CustomFields";

import FormOutline from "./FormOutline";

function AddCylinder() {
  const { handleSubmit, control, register, errors } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "cylinders",
    control,
  });

  useEffect(() => {
    if (fields.length === 0) {
      append({});
    }
  }, [fields]);

  const handleFormValues = console.log;

  return (
    <FormOutline
      heading="Add Cylinder"
      subtitle="Add individual cylinders. You can add cylinders by clicking Add Cylinder button."
    >
      <div>
        <form
          className="space-y-8"
          noValidate
          onSubmit={handleSubmit(handleFormValues)}
        >
          {fields.map((field, index) => {
            return (
              <Fragment key={field.id}>
                <button onClick={() => remove(index)}>X</button>
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
              </Fragment>
            );
          })}
          <div className="mt-8 space-y-6">
            <span className="block w-full rounded-md shadow-sm">
              <Button
                htmlType="submit"
                colorType="secondary"
                sizeType="lg"
                block
              >
                Add Cylinder
              </Button>
            </span>
            <span className="block w-full rounded-md shadow-sm">
              <Button htmlType="submit" colorType="primary" sizeType="lg" block>
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
