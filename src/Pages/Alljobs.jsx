import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllJobBanner from "../Components/AllJobBanner";

const Alljobs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const data = useLoaderData();

    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    };

    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter((job) => {
        return job.jobtitle.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className=" mb-20">
            <div className=" shadow-md">
                <AllJobBanner></AllJobBanner>
            </div>

            <div className="max-w-6xl mx-auto mt-20">
                <div className=" flex mb-16 mx-auto">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-4xl"
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                    />
                    <button className="btn btn-outline btn-warning" onClick={() => {}}>
                        Search
                    </button>
                </div>

                <table className="table">
                    <thead className="text-lg font-serif font-light text-black">
                        <tr>
                            <th>Name</th>
                            <th>Job Title</th>
                            <th>Application Deadline</th>
                            <th>Salary Range</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((job) => (
                            <tr key={job._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{job.username}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{job.jobtitle}<br /></td>
                                <td>{formatDate(job.applicationDeadline)}</td>
                                <td>${job.salaryrange}</td>
                                <th>
                                    <Link to={`/job/${job._id}`}>
                                        <button className="text-base font-serif font-normal px-2 py-1 rounded-sm bg-[#f47723]">Details</button>
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alljobs;
