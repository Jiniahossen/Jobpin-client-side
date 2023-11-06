
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/Authprovider";
// import axios from "axios";
import Swal from "sweetalert2";


const Addjobs = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [applicationDeadline, setApplicationDeadline] = useState(new Date());


    const { user } = useContext(AuthContext);
    const email = user.email;
    const username = user.displayName;
    const userProfile=user.photoURL;

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;

        const addedData = {
            jobtitle: form.jobtitle.value || "not given",
            jobcategory: form.jobcategory.value || "not given",
            salaryrange: form.salaryrange.value || "not given",
            img: form.img.value || "not given",
            postingDate: startDate,
            applicationDeadline: applicationDeadline,
            applicantsNumber: form.applicantsNumber.value,
            jobrequirments:form.jobrequirments.value,
            email, username,userProfile
        }


        console.log(addedData);

        fetch('http://localhost:5000/jobs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addedData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire({
                        position:'top-center',
                        icon: 'success',
                        title: 'Product added successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                console.log(data)
            })

        // axios.post('', addedData)
        //     .then((res) => {
        //         console.log(res.data)
        //         if (res.acknowledged===true) {
        //             Swal.fire({
        //                 position: 'top-center',
        //                 icon: 'success',
        //                 title: 'Product added successfully!',
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             })
        //         }
        //     })

    }
    return (
        <div>
            <div className=" max-w-6xl mx-auto  my-28">

                <div>
                    <h1 className=" font-serif font-semibold text-3xl text-center mb-10">Add Your Job Post Here!</h1>
                </div>

                <form onSubmit={handleAddProduct} className=" w-full md:max-w-5xl md:mx-auto border  shadow-md lg:p-10 md:ps-10 p-10 ">
                    <div className=" md:flex lg:gap-20 md:gap-4 w-full mb-4">
                        <div>
                            <label className="label">
                                <span className=" font-serif ">Job Cover Image</span>
                            </label>
                            <input type="text" placeholder="URL" name="img" className="input border border-black input-sm lg:w-96 md:w-72 w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className=" font-serif">User NAme</span>
                            </label>
                            <input type="text" defaultValue={username} name="usernames" className="input border border-black input-sm  lg:w-96 md:w-72 w-full" />
                        </div>
                    </div>
                    <div className=" md:flex lg:gap-20 md:gap-4 w-full mb-4">
                        <div>
                            <label className="label">
                                <span className=" font-serif ">Job Title</span>
                            </label>
                            <input type="text" placeholder="Job Title" name="jobtitle" className="input border border-black input-sm lg:w-96 md:w-72 w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className=" font-serif">Job Category</span>
                            </label>
                            <input type="text" list="browsers" placeholder="Job category" name="jobcategory" className="input border border-black input-sm  lg:w-96 md:w-72 w-full" />
                            <datalist id="browsers">
                                <option value="On site"></option>
                                <option value="Remote"></option>
                                <option value="Part-Time"></option>
                                <option value="Hybrid"></option>
                                <option value="Project-Based"></option>
                            </datalist>
                        </div>
                    </div>
                    <div className=" md:flex lg:gap-20 md:gap-4 w-full mb-4">
                        <div>
                            <label className="label">
                                <span className=" font-serif ">Salary Range</span>
                            </label>
                            <input type="text" placeholder="type" name="salaryrange" className="input border border-black input-sm lg:w-96 md:w-72 w-full" />
                        </div>
                        <div>
                            <label className="label col-form-label" onClick={Date}>
                                <span className=" font-serif">Job Posting Date</span>
                            </label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                    </div>
                    <div>
                        <div className=" md:flex lg:gap-20 md:gap-4 w-full mb-4">
                            <div>
                                <label className="label">
                                    <span className=" font-serif ">Job Applicants No</span>
                                </label>
                                <input type="text" defaultValue={0} name="applicantsNumber" className="input border border-black input-sm lg:w-96 md:w-72 w-full" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className=" font-serif">Application Deadline</span>
                                </label>
                                <DatePicker selected={applicationDeadline} onChange={(date) => setApplicationDeadline(date)}
                                    dateFormat="dd/MM/yyyy"
                                />
                                {/* <DatePicker selected={formData.applicationDeadline} onChange={(date) => setFormData({ ...formData, applicationDeadline: date })} /> */}
                            </div>

                        </div>
                        <div>
                            <div>
                                <label className="label">
                                    <span className=" font-serif ">Job Requirments</span>
                                </label>
                                <input type="text" placeholder="Requirments" name="jobrequirments" className="input border border-black input-sm  w-full" />
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className=" pt-6 text-center font-serif">
                        <button className="w-full  bg-[#f47723] text-white py-2 rounded-md">Publish Job</button>
                    </div>

                </form>

            </div >
        </div >

    );
};

export default Addjobs;