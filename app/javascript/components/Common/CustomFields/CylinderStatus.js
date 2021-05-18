import RadioButtonGroup, { RadioButton } from "Common/Form/RadioButton";

import { statusOptions } from "components/Admin/Cylinder/cylinderParams";

function CylinderStatus({
  errors,
  register,
  name = "status",
  label = "Status",
  defaultValue = "filled",
}) {
  return (
    <RadioButtonGroup
      label={label}
      name={name}
      errors={errors}
      defaultValue={defaultValue}
    >
      {statusOptions.map(({ value, label }) => (
        <RadioButton value={value} key={value} register={register}>
          {label}
        </RadioButton>
      ))}
    </RadioButtonGroup>
  );
}

export default CylinderStatus;
