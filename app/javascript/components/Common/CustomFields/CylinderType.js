import RadioButtonGroup, { RadioButton } from "Common/Form/RadioButton";

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
      <RadioButton value="med" register={register}>
        Med O₂
      </RadioButton>
      <RadioButton value="ind" register={register}>
        Ind O₂
      </RadioButton>
      <RadioButton value="nitrogen" register={register}>
        Nitrogen
      </RadioButton>
      <RadioButton value="arg" register={register}>
        Argon
      </RadioButton>
    </RadioButtonGroup>
  );
}

export default CylinderType;
