import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useHistory, useParams } from "react-router-dom";

import Input from "Common/Form/Input";
import Button from "Common/Button";
import { CylinderStatus, CylinderCapacity } from "Common/CustomFields";
import CylinderType from "../Common/CustomFields/CylinderType";

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
    history.push(`/supplier/${id}/cylinders?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Select Presets
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
          Options selected here will be applied by default to all batches of
          cylinders. These can be altered on an individual cylinder field.
        </p>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
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
                  <Button
                    htmlType="submit"
                    colorType="primary"
                    sizeType="lg"
                    block
                  >
                    Select Presets
                  </Button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presets;
