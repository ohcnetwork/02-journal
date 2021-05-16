import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useHistory, useParams } from "react-router-dom";

import Input from "Common/Form/Input";
import Button from "Common/Button";
import {
  CylinderStatus,
  CylinderCapacity,
  CylinderType,
} from "Common/CustomFields";

import FormOutline from "./FormOutline";

const schema = yup.object().shape({
  serial_number: yup.string().trim(),
});

function Presets() {
  const history = useHistory();
  const { id } = useParams();

  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { register, handleSubmit, errors } = form;

  const handleFormValues = async (formData) => {
    const params = Object.entries(formData).reduce((param, [key, value]) => {
      param.set(key, value);
      return param;
    }, new URLSearchParams());
    history.push(`/admin/suppliers/${id}/cylinders?${params.toString()}`);
  };

  return (
    <FormOutline
      heading="Select Presets"
      subtitle="Options selected here will be applied by default to all batches of
    cylinders. These can be altered on an individual cylinder field."
    >
      <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          className="space-y-8"
          noValidate
          onSubmit={handleSubmit(handleFormValues)}
        >
          <Input
            name="serial_number"
            label="Serial Number"
            required
            placeholder="Common prefix/suffix of serial numbers"
            register={register}
            errors={errors}
          />
          <CylinderStatus errors={errors} register={register} />
          <CylinderCapacity errors={errors} register={register} />
          <CylinderType errors={errors} register={register} />
          <div className="mt-8">
            <span className="block w-full rounded-md shadow-sm">
              <Button htmlType="submit" colorType="primary" sizeType="lg" block>
                Select Presets
              </Button>
            </span>
          </div>
        </form>
      </div>
    </FormOutline>
  );
}

export default Presets;
