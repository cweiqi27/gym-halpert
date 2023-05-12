import { configureStore } from "@reduxjs/toolkit";
import toastSlice from "../features/toast/toastSlice";
import { apiSlice } from "../features/api/apiSlice";

const store = configureStore({
  reducer: { toast: toastSlice, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
