import classNames from "classnames";
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Toaster from "Common/Toaster";

function PhoneNumber({ children, className, showIcon }) {
  if (typeof children !== "string") {
    console.warning(
      `PhoneNumber will not copied to the clipboard correctly! Please pass children as string`
    );
  }
  return (
    <CopyToClipboard
      text={children}
      onCopy={() =>
        Toaster.show({
          message: "Number copied to clipboard",
          intent: Intent.SUCCESS,
        })
      }
    >
      <button
        className={classNames("flex items-center", className)}
        type="button"
        title="Click to copy"
      >
        {showIcon && (
          <Icon
            icon={IconNames.PHONE}
            className="w-5 h-5 relative top-0.5 mr-1 text-gray-400"
            aria-hidden="true"
          />
        )}
        <p>{children}</p>
      </button>
    </CopyToClipboard>
  );
}

export default PhoneNumber;
