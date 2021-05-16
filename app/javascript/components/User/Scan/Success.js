import { useState } from "react";
import { Icon } from "@blueprintjs/core";
import { useForm } from "react-hook-form";

import RadioButtonGroup, { RadioButton } from "Common/Form/RadioButton";
import { CylinderStatus } from "Common/CustomFields";
import Button from "Common/Button";

function Success() {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, errors } = useForm();

  const updateStatus = async () => {
    setLoading(true);
    try {
      await Promise.resolve();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(updateStatus)}>
      <div className="flex justify-center">
        <Icon icon={"tick-circle"} iconSize={44} className="text-green-600" />
      </div>
      <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
        Please update the status of this cylinder
      </p>
      <CylinderStatus register={register} errors={errors} />
      <RadioButtonGroup labelText="Entry" name="entry" errors={errors}>
        <RadioButton
          value="filled"
          defaultChecked
          register={register({ required: true })}
        >
          Entry
        </RadioButton>
        <RadioButton value="partial" register={register({ required: true })}>
          Exit
        </RadioButton>
      </RadioButtonGroup>

      <div className="mt-6">
        <span className="block w-full rounded-md shadow-sm">
          <Button
            htmlType="submit"
            colorType="primary"
            sizeType="lg"
            block
            loading={loading}
          >
            Update
          </Button>
        </span>
      </div>
    </form>
  );
}

export default Success;
