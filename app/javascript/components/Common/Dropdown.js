import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu } from "@headlessui/react";

export default function Dropdown({ menuBtn, children, isStatic }) {
  const menuBtnRef = useRef();
  const [position, setPosition] = useState(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const rootEl = document.getElementById("dropdown-root");
    if (!rootEl) {
      return;
    }
    elementRef.current = document.createElement("div");
    rootEl.appendChild(elementRef.current);

    return () => {
      elementRef.current.remove();
    };
  }, []);

  useEffect(() => {
    if (menuBtnRef.current) {
      const boundingBox = menuBtnRef.current.getBoundingClientRect();
      setPosition(boundingBox);
    }
  }, []);

  return (
    <Menu as="div" className="inline-block text-left">
      <div ref={menuBtnRef}>{menuBtn}</div>
      {elementRef.current &&
        createPortal(
          <Menu.Items
            className="fixed mt-1 origin-top-right divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none"
            style={{
              right: window?.innerWidth - position?.right,
              top: position?.top + position?.height,
            }}
            static={isStatic}
          >
            {children}
          </Menu.Items>,
          elementRef.current
        )}
    </Menu>
  );
}
