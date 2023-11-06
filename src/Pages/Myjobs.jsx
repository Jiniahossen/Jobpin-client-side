import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Myjobs = () => {

    const [myItems, setMyItems] = useState();
    const { user } = useContext(AuthContext);
    const email = user.email;
    console.log(email);
    const data = useLoaderData();
    console.log(data);

    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    };

    useEffect(() => {
        const filteredData = data.filter(data => data.email === email);
        setMyItems(filteredData)
    }, [email, data]);
    return (
        <div className=" my-32">
            <div className="max-w-5xl mx-auto">
                {myItems && myItems.length > 0 ? (
                    <table className="table ">
                        <thead className=" text-lg font-serif font-light text-black">
                            <tr>
                                <th>Name</th>
                                <th>Job Title</th>
                                <th>Application Deadline</th>
                                <th>Salary Range</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {myItems.map((job) => (
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
                                        <Link to={`/update/${job._id}`}>
                                            <button className="text-base font-serif font-normal px-2 py-1 me-4 rounded-sm bg-green-600 text-white">Update</button>
                                        </Link>
                                        <Link>
                                            <button className="text-base font-serif font-normal px-2 py-1 rounded-sm bg-red-600 text-white">Delete</button>
                                        </Link>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-2xl md:text-6xl text-center my-20">You have not added any job post yet!</p>
                )}
            </div>

        </div>
    );
};

export default Myjobs;