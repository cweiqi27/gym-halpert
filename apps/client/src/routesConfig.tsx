import React from "react";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Workout from "./routes/workout";
import History from "./routes/history";
import Profile from "./routes/profile";
import Index from "./routes";

const routesConfig = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "workout",
        element: <Workout />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routesConfig;
