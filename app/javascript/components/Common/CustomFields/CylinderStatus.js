import RadioButtonGroup, { RadioButton } from "Common/Form/RadioButton";

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
      <RadioButton value="filled" register={register}>
        Filled
      </RadioButton>
      <RadioButton value="partially" register={register}>
        Partial
      </RadioButton>
      <RadioButton value="empty" register={register}>
        Empty
      </RadioButton>
      <RadioButton value="faulty" register={register}>
        Faulty
      </RadioButton>
    </RadioButtonGroup>
  );
}

export default CylinderStatus;
