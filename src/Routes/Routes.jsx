import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Classes from "../Pages/Class/Classes";
import AddCourse from "../Pages/Dashboard/Instructor/AddCourse";
import ViewCourses from "../Pages/Dashboard/Instructor/ViewCourses";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/classes',
          element: <Classes></Classes>
        },
        {
          path: '/instructors',
          element: <Instructors></Instructors>
        }
      ]
    },
    {
      path: 'dashboard',
      element: (<PrivateRoute><Dashboard></Dashboard></PrivateRoute>),
      children: [

        //Instructor
        {
          path: 'addCourse',
          element: (<InstructorRoute><AddCourse></AddCourse></InstructorRoute>)
        },
        {
          path: 'viewCourse',
          element: (<InstructorRoute><ViewCourses></ViewCourses></InstructorRoute>)
        }
      ]
    }
  ]);