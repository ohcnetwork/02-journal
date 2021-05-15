import React, { createContext, useContext } from "react";
import { get } from "lodash";

const RBCtx = createContext(null);

export function RadioButton({ children, register, ...rest }) {
  const name = useContext(RBCtx);

  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="form-radio"
        name={name}
        register={register}
        {...rest}
      />
      <span className="ml-2">{children}</span>
    </label>
  );
}

function RadioButtonGroup({ name, children, label, errors }) {
  const errorMessage = get(errors, name);

  return (
    <RBCtx.Provider value={name}>
      <div className="mt-4">
        <span className="text-gray-700">{label}</span>
        <div className="mt-2">{children}</div>
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
