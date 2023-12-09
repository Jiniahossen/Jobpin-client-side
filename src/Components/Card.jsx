import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../provider/Authprovider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
    const [deadlinePassed, setDeadlinePassed] = useState(false);
    const navigate=useNavigate();

    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    const userName = user.displayName;

    const { applicationDeadline, email, img, jobcategory, jobrequirments, _id, jobtitle, salaryrange, username, applicantsNumber } = data || {};

    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    };

    const handleApplicationButton = (e) => {
        e.preventDefault();
        const applyDate = new Date(applicationDeadline);
        const date = Date.now();
        const applicationDeadlineTime = applyDate.getTime();
        const nowDate = new Date(date).getTime();

        if (nowDate > applicationDeadlineTime) {
            setDeadlinePassed(true);
            return;
        } else if (userEmail === email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "You can't apply for your own job",
                footer: '<a href="">Why do I have this issue?</a>'
            });
        } else {
            document.getElementById('my_modal_5').showModal();
        }
    };

    const handleApplyButton = (e) => {
        e.preventDefault();
        const form = e.target;

        const applieddata = {
            userEmail, userName, jobtitle, salaryrange, img, jobcategory,
            resumeLink: form.resumeLink.value
        }

        fetch('https://apply4you-server.vercel.app/applied-jobs', {
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
                        title: 'Applied successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    document.getElementById('my_modal_5').close();
                }
            })
    };

    return (
        <div className="gap-6 flex-none md:flex max-w-6xl mx-auto mt-20">
            <div className="border border-black flex-1">
                <img src={img} alt="" className="h-full" />
            </div>
            <div className="border border-black flex-1 p-4">
                <h1 className="text-4xl font-serif font-normal mb-6">{jobtitle}</h1>
                <p className="text-base font-serif font-medium mb-6">{jobrequirments}</p>
                <h1 className="text-base font-serif font-semibold mb-4">Category: {jobcategory}</h1>
                <h1 className="text-base font-serif font-semibold mb-4">salary: ${salaryrange}</h1>
                <h1 className="text-base font-serif font-semibold mb-4">Application Deadlin Till: <span className="text-base font-serif font-semibold text-blue-500">{formatDate(applicationDeadline)}</span></h1>
                <h1 className="text-base font-serif font-semibold mb-4">Number of Applicants:{applicantsNumber}</h1>
                <div>
                    {deadlinePassed ? (
                          <span>
                          {Swal.fire({
                              icon: 'error',
                              title: 'Oops...',
                              text: "Deadline is over",
                              footer: '<a href="">Why do I have this issue?</a>'
                          })}
                          {
                              navigate(`/job/${_id}`)
                          }
                      </span>
                    ) : (
                        <div>
                            <button className="text-lg text-white font-serif bg-[#3748ff] px-4 py-1" onClick={handleApplicationButton}>Apply</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <div className="modal-action justify-center">
                                        <form method="dialog" onSubmit={handleApplyButton}>
                                            <div>
                                                <label className="label">
                                                    <span className="font-serif">User Name</span>
                                                </label>
                                                <input type="text" defaultValue={userName} name="username" className="input border border-black input-sm lg:w-96 md:w-72 w-full" />
                                            </div>
                                            <div>
                                                <label className="label">
                                                    <span className="font-serif">Email</span>
                                                </label>
                                                <input type="email" defaultValue={userEmail} name="usernames" className="input border border-black input-sm lg:w-96 md:w-72 w-full" />
                                            </div>
                                            <div>
                                                <label className="label">
                                                    <span className="font-serif">Resume Link</span>
                                                </label>
                                                <input type="text" placeholder="link" name="resumeLink" className="input border border-black input-sm lg:w-96 md:w-72 w-full" />
                                            </div>
                                            <button className="text-lg text-white font-serif bg-[#3748ff] px-4 py-1 mt-6">Submit</button>
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
