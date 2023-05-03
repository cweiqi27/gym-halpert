import ErrorPage from "./error-page";
import Root from "./routes/Root";
import Workout from "./routes/Workout";
import History from "./routes/History";

const routesConfig = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "workout",
        element: <Workout />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routesConfig;
