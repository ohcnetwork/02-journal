import { Icon, Menu, MenuItem, Classes } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { IconNames } from "@blueprintjs/icons";

export default function OptionsDropdown({ id, supplierId }) {
  const generateQRCodePage = () => {
    return `${window.location.origin}/oxygen/vendors/${supplierId}/qr_codes?ids=${id}`;
  };

  return (
    <Popover2
      placement="bottom-end"
      content={
        <Menu className={Classes.ELEVATION_1}>
          <MenuItem
            icon={IconNames.DOCUMENT_SHARE}
            text="Generate QR Code"
            href={generateQRCodePage()}
            target="_blank"
          />
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
