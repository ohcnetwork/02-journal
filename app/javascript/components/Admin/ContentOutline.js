import React from "react";

/**
 * Create a content outline with heading for admin panel
 */
function ContentOutline({ heading, subtitle, children, rightEl }) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{heading}</h1>
          <p className="text-sm mt-1 font-medium text-gray-600">{subtitle}</p>
        </div>
        <div>{rightEl}</div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-6">{children}</div>
      </div>
    </>
  );
}

export default ContentOutline;
