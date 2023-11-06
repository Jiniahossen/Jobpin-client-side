import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";
import Swal from "sweetalert2";



const Navbar = ({ children }) => {

    const { user, signout } = useContext(AuthContext);
    console.log(user);

    const navigate=useNavigate()

    const handleSignOutButton = () => {
        signout()
            .then(
                Swal.fire({
                    icon: 'error',
                    title: '',
                    text: 'Logged out successfully',
                    footer: '',
                  

                }),
                navigate('/')
            )
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: { error },
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })
    }

    return (
        <div className=" ">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar flex-1  shadow-md">
                        <div className=" w-[90%]  mx-auto">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2 ">
                                <div className="flex h-20 w-20">
                                    <img src="https://i.ibb.co/gVDtLNS/logo.png" className=" w-20" alt="" />
                                    {/* <h1 className=" text-[#f47723] font-extrabold font-serif text-2xl">Apply4you</h1> */}
                                </div>
                            </div>
                            <div className="flex-none  lg:block text-lg font-serif me-32 ">
                                <ul className=" menu-horizontal gap-6">
                                    {/* Navbar menu content here */}
                                    <div >
                                        <NavLink
                                            to="/"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1 bg-[#f47723] text-lg font-serif text-white" : ""
                                            }
                                        >
                                            Home
                                        </NavLink>
                                    </div>
                                    <div >
                                        <NavLink
                                            to="/all-jobs"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1 bg-[#f47723] text-lg font-serif text-white" : ""
                                            }
                                        >
                                            All Jobs
                                        </NavLink>
                                    </div>
                                    {

                                        user ? <div>
                                            <NavLink
                                                to="/applied-jobs"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1 bg-[#f47723] text-lg font-serif text-white" : ""
                                                }
                                            >
                                                Applied Jobs
                                            </NavLink>
                                        </div> : ''

                                    }
                                    {
                                        user ? <div>
                                            <NavLink
                                                to="/add-jobs"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1 bg-[#f47723] text-lg font-serif text-white" : ""
                                                }
                                            >
                                                Add  a Job
                                            </NavLink>
                                        </div> : ''
                                    }
                                    <div>
                                        {
                                            user ? <div>
                                                <NavLink
                                                    to="/my-jobs"
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1 bg-[#f47723] text-lg font-serif text-white" : ""
                                                    }
                                                >
                                                    My Jobs
                                                </NavLink>
                                            </div> : <div></div>
                                        }
                                    </div>
                                    <div>
                                        <NavLink
                                            to="/blogs"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1 bg-[#f47723] text-lg font-serif text-white" : ""
                                            }
                                        >
                                            Blogs
                                        </NavLink>
                                    </div>

                                </ul>
                            </div>

                            <div className="">
                                <div className=" items-end font-serif  text-sm">

                                    {
                                        user ?
                                            <div className="navbar-end flex gap-2">
                                                <img src={user.photoURL} className={`w-8 hover:${user.displayName} `} alt='' />
                                                <button className="bg-[#f47723] text-white px-2 py-1 font-serif" onClick={handleSignOutButton}>Logout</button>
                                            </div>
                                            :
                                            <div className="navbar-end flex gap-2">
                                                <Link to='/login'><button className="bg-[#f47723] text-white px-4 py-1 font-serif">Login</button></Link>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 gap-6 text-lg font-serif">
                        {/* Sidebar content here */}
                        <div >
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1 bg-[#f47723] text-lg font-serif text-white" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to="/all-jobs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "px-2 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-2 py-1 bg-[#f47723] text-lg font-serif text-white" : ""
                                }
                            >
                                All Jobs
                            </NavLink>
                        </div>

                        {

                            user ? <div>
                                <NavLink
                                    to="/applied-jobs"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1 bg-[#f47723] text-lg font-serif text-white" : ""
                                    }
                                >
                                    Applied Jobs
                                </NavLink>
                            </div> : ''

                        }
                        {
                            user ? <div>
                                <NavLink
                                    to="/add-jobs"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1 bg-[#f47723] text-lg font-serif text-white" : ""
                                    }
                                >
                                    Add  a Job
                                </NavLink>
                            </div> : ''
                        }
                        <div>
                            {
                                user ? <div>
                                    <NavLink
                                        to="/my-jobs"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1 bg-[#f47723] text-lg font-serif text-white" : ""
                                        }
                                    >
                                        My Jobs
                                    </NavLink>
                                </div> : <div></div>
                            }
                        </div>
                        <div>
                            <NavLink
                                to="/blogs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "px-4 py-1 bg-none text-lg font-serif text-black" : isActive ? "px-4 py-1 bg-[#f47723] text-lg font-serif text-white" : ""
                                }
                            >
                                Blogs
                            </NavLink>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;