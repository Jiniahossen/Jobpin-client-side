import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import Comapnies from "../Components/Comapnies";
import HeroSection from "../Components/HeroSection";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ClientSection from '../Components/ClientSection';

const Home = () => {
    const data = useLoaderData();

    const jobCategories = Array.from(new Set(data.map((job) => job.jobcategory)))

    const [selectedTab, setSelectedTab] = React.useState("All");

    return (
        <div className="">
            <div>
                <HeroSection></HeroSection>
            </div>
            <div>
                <Comapnies></Comapnies>
            </div>
            <div>
                <h1 className="text-4xl font-serif font-semibold text-center my-20">
                    Job Posts by Category
                </h1>
                <div className=' max-w-6xl mx-auto'>
                    <Tabs className=''>
                        <TabList className=" text-base flex space-x-4 mb-6 font-serif justify-center flex-wrap gap-4">
                            <Tab
                                key="All"
                                className={`bg-[#3748ff] text-white p-1 rounded cursor-pointer ${selectedTab === "All" ? "react-tabs__tab--selected" : ""}`}
                                onClick={() => setSelectedTab("All")}
                            >
                                All
                            </Tab>
                            {jobCategories.map((category) => (
                                <Tab
                                    key={category}
                                    className={`bg-[#3748ff] text-white p-1 rounded cursor-pointer text-xm ${selectedTab === category ? "react-tabs__tab--selected" : ""}`}
                                    onClick={() => setSelectedTab(category)}
                                >
                                    {category}
                                </Tab>
                            ))}
                        </TabList>
                        <TabPanel key="All">
                            <div className='  grid grid-cols-1 lg:grid-cols-2 gap-6 my-10'>
                                {data.map((job) => (
                                    <div key={job._id}>
                                        <div className="card card-side bg-base-100 shadow-xl">
                                        <div className=' w-60'>
                                                    <figure><img src={job.img} alt="Movie" className=' w-60' /></figure>
                                                    </div>
                                            <div className="card-body">
                                                <h2 className="text-lg font-serif font-semibold">{job.jobtitle}</h2>
                                                <h2 className=" font-serif">Category:{job.jobcategory}</h2>
                                                <p className=' font-serif'>Salary range:{job.salaryrange}</p>
                                                <div className="card-actions">
                                                    <Link to={`/job/${job._id}`}><button className="px-2 py-1 bg-[#3748ff] rounded-sm text-base font-serif text-white">View Now</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        {jobCategories.map((category) => (
                            <TabPanel key={category}>
                                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-6 my-10'>
                                    {data
                                        .filter((job) => job.jobcategory === category)
                                        .map((job) => (
                                            <div key={job._id}>
                                                <div className="card card-side bg-base-100 shadow-xl">
                                                    <div className=' w-60'>
                                                    <figure><img src={job.img} alt="Movie" className=' w-60' /></figure>
                                                    </div>
                                                    <div className="card-body">
                                                        <h2 className="text-lg font-serif font-semibold">{job.jobtitle}</h2>
                                                        <h2 className=" font-serif">Category:{job.jobcategory}</h2>
                                                        <p className=' font-serif'>Salary range:{job.salaryrange}</p>
                                                        <div className="card-actions">
                                                            <Link to={`/job/${job._id}`}><button className="px-2 py-1 bg-[#3748ff] rounded-sm text-base font-serif text-white">View Now</button></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}
                                </div>
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>
            </div>
            <div>
                <ClientSection></ClientSection>
            </div>
        </div>
    );
};

export default Home;
