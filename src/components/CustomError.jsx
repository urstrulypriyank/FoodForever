import { useRouteError } from "react-router-dom";

const CustomError = () => {
  const { statusText, status } = useRouteError();

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-blue-300 backdrop-blur-3xl ">
      <div className="flex items-center justify-center border border-black w-[70%] h-52 m-5 flex-col text-2xl ">
        <h1>Something Went Wrong{"  "}😶 </h1>
        <span>
          status: {status} - {statusText}
        </span>
      </div>
    </div>
  );
};
export default CustomError;
