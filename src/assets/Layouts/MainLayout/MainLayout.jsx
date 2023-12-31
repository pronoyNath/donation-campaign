import { Outlet } from "react-router-dom";
import Navbar from "../../../Components/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-[1370px] mx-auto px-5 md:px-14 lg:px-20">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;