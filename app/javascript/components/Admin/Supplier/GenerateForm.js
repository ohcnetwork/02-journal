import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import Input from "Common/Form/Input";
import Button from "Common/Button";
import { createSupplier, updateSupplier } from "Apis/Admin/supplier";
import { SelectSupplier } from "Common/CustomFields";

import FormOutline from "./FormOutline";

const schema = yup.object().shape({
  name: yup.mixed().required("Please enter name of supplier"),
  phone: yup
    .string()
    .trim()
    .required("Please enter mobile number")
    .length(10, "Please enter 10 digit mobile number"),
  address: yup.string().trim(),
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
    try {
      const response = await (() => {
        const data = {
          ...formData,
          name: formData.name.label,
        };
        if (formData.name.__isNew__) {
          return createSupplier({
            vendor: data,
          });
        }
        return updateSupplier(formData.name.value, {
          vendor: data,
        });
      })();
      history.push(`/supplier/${response.id}/presets`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormOutline
      heading="Generate QR Code"
      subtitle="Filling up this form will help select a supplier. Individual cylinders
    can be added on the next page."
    >
      <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10">
        <form noValidate onSubmit={handleSubmit(handleFormValues)}>
          <SelectSupplier control={control} errors={errors} />
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
            name="phone"
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
                Select Supplier
              </Button>
            </span>
          </div>
        </form>
      </div>
    </FormOutline>
  );
}

export default GenerateForm;
