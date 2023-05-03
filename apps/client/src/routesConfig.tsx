import Root from "./pages/Root";
import Workout from "./pages/Workout";
import History from "./pages/History";

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
  },
];

export default routesConfig;
