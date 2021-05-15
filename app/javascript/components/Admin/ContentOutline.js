import React from "react";

/**
 * Create a content outline with heading for admin panel
 */
function ContentOutline({ heading, children }) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">{heading}</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
    </>
  );
}

export default ContentOutline;
