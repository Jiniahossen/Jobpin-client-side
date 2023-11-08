import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";
import Swal from "sweetalert2";

const LoginForm = () => {
    const { logIn } = useContext(AuthContext);
    const location=useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must have at least 6 characters!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }

        logIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location?.state :'/');
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: 'top-center',
                    icon: 'warning',
                    title: 'Invalid Password or Email! ',
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }

    return (
        <div>
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="text-base font-serif">
                                <h2>Do not have any account? <span className="text-[#b50b82]"> <Link to={'/register'}>Register</Link></span></h2>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-[#b50b82] btn text-white hover:bg-[#b50b82] hover:text-white">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
