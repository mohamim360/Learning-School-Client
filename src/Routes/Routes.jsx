import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Banner/Home";
import Instructors from "../Pages/Instractor/Instructors";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      }
      ,
  {
    path: "/instructors",
    element: <Instructors></Instructors>,
  }
    ]
  }
]);