import { AxiosError } from "axios";

function handleServerError(error: unknown) {
  const err = error as AxiosError;
  console.log(err.response?.data);
}

export default handleServerError;
