export const capacityOptions = [
  {
    label: "D",
    value: "d",
  },
  {
    label: "B",
    value: "B",
  },
  {
    label: "C",
    value: "c",
  },
  {
    label: "H",
    value: "h",
  },
];

export const statusOptions = [
  {
    label: "Filled",
    value: "filled",
  },
  {
    label: "Partially",
    value: "partially",
  },
  {
    label: "Empty",
    value: "empty",
  },
  {
    label: "Faulty",
    value: "faulty",
  },
];

export const typeOptions = [
  {
    label: "Ind 0₂",
    value: "ind",
  },
  {
    label: "Med 0₂",
    value: "med",
  },
  {
    label: "Nitrogen",
    value: "nitrogen",
  },
  {
    label: "Argon",
    value: "arg",
  },
];

/**
 * Get the display element from value
 * @param {typeof typeOptions} options
 * @param {string} value received value prop
 * @returns display element
 */
export const findLabel = (options, value) => {
  return options.find((option) => option.value === value)?.label ?? null;
};
