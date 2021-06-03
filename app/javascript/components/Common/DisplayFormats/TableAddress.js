import { Tooltip2 } from "@blueprintjs/popover2";

function TableAddress({ maxWidth = 400, children }) {
  return (
    <Tooltip2 popoverClassName="max-w-xl" content={children}>
      <p style={{ maxWidth }} className="truncate">
        {children}
      </p>
    </Tooltip2>
  );
}

export default TableAddress;
