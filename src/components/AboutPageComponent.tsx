"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import { ArrowsUpFromLine, BetweenHorizontalStart, Link, LoaderPinwheel, Pickaxe, Pyramid } from "lucide-react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"





const WhyChooseUs = [
  {
    title: "Custom-Fit Services",
    description: "Tailored solutions designed specifically for your business.",
    content: (
      <ul className="flex flex-col gap-2">
        <li><strong>1. Personalized Approach</strong> - We take the time to understand your business inside out, ensuring our services align with your specific needs.</li>
        <li><strong>2. Flexible Solutions</strong> - Whether you’re a start-up or a growing business, we adapt our offerings to fit your stage and goals.</li>
        <li><strong>3. Unique to You</strong> - We don’t believe in one-size-fits-all. Our solutions are crafted just for you, so you get the best results.</li>
      </ul>
    ),
    footer: "Your business, your solutions",
  },
  {
    title: "End-to-End Guidance",
    description: "Supporting you from the beginning to long after launch.",
    content: (
      <ul className="flex flex-col gap-2">
        <li><strong>1. From Start to Finish</strong> - We’re with you throughout the entire process, helping you from planning to execution.</li>
        <li><strong>2. Clear Communication</strong> - You’ll always know what’s happening with your project, with regular updates and transparent communication.</li>
        <li><strong>3. Ongoing Support</strong> - Even after your project is live, we continue to provide support, ensuring everything runs smoothly.</li>
      </ul>
    ),
    footer: "Comprehensive support throughout",
  },
  {
    title: "Results That Matter",
    description: "Focusing on measurable outcomes to drive your business forward.",
    content: (
      <ul className="flex flex-col gap-2">
        <li><strong>1. Goal-Oriented</strong> - We focus on outcomes that drive your business forward, like increased traffic, leads, or sales.</li>
        <li><strong>2. Data-Driven Decisions</strong> - Our strategies are based on real data, ensuring that every move we make is designed to achieve success.</li>
        <li><strong>3. Measurable Success</strong> - We provide clear reports and analytics, so you can see the tangible impact of our work.</li>
      </ul>
    ),
    footer: "Success you can see and measure",
  },
  {
    title: "Local Know-How, Global Vision",
    description: "Blending local insights with a global strategy.",
    content: (
      <ul className="flex flex-col gap-2">
        <li><strong>1. Expanding Your Reach</strong> - We help you tap into broader opportunities, whether you’re looking to grow locally or expand globally.</li>
        <li><strong>2. Bridging Cultures</strong> - Our experience helps us blend local insights with a global perspective, creating strategies that work for diverse audiences.</li>
      </ul>
    ),
    footer: "Think local, act global",
  },
  {
    title: "Agile Methodology",
    description: "Flexibility and adaptability for evolving projects.",
    content: (
      <ul className="flex flex-col gap-2">
        <li><strong>1. Quick Adaptability</strong> - Using agile methodology, we can quickly adjust to changes in your project, ensuring we meet evolving needs and timelines.</li>
        <li><strong>2. Continuous Improvement</strong> - Agile allows us to constantly refine and enhance the project as we progress, leading to better results with each iteration.</li>
        <li><strong>3. Client Collaboration</strong> - With regular check-ins and feedback loops, you are always involved in the development process, ensuring the final product aligns with your vision.</li>
      </ul>
    ),
    footer: "Flexibility at every step",
  },
];  

function page() {
  return (
    <>
      <section className=" overflow-hidden h-[70vh] relative">
        
        <div className="-z-20 ">
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
        <div className="justify-center max-w-5xl z-[10]  mx-auto items-center flex flex-col gap-4 h-full px-5">
          <Fade direction="down">
            <h1 className="text-gray-700 font-bold text-4xl lg:text-7xl text-center ">
              Welcome to <span className="text-purple-500">Tecklo</span>
            </h1>

            
            <p className="text-base lg:text-lg font-medium text-gray-600 text-center max-w-7xl mx-auto">
              Where innovation meets diversity in the heart of Canada.
              We&apos;re not just a tech startup. we&apos;re the backbone of
              creativity and expertise, driven by a team of exceptional minds
              from all corners of the globe.
            </p>
          </Fade>
        </div>
        <div className="h-[70vh] w-full -z-10  bg-gradient-to-b from-transparent to-purple-500/[0.2] absolute top-0 left-0"></div>
      </section>
      <section className="max-w-6xl mx-auto py-10 px-5 flex flex-col  gap-5 justify-center">
        <div className=" flex flex-col gap-5">
            <h1 className="text-purple-500 text-4xl font-bold text-center ">
              About Us
            </h1>
          
            <section >
              <p className="text-base text-gray-800">
                <span>
                  Welcome to Tecklo.co, your trusted partner in digital solutions. We specialize in helping businesses of all sizes enhance their online presence and achieve their goals. With a dedicated team of experts in design, development, and marketing, we offer a comprehensive range of services tailored to meet your unique needs.
                </span>

                <br />
                <br />
                <span>
                  Located in Canada and the US, we blend local insights with global expertise to deliver high-quality results that drive success. Whether you&apos;re launching a start up or looking to improve your existing digital strategies, we are committed to providing innovative solutions that foster growth and engagement. At Tecklo, we believe in building strong relationships with our clients, ensuring you have the support you need every step of the way.
                </span>
                <br />
                <br />
                <span>
                  Let&apos;s work together to take your business to new heights in the digital landscape.
                </span>
              </p>
           </section>
           

            <div className="flex flex-col  gap-5 justify-center ">
              <section className=" bg-light  text-gray-800">
                <h2 className="text-center text-2xl font-bold ">Our Approach</h2>
                <h3 className="pb-10 text-center text-sm">Tailored Solutions for Every Business</h3>
                <div className="row">
                  <div className="col-md-6 text-base">
                    <p>At tecklo, we prioritize understanding each client’s unique needs to deliver custom-fit digital solutions. Our team combines expert craftsmanship with a client-first mentality, ensuring that every project is tailored specifically to your business goals. By using Agile Methodology, we remain flexible and adaptable, allowing us to adjust quickly to changes while maintaining continuous improvement throughout the project lifecycle.
                    </p>
                    <br />
                    <p>From start-ups to established businesses, we provide end-to-end guidance, ensuring that you’re supported from the initial planning stages through to long-term maintenance. Our services—from Graphic Design to Web Infrastructure, SEO, and Digital Marketing—are backed by data-driven strategies, ensuring measurable results that matter.

                    </p><br />
                    <p>With offices in Canada and the US, we bring local expertise and a global vision to your business, helping you grow both locally and internationally. Our mission is to build lasting partnerships, providing solutions that empower businesses to thrive in the digital world.
                    </p>
                    <ul className="flex flex-col gap-2 mt-4 font-semibold ">
                      <li className="flex gap-2"><LoaderPinwheel className="text-purple-400" /> <span>Client-Centric Focus: Understanding unique needs.</span></li>
                      <li className="flex gap-2"><Pickaxe className="text-purple-400" /> <span>Expert Craftsmanship: Skilled team delivering quality.</span></li>
                      <li className="flex gap-2"><ArrowsUpFromLine className="text-purple-400" /> <span>Agile Methodology: Flexibility and adaptability.</span></li>
                      <li className="flex gap-2"><Pyramid className="text-purple-400" /> <span>End-to-End Guidance: Support from planning to maintenance.</span></li>
                      <li className="flex gap-2"><BetweenHorizontalStart className="text-purple-400" /> <span>Data-Driven Strategies: Measurable results.</span></li>
                    </ul>
                    <p className="mt-2">With offices in Canada and the US, we bring local expertise and a global vision to your business, helping you grow both locally and internationally.</p>
                    <Button asChild className="bg-white text-gray-900 rounded hover:bg-black mt-4 hover:text-white"><Link href="/service" >Explore Our Services</Link></Button>
                  </div>

                </div>
              </section>




            </div>
            
            <section>
              <p>
                <strong className="text-lg"> Our mission is simple:</strong> To
                turn your business needs into reality with the most effective
                technology solutions and a touch of brilliance. Our team is a
                blend of visionaries, engineers, designers, and strategists, each
                bringing their unique perspective and skill set to the table. This
                rich tapestry of backgrounds and experiences fuels our ability to
                tackle complex challenges and deliver solutions that exceed
                expectations.
              </p>
              <p>
                What sets us apart is our commitment to collaboration and
                inclusivity. We believe that the best ideas come from a diverse
                group of thinkers who are not afraid to push boundaries and
                challenge the status quo. By fostering an environment where
                creativity thrives and different viewpoints are celebrated, we
                ensure that every project benefits from a wealth of perspectives
                and innovative approaches.
              </p>
            </section>
            
        </div>
        <div className="max-w-6xl mx-auto mt-6 flex flex-col gap-5">
         
          <h2 className="text-gray-800 text-2xl font-bold text-center">Our Story</h2>

          <p>
            Based out of Canada, we are proud to harness the strengths of our
            team to create solutions that not only meets but anticipates the
            needs of our clients. From developing groundbreaking software to
            crafting tailored tech solutions, we are dedicated to helping
            businesses achieve their goals and drive growth in a rapidly
            evolving digital landscape.
          </p>
          

          <p>
            At Tecklo, we&apos;re more than just a team; we&apos;re a dream
            team, united by our passion for technology and our commitment.
          </p>
          

          <p>
            Join us on this exciting journey, and let&apos;s build the future
            together.
          </p>
          

        </div>
      </section>

      <section className="py-10 ">
        <div>
          <div className="flex flex-col max-w-7xl mx-auto gap-5 justify-center items-center">
            <Fade direction="left" >
              <h1 className="text-center py-10 font-bold text-xl md:text-4xl text-purple-600">
                Why Choose Us
              </h1>
            </Fade>
            <div className="flex flex-col justify-between w-full max-w-4xl mx-auto gap-5   px-5">
              {WhyChooseUs.map((service, index) => {
                return (
                  <Accordion key={index} type="single" collapsible>
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className=" text-lg mb-2">{service.title}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-lg font-semibold">{service.description}</p>
                        <div className="mt-2">{service.content}</div>
                        <p className="mt-4 italic">{service.footer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                );
              })}

            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default page;
