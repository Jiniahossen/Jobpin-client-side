import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/Authprovider";
import {FcGoogle} from "react-icons/fc"


const IconLogin = () => {
    const {googleSignin} =useContext(AuthContext);
    const location=useLocation()
    const navigate=useNavigate()


    const handleGoogleSignin=(media)=>{
 

        media()
        .then(res=>{
            console.log(res.user);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Login successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(location?.state ? location?.state :'/')
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>

            <div >
                <button className="mt-4 font-serif px-4 py-1 text-4xl " onClick={()=>handleGoogleSignin(googleSignin)}><FcGoogle></FcGoogle></button>
            </div>
            
        </div>
    );
};

export default IconLogin;