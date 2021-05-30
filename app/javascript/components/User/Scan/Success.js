import { Icon } from "@blueprintjs/core";
import { useForm } from "react-hook-form";
import useRequest from "@ahooksjs/use-request";
import { useHistory } from "react-router";

import { markCylinderStatus } from "Apis/user";
import RadioButtonGroup, { RadioButton } from "Common/Form/RadioButton";
import { CylinderStatus } from "Common/CustomFields";
import { genericErrorMessage, ErrorMessage } from "Common/Form/ErrorMessage";
import Button from "Common/Button";

function Success({ data }) {
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();
  const { loading, error, run } = useRequest(markCylinderStatus, {
    manual: true,
    onSuccess: () => {
      history.push(`/user`);
    },
  });
  const cylinderId = data.id;

  const updateStatus = async (formData) => {
    run(cylinderId, formData);
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
      <RadioButtonGroup label="Entry-Exit" name="entry_exit" errors={errors}>
        <RadioButton
          value="entry"
          defaultChecked
          register={register({ required: true })}
        >
          Entry
        </RadioButton>
        <RadioButton value="exit" register={register({ required: true })}>
          Exit
        </RadioButton>
      </RadioButtonGroup>
      {error && <ErrorMessage message={genericErrorMessage} />}
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
