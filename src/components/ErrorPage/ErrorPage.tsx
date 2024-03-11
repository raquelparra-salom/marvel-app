import { useRouteError } from "react-router-dom";
import { ErrorProps } from "./interfaces";

export default function ErrorPage() {
  const error:ErrorProps = useRouteError() as ErrorProps;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}