import { createContext, useContext, useMemo } from "react";
import { get } from "lodash";

const RBCtx = createContext(null);

export function RadioButton({ children, register, value, ...rest }) {
  const { name, defaultValue } = useContext(RBCtx);

  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="form-radio"
        name={name}
        ref={register}
        defaultChecked={defaultValue === value}
        {...rest}
      />
      <span className="ml-2">{children}</span>
    </label>
  );
}

function RadioButtonGroup({ name, children, label, errors, defaultValue }) {
  const errorMessage = get(errors, name);

  const value = useMemo(() => ({
    name,
    defaultValue,
  }));

  return (
    <RBCtx.Provider value={value}>
      <div className="mt-4">
        <span className="text-gray-700">{label}</span>
        <div className="mt-2 flex space-x-6">{children}</div>
      </div>
      {errorMessage && (
        <div className="mt-1 text-red-600" role="alert">
          <p>{errorMessage?.message}</p>
        </div>
      )}
    </RBCtx.Provider>
  );
}

export default RadioButtonGroup;
