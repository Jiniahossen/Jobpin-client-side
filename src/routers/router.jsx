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
import PrivateRoute from "../provider/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Errorpage></Errorpage>,
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader:()=>fetch('https://apply4you-server.vercel.app/jobs')
            },
            {
                path: '/all-jobs',
                element: <Alljobs></Alljobs>,
                loader:()=>fetch('https://apply4you-server.vercel.app/jobs')
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/add-jobs',
                element:<PrivateRoute> <Addjobs></Addjobs></PrivateRoute>
            },
            {
                path: '/my-jobs',
                element: <PrivateRoute><Myjobs></Myjobs></PrivateRoute>,
                loader:()=>fetch('https://apply4you-server.vercel.app/jobs')
            },
            {
                path: '/applied-jobs',
                element: <PrivateRoute><Appliedjobs></Appliedjobs></PrivateRoute>,
                loader:()=>fetch('https://apply4you-server.vercel.app/applied-jobs')
            },
            {
                path:'/job/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader:()=>fetch('https://apply4you-server.vercel.app/jobs')
            },
            {
                path:'/update/:id',
                element:<PrivateRoute><UpdateJobs></UpdateJobs></PrivateRoute>,
                loader:({params})=>fetch(`https://apply4you-server.vercel.app/jobs${params.id}`)
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