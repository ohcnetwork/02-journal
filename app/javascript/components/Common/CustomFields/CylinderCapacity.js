import RadioButtonGroup, { RadioButton } from "Common/Form/RadioButton";

import { capacityOptions } from "components/Admin/Cylinder/cylinderParams";

function CylinderCapacity({
  errors,
  register,
  name = "capacity",
  label = "Capacity",
  defaultValue = "d",
}) {
  return (
    <RadioButtonGroup
      label={label}
      name={name}
      errors={errors}
      defaultValue={defaultValue}
    >
      {capacityOptions.map(({ label, value }) => (
        <RadioButton value={value} register={register} key={value}>
          {label}
        </RadioButton>
      ))}
    </RadioButtonGroup>
  );
}

export default CylinderCapacity;
