import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";
import Swal from "sweetalert2";

const RegisterForm = () => {
    const { createUser, handleProfileUpdate } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);

        if (password.length < 6) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Password must have at least 6 characters',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/')
            return;
        }
        createUser(email, password)
            .then((userResult) => {
                console.log(userResult.user);
                return handleProfileUpdate(name, img);
            })
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Register successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });

    }
    return (
        <div>
            <div >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="text-base font-serif">
                                <h2>Already have an account? <span className=" text-[#3748ff]"> <Link to={'/login'}>Login</Link></span></h2>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-[#3748ff] btn text-white hover:bg-[#3748ff] hover:text-white">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RegisterForm;