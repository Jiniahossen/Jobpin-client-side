

const Comapnies = () => {
    return (
        <div className=" flex flex-col lg:flex-row items-center max-w-7xl mx-auto p-10 gap-6">
            <div>
                <h1 className=" font-serif text-2xl text-start text-[#3748ff]">Companies we helped to grow:</h1>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                      <img src="https://i.ibb.co/nfCyw0H/googlelogo-color-92x30dp-removebg-preview.png" alt="" className=" w-40" />
                      <img src="https://i.ibb.co/G7Mk5Z4/8867-Microsoft-5-F00-Logo-2-D00-for-2-D00-screen-removebg-preview.png" alt="" className=" w-40 " />
                      <img src="https://i.ibb.co/CPx2rGB/a-generic-white-10-us-noto-email-v2016-us-main-CB627448186-removebg-preview.png" alt="" className=" w-40 " />
            </div>
        </div>
    );
};

export default Comapnies;