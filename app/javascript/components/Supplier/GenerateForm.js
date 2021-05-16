import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import Input from "Common/Form/Input";
import Button from "Common/Button";
import CreatableSelectController from "Common/Form/CreatableSelectController";

const schema = yup.object().shape({
  name: yup.string().required("Please enter name of supplier"),
  phone_number: yup
    .string()
    .trim()
    .required("Please enter mobile number")
    .length(10, "Please enter 10 digit mobile number"),
  address: yup.string().trim().required("Please enter address"),
});

function GenerateForm() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { register, handleSubmit, errors, control } = form;

  const handleFormValues = async (formData) => {
    setLoading(true);
    const response = await formData;
    setLoading(false);
    history.push(`/supplier/${response.data.temp_id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Generate QR Code
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
          Filling up this form will help select a supplier. Individual cylinders
          can be added on the next page.
        </p>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10">
            <form noValidate onSubmit={handleSubmit(handleFormValues)}>
              <CreatableSelectController
                name="name"
                label="Supplier Name"
                required
                placeholder="Name of the supplier"
                control={control}
                errors={errors}
              />
              <Input
                as="textarea"
                name="address"
                rows={6}
                label="Address"
                required
                placeholder="Complete address of the supplier"
                register={register}
                errors={errors}
              />
              <Input
                name="phone_number"
                label="Mobile number"
                type="tel"
                required
                placeholder="10 digit mobile number"
                register={register}
                errors={errors}
              />
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <Button
                    htmlType="submit"
                    colorType="primary"
                    sizeType="lg"
                    loading={loading}
                    block
                  >
                    Update Supplier
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

export default GenerateForm;
