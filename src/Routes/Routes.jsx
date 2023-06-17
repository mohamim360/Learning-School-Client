import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Banner/Home";
import Instructors from "../Pages/Instractor/Instructors";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

import Classes from "../Pages/Classes/Classes";
import SelectedClass from "../Pages/Dashboard/Student/SelectedClass";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Allusers from "../Pages/Dashboard/Admin/Allusers";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import AdminRoute from "./AdminRoute";
import AddClass from "../Pages/Dashboard/Teacher/AddClass";
import MyClass from "../Pages/Dashboard/Teacher/MyClass";
import Payment from "../Pages/Dashboard/Student/Payment";
import NotFound from "../NotFound";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element:<Instructors></Instructors>,
      }
      ,
      {
        path: "/classes",
        element:<Classes></Classes>,
      }
      ,
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path : "dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
    children:[
      {
        path: "select",
        element:<SelectedClass></SelectedClass>,
      },
      {
        path: "pay",
        element:<Payment></Payment>,
      },
      {
        path: "addclass",
        element:<AddClass></AddClass>,
      },
      {
        path: "myclass",
        element:<MyClass></MyClass>,
      },
      {
        path: "allusers",
        element:<AdminRoute><Allusers></Allusers></AdminRoute>
      }
,
      {
        path: "manageclasses",
        element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      }

    ]
  },
  {
    path: "*",
      element: <NotFound></NotFound>,
  }
]);
