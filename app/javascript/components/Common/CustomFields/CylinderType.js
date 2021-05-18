import RadioButtonGroup, { RadioButton } from "Common/Form/RadioButton";

import { typeOptions } from "components/Admin/Cylinder/cylinderParams";

function CylinderType({
  errors,
  register,
  name = "category",
  label = "Type",
  defaultValue = "med",
}) {
  return (
    <RadioButtonGroup
      label={label}
      name={name}
      errors={errors}
      defaultValue={defaultValue}
    >
      {typeOptions.map(({ value, label }) => (
        <RadioButton value={value} register={register} key={value}>
          {label}
        </RadioButton>
      ))}
    </RadioButtonGroup>
  );
}

export default CylinderType;
