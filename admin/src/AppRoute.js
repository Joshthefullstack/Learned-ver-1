import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./views/Dashboard";
import Courses from "./views/Courses";
import Lessons from "./views/Lessons";
import AddLessons from "./views/AddLessons";

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
      },
      {
        path: "/add-lessons",
        element: <AddLessons/>
      },
      {
        path: "/edit-lessons/:id",
        element: <AddLessons/>
      },
      {
        path: "*",
        element: <h1>Not Found</h1>
      }
    ]
  }
])