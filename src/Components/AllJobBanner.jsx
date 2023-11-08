const AllJobBanner = () => {
    return (
        <div className="max-w-7xl justify-center text-center p-10 mx-auto md:flex md:justify-around items-center">

            <div className=" flex-1">
                <div>
                    <h1 className=" text-3xl md:text-7xl text-black font-serif font-semibold">Find Your <br />
                        <span className=" text-3xl md:text-7xl text-[#f47723] font-serif font-semibold "> Dream Job</span>
                    </h1>
                    <p className="text-base text-black font-serif font-light mt-4">Thousands of jobs here.Find your new Job Today!<br />
                        Posting new jobs everyday.
                    </p>
                </div>
                <div className=" ms-14  ps-10 pt-6 pb-4 pe-10 mt-6 shadow-xl w-60 rounded-lg">
                    <h1 className=" font-serif mb-2 ms-2">10k+ Job post</h1>
                    <div className="avatar-group -space-x-6">
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://i.ibb.co/DRbSmrL/7294793.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://i.ibb.co/wRQ57pm/7309687.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://i.ibb.co/8NGBwxq/7294787.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://i.ibb.co/LYdVQWd/9439678.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex-1">
                <img src="https://i.ibb.co/4KZNNPc/509.jpg" alt="" className=" h-96 justify-center items-center" />
            </div>

        </div>
    );
};

export default AllJobBanner;