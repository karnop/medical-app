import React, { useState } from "react";
import Search from "@/components/frontend/search";

const Hero = () => {
    return (
        <>
            <div className="relative pb-[50px] pt-[50px] dark:bg-dark lg:pt-[50px] max-w-6xl mx-auto">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="hero-content">
                                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-black sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                    Kickstart Startup Website with TailGrids
                                </h1>
                                <p className="mb-8 max-w-[480px] text-black">
                                    With TailGrids, business and students thrive together.
                                    Business can perfectly match their staffing to changing demand
                                    throughout the dayed.
                                </p>
                                {/*    Search bar here */}
                                {/*    CTA buttons */}
                                <ul className="flex flex-wrap items-center">
                                    <li>
                                        <a
                                            href="/#"
                                            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-500 hover:duration-500 lg:px-7"
                                        >
                                            Get Started
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/#"
                                            className="inline-flex items-center justify-center px-5 py-3 text-center text-black bg-gray-200 rounded-md mx-4 font-medium hover:text-black"
                                        >
                                            Download App
                                        </a>
                                    </li>
                                </ul>

                                <Search/>

                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12"></div>
                        <div className="w-full px-4 lg:w-6/12">
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

const SingleImage = ({ href, imgSrc } : {href : string, imgSrc : string} ) => {
    return (
        <>
            <a href={href} className="flex w-full items-center justify-center">
                <img src={imgSrc} alt="brand image" className="h-10 w-full" />
            </a>
        </>
    );
};

