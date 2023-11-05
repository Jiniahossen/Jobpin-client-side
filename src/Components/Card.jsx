import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../provider/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";


const Card = ({ data }) => {
    const [currentTimestamp, setCurrentTimestamp] = useState(Date.now());
    const [deadlinePassed, setDeadlinePassed] = useState(false);

    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    const userName = user.displayName;

    const { applicationDeadline, email, img, jobcategory, jobrequirments, _id, jobtitle, salaryrange, username, applicantsNumber } = data || {};


    const handleApplyButton = (e) => {
        e.preventDefault();
        const form = e.target;

        const applieddata = {
            userEmail, userName,
            resumeLink: form.resumeLink.value
        }

        fetch('http://localhost:5000/applied-jobs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(applieddata)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product added successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                console.log(data)
            })
    }

    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    };

    return (
        <div className="gap-6 flex-none md:flex max-w-6xl mx-auto mt-20">

            <div className="border border-black flex-1 ">
                <img src={img} alt="" className=" h-full" />
            </div>
            <div className="border border-black flex-1 p-4">
                <h1 className=" text-4xl font-serif font-normal mb-6">{jobtitle}</h1>
                <p className=" text-base font-serif font-medium mb-6">{jobrequirments}</p>
                <h1 className="text-base font-serif font-semibold mb-4">Category: {jobcategory}</h1>
                <h1 className="text-base font-serif font-semibold mb-4">salary: ${salaryrange}</h1>
                <h1 className="text-base font-serif font-semibold mb-4">Application Deadlin Till: <span className=" text-base font-serif font-semibold text-blue-500">{formatDate(applicationDeadline)}</span></h1>
                <h1 className="text-base font-serif font-semibold mb-4">Number of Applicants:{applicantsNumber}</h1>
                <div>
                    {deadlinePassed ? (
                        <span>The deadline is over. Applications are closed.</span>
                    ) : (
                        <div>
                            <button className="text-lg text-white font-serif bg-[#f47723] px-4 py-1" onClick={() => document.getElementById('my_modal_5').showModal()}>Apply</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <div className="modal-action  justify-center">
                                        <form method="dialog" onSubmit={handleApplyButton}>
                                            <div>
                                                <label className="label">
                                                    <span className=" font-serif">User Name</span>
                                                </label>
                                                <input type="text" defaultValue={userName} name="username" className="input border border-black input-sm  lg:w-96 md:w-72 w-full" />
                                            </div>
                                            <div>
                                                <label className="label">
                                                    <span className=" font-serif">Email</span>
                                                </label>
                                                <input type="email" defaultValue={userEmail} name="usernames" className="input border border-black input-sm  lg:w-96 md:w-72 w-full" />
                                            </div>
                                            <div>
                                                <label className="label">
                                                    <span className=" font-serif">Resume Link</span>
                                                </label>
                                                <input type="text" placeholder="link" name="resumeLink" className="input border border-black input-sm  lg:w-96 md:w-72 w-full" />
                                            </div>
                                            <button className=" text-lg text-white font-serif bg-[#f47723] px-4 py-1 mt-6">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Card;


{/* <Link to={`/details/${_id}`}>
<button type="button" className="text-lg text-white font-serif bg-[#f47723] px-4">
    Apply
</button>
</Link> */}