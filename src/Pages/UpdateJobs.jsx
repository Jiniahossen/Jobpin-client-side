import { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/Authprovider";
import { useLoaderData } from "react-router-dom";

const UpdateJobs = () => {
    // const [startDate, setStartDate] = useState(new Date());
    // const [applicationDeadline, setApplicationDeadline] = useState(new Date());
 
    const data=useLoaderData();
    console.log(data)

    const{username,jobtitle,img,jobcategory,salaryrange,applicantsNumber,postingDate}=data ||{};
    console.log(data)

    const { user } = useContext(AuthContext);
    const email = user.email;
    const userName = user.displayName;
    
    // const handleUpdateProduct = (e) => {
    //     e.preventDefault();
    //     const form = e.target;

    //     const updatedData = {
    //         jobtitle: form.jobtitle.value || "not given",
    //         jobcategory: form.jobcategory.value || "not given",
    //         salaryrange: form.salaryrange.value || "not given",
    //         img: form.img.value || "not given",
    //         postingDate:startDate,
    //         applicationDeadline:applicationDeadline,
    //         applicantsNumber: form.applicantsNumber.value,
    //         email, username ,

    //     }
    // }

    return (
        <div>
            <div>
                <div className=" max-w-6xl mx-auto  mt-28">

                    <div>
                        <h1 className=" font-serif font-semibold text-3xl text-center mb-10">Add Your Product Here!</h1>
                    </div>

                    <form className=" w-full md:max-w-5xl md:mx-auto border  shadow-md lg:p-10 md:ps-10 ">
                        <div className=" md:flex lg:gap-20 md:gap-4 w-full mb-4">
                            <div>
                                <label className="label">
                                    <span className=" font-serif ">Job Cover Image</span>
                                </label>
                                <input type="text" defaultValue={img} name="img" className="input border border-black input-sm lg:w-96 md:w-72 w-full" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className=" font-serif">User Name</span>
                                </label>
                                <input type="text" defaultValue={userName} name="usernames" className="input border border-black input-sm  lg:w-96 md:w-72 w-full" />
                            </div>
                        </div>
                        <div className=" md:flex lg:gap-20 md:gap-4 w-full mb-4">
                            <div>
                                <label className="label">
                                    <span className=" font-serif ">Job Title</span>
                                </label>
                                <input type="text" defaultValue={jobtitle} name="jobtitle" className="input border border-black input-sm lg:w-96 md:w-72 w-full" />
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
                                {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                /> */}
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
                                    {/* <DatePicker selected={applicationDeadline} onChange={(date) => setApplicationDeadline(date)}
                                        dateFormat="dd/MM/yyyy"
                                    /> */}
                                    {/* <DatePicker selected={formData.applicationDeadline} onChange={(date) => setFormData({ ...formData, applicationDeadline: date })} /> */}
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
        </div>
    );
};

export default UpdateJobs;