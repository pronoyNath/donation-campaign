import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../assets/Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import Donations from "../Pages/Donations/Donations";
import DonationsDetails from "../Pages/DonationsDetails/DonationsDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/donation.json')
            },
            {
                path: '/donations',
                element: <Donations></Donations>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/donation/:id',
                element: <DonationsDetails></DonationsDetails>,
                loader: ()=>fetch('/donation.json')
            }
        ]
    }
])

export default router;