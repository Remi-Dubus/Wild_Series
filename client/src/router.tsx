import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import ProgramsDetail from "./pages/ProgramsDetail";
import ProgramsEdit from "./pages/ProgramsEdit";
import ProgramsNew from "./pages/ProgramsNew";
import ProgramsPage from "./pages/ProgramsPage";

export const router = createBrowserRouter([
  {
    path: "/", // The root path
    element: <App />, // Renders the App component for the home page
    children: [
      {
        path: "/programs",
        element: <ProgramsPage />,
      },
      {
        path: "/programs/new",
        element: <ProgramsNew />,
      },
      {
        path: "/programs/:id",
        element: <ProgramsDetail />,
      },
      {
        path: "programs/:id/edit",
        element: <ProgramsEdit />,
      },
    ],
  },
  // Try adding a new route! For example, "/about" with an About component
]);
