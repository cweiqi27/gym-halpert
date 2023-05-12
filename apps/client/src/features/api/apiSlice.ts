import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../../env";
import type { Equipment } from "shared-types";
import type { Document } from "mongoose";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: env.VITE_DEV_URL }),
  endpoints: (build) => ({
    getEquipment: build.query<Equipment, string>({
      query: (id) => ({ url: `/equipments/${id}` }),
      //   transformResponse: (response: { data: EquipmentDocument }) =>
      //     response.data,
      //   transformErrorResponse: (response: { status: string | number }) =>
      //     response.status,
    }),
  }),
});

export const { useGetEquipmentQuery } = apiSlice;
