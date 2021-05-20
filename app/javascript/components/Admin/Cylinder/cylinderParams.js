export const capacityOptions = [
  {
    label: "D",
    value: "d",
  },
  {
    label: "B",
    value: "b",
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
    label: "Partial",
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

export const entryOptions = [
  {
    label: "Entry",
    value: "entry",
  },
  {
    label: "Exit",
    value: "exit",
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
