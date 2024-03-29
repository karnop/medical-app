import Search from "@/components/frontend/search";
import TextTransitionn from "@/components/frontend/textTransition";

const Hero = () => {
    return (
        <>
            <div className=" relative pb-[50px] pt-[20px] dark:bg-dark lg:pt-[20px] max-w-6xl mx-auto">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="hero-content">
                                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-black sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                    <span>Book your professional</span> <span><TextTransitionn/></span> <span> session now!</span>
                                </h1>
                                <p className="mb-8 max-w-[480px] text-black">
                                    Health shouldn&apos;t be a puzzle! We are bringing you simple, affordable, and transparent healthcare.
                                </p>

                                <Search/>

                                {/*    Search bar here */}
                                {/*    CTA buttons */}
                                <ul className="flex flex-wrap items-center mt-5">
                                    <li>
                                        <a
                                            href="/#"
                                            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-500 hover:duration-500 lg:px-7"
                                        >
                                            Need a Doctor Urgently!
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/#"
                                            className="inline-flex items-center justify-center px-5 py-3 text-center text-black bg-gray-200 rounded-md mx-4 font-medium hover:text-black hover:bg-gray-300 hover:duration-500"
                                        >
                                            Need a prescription refill
                                        </a>
                                    </li>
                                </ul>

                                <div className={"py-4 mt-4 flex gap-6"}>
                                    <div className="flex flex-col items-center">
                                        <span className="font-bold text-gray-800">600+</span>
                                        <span className="text-sm text-black">Active Specialists</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="font-bold text-gray-800">18000+</span>
                                        <span className="text-sm text-black">Active Patients</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12"></div>
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <img
                                        src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                                        alt="hero"
                                        className="max-w-full lg:ml-auto"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
