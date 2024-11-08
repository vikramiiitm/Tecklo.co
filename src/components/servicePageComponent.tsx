// components/Service.tsx


"use client"
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import CTAButton from "@/components/CTAButton";

interface ServiceProps {
    title: string;
    description: string;
    features: string[];
    img:string
}

const ServicePageComponent: React.FC<ServiceProps> = ({ title, description, features,img }) => {
    return (
        <div>

            <section className=" overflow-hidden h-96 relative pt-10">
                <div className=" ">
                    <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-20 -z-10 h-[1000px] w-full fill-purple-500/[0.2] stroke-purple-900/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] "
                    >
                        <rect
                            width="100%"
                            height="100%"
                            fill="url(#:r0:)"
                            strokeWidth="2"
                        ></rect>
                        <svg x="50%" y="-96" strokeWidth="2" className="overflow-visible group-hover:fill-purple-300 transition-all duration-300">
                            <path
                                transform="translate(64 160)"
                                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                            ></path>
                            <path
                                transform="translate(128 320)"
                                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                            ></path>
                            <path
                                transform="translate(288 480)"
                                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                            ></path>
                            <path
                                transform="translate(512 320)"
                                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                            ></path>
                            <path
                                transform="translate(544 640)"
                                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                            ></path>
                            <path
                                transform="translate(320 800)"
                                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                            ></path>
                        </svg>
                        <defs>
                            <pattern
                                id=":r0:"
                                width="96"
                                height="480"
                                x="50%"
                                patternUnits="userSpaceOnUse"
                                patternTransform="translate(0 -95)"
                                fill="none"
                            >
                                <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
                            </pattern>
                        </defs>
                    </svg>
                </div>
                <div className="justify-center items-center flex flex-col gap-4 mt-4 h-full max-w-5xl mx-auto bg-transparent">
                    <Fade direction="left">
                        <h1 className="text-gray-700 font-bold text-4xl lg:text-7xl text-center ">
                            Application <span className="text-purple-500"> Programming Interface </span>(API)
                        </h1>
                    </Fade>
                    {/* <Fade direction="right">
                        <p className="text-base font-medium text-gray-600 text-center max-w-7xl px-5 mx-auto">
                            At Tecklo, we provide all the essential services and tools for new startups to launch successfully and grow sustainably, from innovative marketing to powerful software solutions—bringing your vision to life.
                        </p>
                    </Fade> */}
                </div>
            </section>
        
        
          <section className="border ">
                <div className="max-w-6xl py-10 flex flex-col lg:flex-row mx-auto gap-4 items-center rounded-lg p-4 ">
                        <Image src={img} alt={title} width="1000"height="1000" className="h-96 object-cover rounded  w-full lg:w-[40vw]" />

                    <div> <h2 className="text-xl font-bold mb-2 mt-6">{title}</h2>
                        <p className="mb-4">{description}</p>
                        <ol className=" pl-5">
                            {features.map((feature, index) => (
                                <div key={index} dangerouslySetInnerHTML={{ __html: feature }} />
                            ))}
                        </ol>
                        
                        </div>
                </div>
                        <CTAButton />
          </section>
        
        </div>
    );
};

export default ServicePageComponent;
