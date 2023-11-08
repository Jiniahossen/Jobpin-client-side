import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/Authprovider";
import { useLoaderData } from "react-router-dom";
import PdfGenerator from "../Components/PdfGenerator";
// import PdfGenerator from "../Components/PdfGenerator";


const Appliedjobs = () => {
    const [myItems, setMyItems] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const { user } = useContext(AuthContext);
    const email = user.email;
    console.log(email);
    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        const filteredData = data.filter(data => data.email === email);
        setMyItems(filteredData)
    }, [email, data]);

    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter((job) => {
        return job?.jobcategory?.toLowerCase().includes(searchTerm.toLowerCase());
    });


    return (
        <div className=" mb-20">
            <div className="max-w-4xl mx-auto mt-20">
                <div className="flex mb-16  max-w-md ">
                    <input
                        type="text"
                        placeholder="Search by category"
                        list="browsers"
                        className="input input-bordered input-primary w-full max-w-4xl"
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                        onClick={() => { }}
                    />
                    <datalist id="browsers">
                        <option value="On site"></option>
                        <option value="Remote"></option>
                        <option value="Part-Time"></option>
                        <option value="Hybrid"></option>
                        <option value="Project-Based"></option>
                    </datalist>

                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="text-[10px] md:text-lg font-serif font-light text-black">
                            <tr>
                                <th>Category</th>
                                <th>Job Title</th>
                                <th>Salary-Range</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody className="text-xs md:text-sm">
                            {filteredData.map((job) => (
                                <tr key={job._id}>
                                    <td>{job.jobcategory}</td>
                                    <td>{job.jobtitle}</td>
                                    <td>${job.salaryrange}</td>
                                    <td>
                                        {/* Use PdfGenerator component to generate PDFs */}
                                        <PdfGenerator job={job} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default Appliedjobs;