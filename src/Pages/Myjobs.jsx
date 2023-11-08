import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdUpdate } from "react-icons/md"
import Swal from "sweetalert2";
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


    //delete operation
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobs/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error("Failed to delete job");
                        }
                        return res.json();
                    })
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your job post has been deleted.",
                                icon: "success"
                            })
                            setMyItems((prevItems) => prevItems.filter((item) => item._id !== id));
                        }
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            }
        });
    }
    
    return (
        <div className=" my-32">
            <div className="max-w-5xl mx-auto">
                {myItems && myItems.length > 0 ? (
                    <table className="table ">
                        <thead className=" text-[10px] md:text-lg font-serif font-light text-black">
                            <tr>
                                <th>Name</th>
                                <th>Job Title</th>
                                <th>Deadline</th>
                                <th>Salary-Range</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {myItems.map((job) => (
                                <tr key={job._id}>
                                    <td>
                                        <div className="flex items-center">
                                            <div>
                                                <div className=" text-[10px]  md:text-lg font-bold">{job.username}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-[12px]  md:text-base ">{job.jobtitle}<br /></td>
                                    <td className="text-[12px]  md:text-base ">{formatDate(job.applicationDeadline)}</td>
                                    <td className="text-[12px]  md:text-base ">${job.salaryrange}</td>
                                    <tr>
                                        <th>
                                            <Link to={`/update/${job._id}`}>
                                                <button className=" font-serif font-normal px-1 md:me-4 py-1 rounded-sm  text-green-700 text-lg lg:text-2xl"><MdUpdate></MdUpdate></button>
                                            </Link>

                                            <button onClick={() => handleDelete(job._id)} className=" font-serif  px-1 font-extrabold py-1 rounded-sm text-red-600 text-lg lg:text-2xl"><AiOutlineDelete></AiOutlineDelete></button>

                                        </th>
                                    </tr>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-2xl md:text-6xl text-center my-20">You have not post any job yet!</p>
                )}
            </div>

        </div>
    );
};

export default Myjobs;