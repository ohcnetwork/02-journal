import {
  capacityOptions,
  statusOptions,
  findLabel,
  typeOptions,
  entryOptions,
} from "components/Admin/Cylinder/cylinderParams";

export const CapacityText = ({ children }) =>
  findLabel(capacityOptions, children);

export const StatusText = ({ children }) => findLabel(statusOptions, children);

export const TypeText = ({ children }) => findLabel(typeOptions, children);

export const EntryExitText = ({ children }) =>
  findLabel(entryOptions, children);
