import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLayouts = () => {
    return (
        <div>
            <div >
                <Navbar>
                    <Outlet></Outlet>
                </Navbar>
            </div>
        </div>
    );
};

export default MainLayouts;