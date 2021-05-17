import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu } from "@headlessui/react";

export default function Dropdown({ menuBtn, children }) {
  const menuBtnRef = useRef();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (menuBtnRef.current) {
      const boundingBox = menuBtnRef.current.getBoundingClientRect();
      setPosition(boundingBox);
    }
  }, []);

  return (
    <Menu as="div" className="inline-block text-left">
      <div ref={menuBtnRef}>{menuBtn}</div>
      {createPortal(
        <Menu.Items
          className="fixed mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          style={{
            right: window?.innerWidth - position?.right,
            top: position?.top + position?.height,
          }}
        >
          {children}
        </Menu.Items>,
        document.getElementById("dropdown")
      )}
    </Menu>
  );
}
