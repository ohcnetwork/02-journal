import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import Input from "Common/Form/Input";
import Button from "Common/Button";
import RadioButtonGroup, { RadioButton } from "Common/Form/RadioButton";
import { CylinderStatus } from "Common/CustomFields";

const schema = yup.object().shape({
  serial_number: yup.string().trim(),
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
              <RadioButtonGroup
                label="Capacity"
                name="capacity"
                errors={errors}
              >
                <RadioButton value="d" defaultChecked register={register}>
                  D
                </RadioButton>
                <RadioButton value="b" register={register}>
                  B
                </RadioButton>
                <RadioButton value="c" register={register}>
                  C
                </RadioButton>
                <RadioButton value="h" register={register}>
                  H
                </RadioButton>
              </RadioButtonGroup>
              <RadioButtonGroup label="Type" name="type" errors={errors}>
                <RadioButton value="medo2" defaultChecked register={register}>
                  Med O₂
                </RadioButton>
                <RadioButton value="indo2" register={register}>
                  Ind O₂
                </RadioButton>
                <RadioButton value="nitrogen" register={register}>
                  Nitrogen
                </RadioButton>
                <RadioButton value="argon" register={register}>
                  Argon
                </RadioButton>
              </RadioButtonGroup>
              <div className="mt-8">
                <span className="block w-full rounded-md shadow-sm">
                  <Button
                    htmlType="submit"
                    colorType="primary"
                    sizeType="lg"
                    loading={loading}
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
