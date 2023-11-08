import {AiOutlineSearch}  from 'react-icons/ai';
import { Link, useLoaderData } from "react-router-dom";
import AllJobBanner from "../Components/AllJobBanner";
import { useState } from 'react';

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

            <div className="max-w-4xl mx-auto mt-20">
                <div className="flex-wrap lg:flex mb-16 mx-auto w-full">
                    <input
                        type="text"
                        placeholder="Type here"
                        className=" border border-[#3748ff] w-80 lg:w-96 p-0 lg:p-1 rounded-sm"
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                    />
                    <button className="text-sm bg-[#3748ff] text-white font-serif px-2 rounded-sm py-2" onClick={() => { }}>
                       <AiOutlineSearch></AiOutlineSearch>
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="text-[10px] md:text-lg font-serif font-light text-black">
                            <tr>
                                <th>Name</th>
                                <th>Job Title</th>
                                <th>Deadline</th>
                                <th>Salary-Range</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-xs md:text-sm">
                            {filteredData.map((job) => (
                                <tr key={job._id}>
                                    <td>
                                        <div className="flex flex-col md:flex-row items-center md:space-x-3">
                                            <div className="font-bold">{job.username}</div>
                                        </div>
                                    </td>
                                    <td>{job.jobtitle}</td>
                                    <td>{formatDate(job.applicationDeadline)}</td>
                                    <td>${job.salaryrange}</td>
                                    <th>
                                        <Link to={`/job/${job._id}`}>
                                            <button className="text-[10px] md:text-lg text-white font-serif font-normal px-1 py-1 rounded-sm bg-[#3748ff]">
                                                view
                                            </button>
                                        </Link>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default Alljobs;
