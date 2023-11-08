const HeroSection = () => {
    return (
        <div className="bg-[#f4ebf6] mb-20 pt-6 ">
            <div className=" items-center flex flex-col lg:flex-row justify-between max-w-6xl mx-auto">
            <div className="">
                <h1 className=" text-4xl lg:text-6xl font-serif font-semibold">Millions of jobs <br /> for you <br />
                    <span className=" text-[#3748ff] font-semibold">
                        verified by us.
                    </span></h1>
                    <div className=" bg-white ms-14  ps-10 pt-6 pb-4 pe-10 mt-6 shadow-xl w-60 rounded-lg">
                    <h1 className=" font-serif mb-2 ms-2">10k+ Particients</h1>
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
            <div>
                <img src="https://i.ibb.co/y8SF2nQ/portrait-businesswoman-pointing-finger-left-showing-corporate-banner-logo-standing-brown-suit-remove.pngs" alt="" className=" w-96 h-96" />
            </div>
            </div>

        </div>
    );
};

export default HeroSection;