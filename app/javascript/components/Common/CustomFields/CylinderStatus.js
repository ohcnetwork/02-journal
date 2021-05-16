import RadioButtonGroup, { RadioButton } from "Common/Form/RadioButton";

function CylinderStatus({
  errors,
  register,
  name = "status",
  label = "Status",
}) {
  return (
    <RadioButtonGroup label={label} name={name} errors={errors}>
      <RadioButton value="filled" defaultChecked register={register}>
        Filled
      </RadioButton>
      <RadioButton value="partial" register={register}>
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
