import React from "react";
import { useForm } from "react-hook-form";

import Input from "Common/Form/Input";
import LocalBodyForm from "Common/LocalBodyForm";
import Button from "Common/Button";

function StationForm({ loading, onSubmit }) {
  const form = useForm();
  const { handleSubmit, register, errors } = form;

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10">
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
