import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./views/Dashboard";
import Courses from "./views/Courses";
import Lessons from "./views/Lessons";

export const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Dashboard/>
      },
      {
        path: "/courses",
        element: <Courses/>
      },
      {
        path: "/lessons",
        element: <Lessons/>
      }
    ]
  }
])