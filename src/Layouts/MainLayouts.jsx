import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayouts = () => {
    return (
        <div>
            <div >
                <Navbar>
                    <Outlet></Outlet>
                </Navbar>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayouts;