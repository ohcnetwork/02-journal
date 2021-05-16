import RadioButtonGroup, { RadioButton } from "Common/Form/RadioButton";

function CylinderType({ errors, register, name = "type", label = "Type" }) {
  return (
    <RadioButtonGroup label={label} name={name} errors={errors}>
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
  );
}

export default CylinderType;
