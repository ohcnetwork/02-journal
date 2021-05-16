import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import Input from "Common/Form/Input";
import Button from "Common/Button";
import { CylinderStatus } from "Common/CustomFields";

const schema = yup.object().shape({
  name: yup.string().required("Please enter name of supplier"),
});

function Presets() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { register, handleSubmit, errors } = form;

  const handleFormValues = async (formData) => {
    setLoading(true);
    const response = await (async () => {
      console.log(formData);
      return { data: { temp_id: 1 } };
    })();
    setLoading(false);
    history.push(`/supplier/${response.data.temp_id}`);
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
            <form noValidate onSubmit={handleSubmit(handleFormValues)}>
              <Input
                name="serial_number"
                label="Serial Number"
                required
                placeholder="Common prefix/suffix of serial numbers"
                register={register}
                errors={errors}
              />
              <CylinderStatus errors={errors} register={register} />
              <div className="mt-8">
                <span className="block w-full rounded-md shadow-sm">
                  <Button
                    htmlType="submit"
                    colorType="primary"
                    sizeType="lg"
                    loading={loading}
                    block
                  >
                    Select Prefix
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
