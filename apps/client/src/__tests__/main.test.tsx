import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routesConfig from "../routesConfig";

test("Render not found", () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });
  render(<RouterProvider router={router} />);

  expect(screen.getByText(/developer/i)).toBeInTheDocument();
});
