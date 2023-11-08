import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location=useLocation()
    console.log(user);

    if (loading) {
        return <div className="  flex justify-center text-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (!user?.email) {
        return <Navigate state={location.pathname} to='/login'>
            {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "please login first!",
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        </Navigate>
    }

    return children;
};

export default PrivateRoute;