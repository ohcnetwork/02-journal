function Timeline({ history }) {
  console.log({ history });
  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-500 ml-1">History</h2>
      <div className="mt-4">
        {history.map((entry, index) => {
          return (
            <article
              key={index}
              className="px-4 py-5 bg-gray-100 shadow rounded-lg overflow-hidden sm:p-6 my-2"
            >
              <h3 className="font-medium text-gray-900">
                {entry.station.name}
              </h3>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
