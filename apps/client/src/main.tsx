import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/globals.scss";
import routesConfig from "./routesConfig";
import store from "./app/store";
import { Provider } from "react-redux";
import { ClerkProvider } from "@clerk/clerk-react";
import { env } from "./env";

const clerkPubKey = env.VITE_CLERK_PUBLISHABLE_KEY;
const router = createBrowserRouter(routesConfig);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
