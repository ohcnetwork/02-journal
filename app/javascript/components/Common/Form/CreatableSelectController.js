import CreatableSelect from "react-select/creatable";

import SelectController from "./SelectController";

/**
 * Creatable select that is embedded with Custom select.
 */
function CreatableSelectController(props) {
  return (
    <SelectController
      asSelect={CreatableSelect}
      isClearable
      getNewOptionData={(inputValue, optionLabel) => ({
        value: optionLabel,
        label: optionLabel,
        __isNew__: true,
      })}
      {...props}
    />
  );
}

export default CreatableSelectController;
