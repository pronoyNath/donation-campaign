import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../assets/Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/donations',
                element: <div>donat</div>
            },
            {
                path: '/statistics',
                element: <div>stsatat</div>
            }
        ]
    }
])

export default router;