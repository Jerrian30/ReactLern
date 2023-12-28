import { useRouteError } from "react-router-dom";

const ErrorPage=()=>{
    const error = useRouteError();


return (
  <div className="flex justify-center min-h-screen items-center border-black">
    <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold  mb-2 text-blue-600">
        {error.statusText || error.message}
      </h1><br />
      <p className="font-small text-slate-500">Oops!!</p>
      <p className="font-small text-slate-500">
        Sepertinya Router kamu salah deh
      </p>
    </div>
  </div>
);
}
export default ErrorPage