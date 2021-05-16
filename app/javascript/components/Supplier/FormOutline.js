function FormOutline({ heading, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          {heading}
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
          {subtitle}
        </p>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">{children}</div>
      </div>
    </div>
  );
}

export default FormOutline;
