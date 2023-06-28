import { useParams } from "react-router-dom";

const ResturantMenuDynamic = () => {
  const { id } = useParams();

  return (
    <>
      <h1>{id}</h1>
    </>
  );
};
export default ResturantMenuDynamic;
