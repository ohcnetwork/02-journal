import { Menu } from "@headlessui/react";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import useRequest from "@ahooksjs/use-request";

import { deleteSupplier } from "Apis/Admin/supplier";
import Dropdown from "Common/Dropdown";

export default function OptionsDropdown({ id, refresh }) {
  const { run } = useRequest(deleteSupplier, {
    manual: true,
    onSuccess: refresh,
  });

  const handleDelete = () => {
    run(id);
  };

  return (
    <Dropdown
      menuBtn={
        <Menu.Button className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-black rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Options
          <Icon
            icon={IconNames.CHEVRON_DOWN}
            className="w-5 h-5 mt-1 ml-2 -mr-1"
            aria-hidden="true"
          />
        </Menu.Button>
      }
    >
      <div className="px-1 py-1 w-36 bg-white rounded-md shadow-lg">
        <Menu.Item>
          <button
            className={`text-gray-800 group hover:bg-gray-100 flex rounded-md items-center w-full px-2 py-2 text-sm`}
            onClick={handleDelete}
          >
            <Icon
              icon={IconNames.TRASH}
              className="w-5 h-5 mr-2"
              aria-hidden="true"
            />
            <span>Delete</span>
          </button>
        </Menu.Item>
      </div>
    </Dropdown>
  );
}
