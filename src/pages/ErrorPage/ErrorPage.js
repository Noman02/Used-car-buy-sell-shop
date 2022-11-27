import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center mt-48">
      <div>
        <p className="text-red-600 text-2xl m-2">Something went wrong </p>{" "}
        <p className="text-red-600 font-semibold text-4xl">
          {error.statusText || error.message}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
