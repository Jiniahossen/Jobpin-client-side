

const ClientSection = () => {
    return (
        <div className=" max-w-5xl mx-auto my-20">
            <div className=" flex flex-col lg:flex-row justify-between items-center">
                <div>
                    <img src="https://i.ibb.co/7yC220p/jobest-landing-page.jpg" alt="" className=" w-[600px]" />
                </div>
                <div>
                    <h1 className=" text-2xl font-serif font-semibold text-[#3748ff]">Find your passion and <br />
                        achieve success</h1>
                    <p className=" text-base font-serif">find a job that suits your interests and talents.
                        A high salary is not the top priority. Most importantly,
                        You can work according to your hearts desire.</p>
                </div>
            </div>
            <div className=" flex flex-col-reverse lg:flex-row justify-between items-center mt-10">
                <div>
                    <h1 className=" text-2xl font-serif font-semibold text-[#3748ff]">Millions of Jobs,find<br />
                     the one that right for you</h1>
                    <p className=" text-base font-serif">find a job that suits your interests and talents.
                        A high salary is not the top priority. Most importantly,
                        You can work according to your hearts desire.</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/7yC220p/jobest-landing-page.jpg" alt="" className=" w-[600px]" />
                </div>
            </div>
        </div>
    );
};

export default ClientSection;