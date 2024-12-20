import Image from 'next/image';
import React from 'react'


import Sky1 from '@/assets/images/sk1.png'
import Sky2 from '@/assets/images/sk2.png'
import St1 from '@/assets/images/st1.png'
import St2 from '@/assets/images/st2.png'
import Wd1 from '@/assets/images/wd1.png'
import Wd2 from '@/assets/images/wd2.png'

import A1 from '@/assets/images/A1.png'
import A2 from '@/assets/images/A2.png'
import B1 from '@/assets/images/B1.png'
import B2 from '@/assets/images/B2.png'
import C1 from '@/assets/images/C1.png'
import C2 from '@/assets/images/C2.png'
import D1 from '@/assets/images/D1.png'
import D2 from '@/assets/images/D2.png'
import E1 from '@/assets/images/E1.png'
import E2 from '@/assets/images/E2.png'
import F1 from '@/assets/images/F1.png'
import F2 from '@/assets/images/F2.png'
import G1 from '@/assets/images/G1.png'
import G2 from '@/assets/images/G2.png'
import H1 from '@/assets/images/H1.png'
import H2 from '@/assets/images/H2.png'
import I1 from '@/assets/images/I1.png'
import I2 from '@/assets/images/I2.png'
import J1 from '@/assets/images/J1.png'
import J2 from '@/assets/images/J2.png'
import AP1 from '@/assets/images/ap1.jpg'
import AP2 from '@/assets/images/ap2.jpg'



import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Our Work | Tecklo",
  description: "Delivering impactful IT solutions, from custom software to web and mobile apps, driving business growth and innovation.",
};






const Project = [
  
  
  {
    projectName: "Sweepy Maid",
    projectDescription:
      "Professional and Quality Home Cleaning Service Company in Vancouver",
    img1: A1,
    img2: A2,
  },
  {
    projectName: "Pho 68",
    projectDescription:
      "Vietnamese cuisine features a unique blend of five fundamental tastes, with each dish offering distinct flavors. Common ingredients include shrimp paste, fish sauce, rice, fresh herbs, fruits, and vegetables.",
    img1: B1,
    img2: B2,
  },
  {
    projectName: "HAVELI BISTRO",
    projectDescription:
      "Indulge in a culinary journey at Haveli Bistro, where each dish blends traditional Indian flavors with modern flair. Our diverse menu promises mouth-watering dishes for every occasion.",
    img1: C1,
    img2: C2,
  },
  {
    projectName: "PARATHA 2 PASTA",
    projectDescription:
      "We use the best quality, natural & local ingredients in our dishes. ",
    img1: D1,
    img2: D2,
  },
  {
    projectName: "Shelves Tech",
    projectDescription:
      "We make advanced medical technology accessible worldwide, ensuring all healthcare facilities have access to top equipment, regardless of location or budget, to improve outcomes and save lives.",
    Live: "https://shelvestech.com/",
    img1: St1,
    img2: St2,
  },
  {
    projectName: "DELIGHT BITE",
    projectDescription:
      "your ultimate destination for Best Indian Food in Coquitlam. Delight Bite is the Best Indian Restaurant in Coquitlam.",
    img1: E1,
    img2: E2,
  },
  {
    projectName: "IMSU",
    projectDescription:
      "Helping Immigration Firms grow consistently through innovative approaches, proven strategies & consistent results.",
    img1: F1,
    img2: F2,
  },
  {
    projectName: "WoodAndVeneer",
    projectDescription:
      "Aarv Wood and Veneer Pvt. Ltd., led by the Agarwal family with nearly 20 years of expertise. Mr. Vinay Agarwal, Mrs. Richa Agarwal, and Mr. Rupesh Tripathi drive its growth and stability.",
    Live: "https://woodandveneer.in/",
    img1: Wd1,
    img2: Wd2,
  },
  {
    projectName: "Convertithub",
    projectDescription:
      "Convert It Hub will help you build a guaranteed client aquisition system so you don’t have to rely on expensive lead providers to survive.",
    img1: G1,
    img2: G2,
  },
  {
    projectName: "WebAbility",
    projectDescription:
      "Your Ultimate Web Accessibility Widget for ADA & WCAG Compliance",
    img1: H1,
    img2: H2,
  },
  {
    projectName: "MISSION DRIVING SCHOOL",
    projectDescription:
      "Your journey towards safe driving starts with Mission Driving School",
    img1: I1,
    img2: I2,
  },
  {
    projectName: "RAFFLES EDUCITY",
    projectDescription:
      "Providing award-winning immigration services for over a decade with expert legal solutions tailored to meet our clients' needs in a fast-evolving industry.",
    img1: J1,
    img2: J2,
  },

  {
    projectName: "Sky Candy",
    projectDescription:
      "Welcome to Bir Billing, paragliding capital, where adventure meets breathtaking views. Soar from 2,400 meters over lush valleys, forests, and snow-capped peaks in the scenic Dhauladhar Range for an unforgettable experience.",
    Live: "https://www.birparagliding.in/",
    img1: Sky1,
    img2: Sky2,
  },
];





const AppProject = [
  {
    projectName: "EpicHair",
    projectDescription:
      " EpicHair is a premier Vancouver salon bar offering expert hair styling and grooming in a modern, stylish setting.",
    img1: AP1,
    img2: AP2,
}]





function page() {
  return (
    <>
      <section className=" overflow-hidden h-80 relative">
        <div className=" ">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 -top-20 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-900/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          >
            <rect
              width="100%"
              height="100%"
              fill="url(#:r0:)"
              stroke-width="0"
            ></rect>
            <svg x="50%" y="-96" stroke-width="0" className="overflow-visible">
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
                patternTransform="translate(0 -96)"
                fill="none"
              >
                <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="justify-center max-w-5xl mx-auto items-center flex flex-col h-full">
          <h1 className="text-gray-700 font-bold text-4xl lg:text-6xl text-center ">
            A glimpse into <br /> our <span className="text-purple-500">projects</span>
          </h1>
          <h2 className='mt-4 text-base text-center text-gray-500'>Here&apos;s a glimpse of the remarkable web applications we&apos;ve launched recently.</h2>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-10 py-10 px-5">
            {Project.map((props, index) => (
              <div
                key={index}
                className="flex flex-col-reverse md:flex-row gap-10 py-10 items-center border-t-2 border-purple-500"
              >
                <div className="w-full md:w-1/3 flex flex-col gap-4">
                  <h1 className="text-4xl font-bold text-purple-500">
                    {props.projectName}
                  </h1>
                  <p className="text-base text-gray-600">
                    {props.projectDescription}
                  </p>
                  {/* <a
                    className="bg-gray-700 p-2 w-full text-center rounded text-white hover:bg-blue-800 duration-500"
                    href={props.Live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Preview
                  </a> */}
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="border hover:shadow-xl duration-500 rounded-[8px] h-56 overflow-hidden w-full md:w-96 bg-purple-600 shadow-md">
                    <Image
                      src={props.img1}
                      width={1000}
                      height={1000}
                      alt="project image"
                      className="w-full md:w-96 h-56 mt-4 ml-4 rounded object-fill "
                    />
                  </div>
                  <Image
                    src={props.img2}
                    width={1000}
                    height={1000}
                    alt="project image"
                    className="w-full md:w-96 hover:shadow-xl duration-500 rounded-[8px] shadow-md border"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-10 py-10 px-5">
            {AppProject.map((props, index) => (
              <div
                key={index}
                className="  border-t-2 border-purple-500"
              >
                <div className=' max-w-7xl mx-auto  flex flex-col-reverse md:flex-row gap-10 py-10 items-center'>
                  <div className="w-full md:w-1/3 flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-purple-500">
                      {props.projectName}
                    </h1>
                    <p className="text-base text-gray-600">
                      {props.projectDescription}
                    </p>
                    {/* <a
                    className="bg-gray-700 p-2 w-full text-center rounded text-white hover:bg-blue-800 duration-500"
                    href={props.Live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Preview
                  </a> */}
                  </div>
                  <div className="  flex flex-col md:flex-row gap-8">
                    <div className="border rounded-[15px] h-[70vh] overflow-hidden w-full md:w-72 bg-purple-600 shadow-md hover:shadow-xl duration-500">
                      <Image
                        src={props.img1}
                        width={1000}
                        height={1000}
                        alt="project image"
                        className="w-full md:w-72  h-[70vh] object-cover  mt-4 ml-4 rounded-[6px] border "
                      />
                    </div>
                    <Image
                      src={props.img2}
                      width={1000}
                      height={1000}
                      alt="project image"
                      className="w-full md:w-72  h-[70vh] hover:shadow-xl duration-500 object-cover p-2 bg-purple-900 rounded-[20px] shadow-md border"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default page
