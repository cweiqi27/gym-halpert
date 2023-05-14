import React from "react";
import { useGetEquipmentQuery } from "../features/api/apiSlice";

const Workout = () => {
  const { data, isFetching, isLoading, isError, isSuccess } =
    useGetEquipmentQuery("645a1a8c4310ac51330bd314");
  return (
    <>
      <div>{data && data.name}idk</div> <div>{isSuccess && "success"}</div>
    </>
  );
};

export default Workout;
