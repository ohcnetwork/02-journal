import classnames from "classnames";

function Message({ className, message }) {
  return message ? (
    <div className={classnames("mt-1 text-red-600", className)} role="alert">
      <p>{message}</p>
    </div>
  ) : null;
}

export default Message;
