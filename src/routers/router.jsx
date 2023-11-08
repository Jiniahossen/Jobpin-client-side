import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Errorpage from "../Pages/Errorpage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Blogs from "../Pages/Blogs";
import Addjobs from "../Pages/Addjobs";
import Myjobs from "../Pages/Myjobs";
import Appliedjobs from "../Pages/Appliedjobs";
import Alljobs from "../Pages/Alljobs";
import Details from "../Pages/Details";
import UpdateJobs from "../Pages/UpdateJobs";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Errorpage></Errorpage>,
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader:()=>fetch('http://localhost:5000/jobs')
            },
            {
                path: '/all-jobs',
                element: <Alljobs></Alljobs>,
                loader:()=>fetch('http://localhost:5000/jobs')
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/add-jobs',
                element: <Addjobs></Addjobs>
            },
            {
                path: '/my-jobs',
                element: <Myjobs></Myjobs>,
                loader:()=>fetch('http://localhost:5000/jobs')
            },
            {
                path: '/applied-jobs',
                element: <Appliedjobs></Appliedjobs>,
                loader:()=>fetch('http://localhost:5000/applied-jobs')
            },
            {
                path:'/job/:id',
                element:<Details></Details>,
                loader:()=>fetch('http://localhost:5000/jobs')
            },
            {
                path:'/update/:id',
                element:<UpdateJobs></UpdateJobs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }

]);

export default router;