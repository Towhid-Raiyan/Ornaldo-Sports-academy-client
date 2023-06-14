import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Classes from "../Pages/Class/Classes";
import ClassesPage from "../Pages/Dashboard/Admin/ClassesPage";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUser";
import AddCourse from "../Pages/Dashboard/Instructor/AddCourse";
import ViewCourses from "../Pages/Dashboard/Instructor/ViewCourses";
import SelectedClass from "../Pages/Dashboard/Student/SelectedClass";
import StudentDashboard from "../Pages/Dashboard/Student/StudentDashboard";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";
import StudentRoute from "./StudentRoute";

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

      // for students
      {
        path: "student",
        element: (<StudentRoute><StudentDashboard></StudentDashboard></StudentRoute>),
      },
      {
        path: "selectedClasses",
        element: (<StudentRoute><SelectedClass></SelectedClass></StudentRoute>),
      },
      
      //Instructor
      {
        path: 'addCourse',
        element: (<InstructorRoute><AddCourse></AddCourse></InstructorRoute>)
      },
      {
        path: 'viewCourse',
        element: (<InstructorRoute><ViewCourses></ViewCourses></InstructorRoute>)
      },
      // for admin
      {
        path: "manageUsers",
        element: (<AdminRoute><ManageUsers></ManageUsers></AdminRoute>),
      },
      {
        path: "manageClasses",
        element: (<AdminRoute><ClassesPage></ClassesPage></AdminRoute>),
      },
    ]
  }
]);