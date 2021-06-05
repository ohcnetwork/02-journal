import { Icon, Menu, MenuItem, Classes } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { IconNames } from "@blueprintjs/icons";
import useRequest from "@ahooksjs/use-request";

import { deleteCylinder } from "Apis/Admin/cylinder";
import generateQrCodeUrl from "../generateQrCodeUrl";

const DeleteButton = ({ id, supplierId, refresh }) => {
  const { run } = useRequest(deleteCylinder, {
    manual: true,
    onSuccess: refresh,
  });

  const handleDelete = () => {
    run({ id, supplierId });
  };

  return (
    <MenuItem icon={IconNames.TRASH} text="Delete" onClick={handleDelete} />
  );
};

export default function OptionsDropdown({ id, supplierId, refresh }) {
  return (
    <Popover2
      placement="bottom-end"
      content={
        <Menu className={Classes.ELEVATION_1}>
          <MenuItem
            icon={IconNames.DOCUMENT_SHARE}
            text="Generate QR Code"
            href={generateQrCodeUrl(supplierId, [id])}
            target="_blank"
          />
          <DeleteButton id={id} supplierId={supplierId} refresh={refresh} />
        </Menu>
      }
    >
      <button type="button" className="flex items-center">
        <span>Options</span>
        <Icon
          icon={IconNames.CHEVRON_DOWN}
          className="w-5 h-5 mt-1 ml-2 -mr-1"
          aria-hidden="true"
        />
      </button>
    </Popover2>
  );
}
