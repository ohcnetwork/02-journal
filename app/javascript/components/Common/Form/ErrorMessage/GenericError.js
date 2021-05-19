import Message from "./Message";

export const genericErrorMessage = "Something went wrong. Please try again";

function GenericError({ errors }) {
  return <Message message={errors?.general?.message} />;
}

export default GenericError;
