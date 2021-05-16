import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

import Input from "Common/Form/Input";
import LocalBodyForm from "Common/LocalBodyForm";
import Button from "Common/Button";

const schema = yup.object().shape({
  name: yup.string().required("Please enter name of shop"),
  phone_number: yup
    .string()
    .trim()
    .required("Please enter mobile number")
    .length(10, "Please enter 10 digit mobile number"),
  address: yup.string().trim().required("Please enter address"),
  local_body: yup.mixed().required("Please enter local body"),
});

function StationForm({ loading, onSubmit }) {
  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { handleSubmit, register, errors } = form;

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-lg">
      <div className="bg-white py-2 px-4 sm:px-10">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            label="Establishment Name"
            required
            placeholder="Name of the establishment"
            register={register}
            errors={errors}
          />
          <Input
            name="phone_number"
            label="Mobile number"
            required
            placeholder="10 digit mobile number"
            register={register}
            errors={errors}
          />
          <Input
            as="textarea"
            name="address"
            rows={6}
            label="Address"
            required
            placeholder="Complete address of the establishment"
            register={register}
            errors={errors}
          />
          <LocalBodyForm form={form} />
          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <Button
                htmlType="submit"
                colorType="primary"
                sizeType="lg"
                loading={loading}
                block
              >
                Add Station
              </Button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StationForm;
