import { Link, useLoaderData } from "react-router-dom";

const Alljobs = () => {
    const data = useLoaderData();
    console.log(data)

    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    };

    return (
        <div className="mt-20">
            <div className="max-w-6xl mx-auto">
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
                        {data.map((job) => (
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
