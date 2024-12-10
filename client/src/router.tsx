import { createBrowserRouter } from "react-router-dom";
import App from "./App";
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
    ],
  },
  // Try adding a new route! For example, "/about" with an About component
]);
