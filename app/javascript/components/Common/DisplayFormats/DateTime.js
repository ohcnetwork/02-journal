import dayjs from "dayjs";

function DateTime({ timeString, className }) {
  return (
    <time dateTime={timeString} title={timeString} className={className}>
      {dayjs(timeString).format("DD/MM/YYYY HH:mm A")}
    </time>
  );
}

export default DateTime;
