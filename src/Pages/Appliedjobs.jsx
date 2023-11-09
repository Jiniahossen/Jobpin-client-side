import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/Authprovider";
import { useLoaderData } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import Modal from "react-modal";
import PdfGenerator from "../Components/PdfGenerator";
import {RxCross1} from 'react-icons/rx'

Modal.setAppElement("#root");

const Appliedjobs = () => {
    const [myItems, setMyItems] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const { user } = useContext(AuthContext);
    const email = user.email;
    const data = useLoaderData();

    useEffect(() => {
        const filteredData = data.filter(data => data.email === email);
        setMyItems(filteredData);
    }, [email, data]);

    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter((job) => {
        return job?.jobcategory?.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const [generatePdf, setGeneratePdf] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const togglePdfGeneration = (job) => {
        setSelectedJob(job);
        setGeneratePdf(true);
    };

    const closeModal = () => {
        setGeneratePdf(false);
        setSelectedJob(null);
    };

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
                                        <button
                                            className="px-2 bg-[#3748ff] text-white font-serif"
                                            onClick={() => togglePdfGeneration(job)}
                                        >
                                            PDF
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                isOpen={generatePdf}
                onRequestClose={closeModal}
                contentLabel="Job PDF Viewer"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        transform: 'translate(-50%, -50%)',
                        height: '80%',
                        width: '80%',

                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.6)'
                    }
                }}
            >
                <button onClick={closeModal} className=" justify-end items-end text-xl lg:text-2xl text-red-600 font-extrabold mb-4"><RxCross1></RxCross1></button>
                {generatePdf && (
                    <PDFViewer style={{ width: '100%', height: '100%' }}>
                        <PdfGenerator job={selectedJob} />
                    </PDFViewer>
                )}
            </Modal>

        </div>
    );
};

export default Appliedjobs;
