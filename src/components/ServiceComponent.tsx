"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import ServiceCard from "./ServiceCard/ServiceCard";

const Design = [
  {
    title: "Graphic Design and User Interface (UI) Development ",
    description:
      "We focus on making your website or application both visually appealing and easy to use. ",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDI%3D",
    link:"/g-ui"
  },
  {
    title: "Application Programming Interface (API)",
    description:
      "We offer custom API solutions to help your business scale, innovate, and integrate applications seamlessly.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHwy",
    link: "/api"
  },
  {
    title: "Search Engine Optimization (SEO) ",
    description:
      " SEO helps your website rank higher on search engines, making it easier for customers to find you.  ",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
    link:'/seo'
  },
  {
    title: "Digital Marketing, Applications Advertising, and Content Strategy ",
    description:
      "We help you reach and engage your target audience effectively. .",
    img: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2ViJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D",
    link:"/media-strategy"
  },
  {
    title: "Web Infrastructure and Operations      ",
    description:
      "We ensure your website runs smoothly and securely",
    img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE1vYmlsZSUyMERldmVsb3BtZW50fGVufDB8fDB8fHwy",
    link:"/web"
  },
  // {
  //   title: "Agile Methodology",
  //   description:
  //     "Our agile methodology allows us to adapt and respond to changes quickly, delivering results on time and within budget.",
  //   img: "https://images.unsplash.com/photo-1541960071727-c531398e7494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWdpbGUlMjBNZXRob2RvbG9neXxlbnwwfHwwfHx8Mg%3D%3D",
  // },
  // {
  //   title: "Search Engine Optimization (SEO)",
  //   description:
  //     "Our SEO specialists enhance your online visibility and drive organic traffic with tailored strategies that improve your search engine rankings and attract quality leads.",
  //   img: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2VhcmNoJTIwRW5naW5lJTIwT3B0aW1pemF0aW9uJTIwKFNFTyl8ZW58MHx8MHx8fDI%3D",
  // },
  // {
  //   title: "Pay-Per-Click Advertising (PPC)",
  //   description:
  //     "We create and manage effective PPC campaigns that deliver targeted traffic and measurable results.",
  //   img: "https://images.unsplash.com/photo-1623911380012-0b6db3fcad54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UGF5JTIwUGVyJTIwQ2xpY2slMjBBZHZlcnRpc2luZyUyMChQUEMpfGVufDB8fDB8fHwy",
  // },
  // {
  //   title: "Social Media Marketing",
  //   description:
  //     "Our team leverages social media platforms to build your brand’s presence, engage with your audience, and drive meaningful interactions.",
  //   img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29jaWFsJTIwTWVkaWElMjBNYXJrZXRpbmd8ZW58MHx8MHx8fDI%3D",
  // },
  // {
  //   title: "Content Marketing",
  //   description:
  //     "From blog posts and articles to infographics and videos, we create content that speaks to your audience and supports your business objectives.",
  //   img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENvbnRlbnQlMjBNYXJrZXRpbnxlbnwwfHwwfHx8Mg%3D%3D",
  // },
  // {
  //   title: "Email Marketing",
  //   description:
  //     "We craft personalized messages and automated workflows that drive conversions and keep your audience engaged.",
  //   img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RW1haWwlMjBNYXJrZXRpbmd8ZW58MHx8MHx8fDI%3D",
  // },
  // {
  //   title: "Web Hosting",
  //   description:
  //     "Whether you need shared hosting, dedicated servers, or cloud solutions, our infrastructure ensures that your website operates smoothly and efficiently, with minimal downtime and exceptional support.",
  //   img: "https://images.unsplash.com/photo-1554098415-788601c80aef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2ViJTIwSG9zdGluZ3xlbnwwfHwwfHx8Mg%3D%3D",
  // },
  // {
  //   title: "Web Scraping",
  //   description:
  //     "We build custom scraping solutions that extract relevant information, analyze trends, and provide actionable insights. Our tools and techniques are designed to handle large volumes of data while ensuring compliance with legal and ethical standards.",
  //   img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2ViJTIwU2NyYXBpbmd8ZW58MHx8MHx8fDI%3D",
  // },
  // {
  //   title: "Custom CRM Development",
  //   description:
  //     "Our solutions enable you to track interactions, automate sales processes, and gain valuable insights into customer behavior, enhancing customer satisfaction and driving sales growth.",
  //   img: "https://images.unsplash.com/photo-1617777938240-9a1d8e51a47d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JtJTIwc29mdHdhcmV8ZW58MHx8MHx8fDI%3D",
  // },
  // {
  //   title: "Tailored ERP Solutions",
  //   description:
  //     "From finance and human resources to supply chain and production, our ERP tools provide a unified platform for managing resources, optimizing workflows, and improving overall efficiency.",
  //   img: "https://img.freepik.com/free-vector/gradient-erp-illustration_23-2149370943.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
  // },
  // {
  //   title: "Business Process Analysis",
  //   description:
  //     "Our team works with you to understand your business needs and design solutions that align with your strategic goals.",
  //   img: "https://img.freepik.com/free-photo/analysis-data-information-insight-plan-process-concept_53876-121051.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
  // },
  // {
  //   title: "Integration Services",
  //   description:
  //     "We ensure that our CRM and ERP systems integrate seamlessly with your existing software and tools.",
  //   img: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399295.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
  // },
  {
    title: "Support & Maintenance",
    description:
      "We ensure your website stays up-to-date and functional with ongoing support. ",
    img: "https://img.freepik.com/free-vector/call-center-helpdesk-concept-with-support-symbols-isometric-vector-illustration_1284-69102.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
    link:"/support"
  },
  
];

// const Dwcu = [
//   {
//     title: "Innovative Solutions",
//     description:
//       "We stay ahead of the curve with the latest design trends and technologies to offer you cutting-edge solutions.",
//     img: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5ub3ZhdGl2ZSUyMHNvbHV0aW9ufGVufDB8fDB8fHwy",
//   },
//   {
//     title: "Tailored Services",
//     description:
//       "Every project is unique. We customize our services to fit your specific requirements and goals.",
//     img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGFpbG9yZWQlMjBTZXJ2aWNlc3xlbnwwfHwwfHx8Mg%3D%3D",
//   },
//   {
//     title: "Dedicated Team",
//     description:
//       "Our experienced team is committed to providing exceptional service and support throughout the design process.",
//     img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGVkaWNhdGVkJTIwVGVhbXxlbnwwfHwwfHx8Mg%3D%3D",
//   },
//   {
//     title: "Expert Team",
//     description:
//       "Our developers and designers bring a wealth of experience and expertise, ensuring that your project benefits from the latest technologies and best practices.",
//     img: "https://img.freepik.com/free-vector/flat-people-business-training-illustration_23-2148921811.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
//   },
//   {
//     title: "Customized Solutions",
//     description:
//       "We tailor our services to meet your specific requirements, providing solutions that are as unique as your business.",
//     img: "https://img.freepik.com/free-vector/businessman-with-puzzles-bulb-idea-bills_24640-45215.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
//   },
//   {
//     title: "Commitment to Quality",
//     description:
//       "We prioritize quality in every aspect of our work, from code to user experience, ensuring reliable and effective solutions.",
//     img: "https://img.freepik.com/free-vector/illustration-quality-control_53876-17831.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
//   },
//   {
//     title: "Innovative Strategies",
//     description:
//       "We stay ahead of industry trends and leverage the latest tools and technologies to deliver cutting-edge marketing solutions.",
//     img: "https://img.freepik.com/free-vector/flat-design-innovation-concept_23-2149155593.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
//   },
//   {
//     title: "Customized Solutions",
//     description:
//       "Our strategies are tailored to fit your unique business needs and objectives, ensuring a personalized approach.",
//     img: "https://img.freepik.com/free-vector/businessman-with-puzzles-bulb-idea-bills_24640-45215.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
//   },
//   {
//     title: "Results-Driven",
//     description:
//       "We focus on measurable outcomes and work tirelessly to ensure that our strategies deliver tangible results and growth for your business.",
//     img: "https://img.freepik.com/free-vector/business-intelligence-experts-transform-data-into-useful-information-business-intelligence-business-analysis-it-management-tools-concept_335657-1889.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
//   },
//   {
//     title: "Web Hosting",
//     description:
//       "Whether you need shared hosting, dedicated servers, or cloud solutions. Our infrastructure ensures that your website operates smoothly and efficiently, with minimal downtime and exceptional support.",
//     img: "https://img.freepik.com/free-vector/gradient-website-hosting-illustration_23-2149247164.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
//   },
//   {
//     title: "Web Scraping",
//     description:
//       "We build custom scraping solutions that extract relevant information, analyze trends, and provide actionable insights. Our tools and techniques are designed to handle large volumes of data while ensuring compliance with legal and ethical standards.",
//     img: "https://img.freepik.com/free-vector/programming-development-isometric-composition-with-character-programmer-ladder-with-gear-screens-with-code-vector-illustration_1284-66490.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
//   },
//   {
//     title: "Custom CRM Development",
//     description:
//       "Our solutions enable you to track interactions, automate sales processes, and gain valuable insights into customer behavior, enhancing customer satisfaction and driving sales growth.",
//     img: "https://img.freepik.com/free-vector/flat-design-crm-illustration_23-2149363697.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
//   },
//   {
//     title: "Tailored ERP Solutions",
//     description:
//       "From finance and human resources to supply chain and production, our ERP tools provide a unified platform for managing resources, optimizing workflows, and improving overall efficiency.",
//     img: "https://img.freepik.com/free-vector/flat-design-erp-illustration_23-2149380376.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
//   },
//   {
//     title: "Business Process Analysis",
//     description:
//       "Our team works with you to understand your business needs and design solutions that align with your strategic goals.",
//     img: "https://img.freepik.com/free-vector/business-men-working-computers-analyzing-financial-charts_1262-19199.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
//   },
//   {
//     title: "Integration Services",
//     description:
//       "We ensure that our CRM and ERP systems integrate seamlessly with your existing software and tools.",
//     img: "https://img.freepik.com/free-vector/setup-concept-illustration_114360-382.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
//   },
//   {
//     title: "Support & Maintenance",
//     description:
//       "Our commitment doesn’t end with deployment. We provide ongoing support and maintenance to ensure that your CRM and ERP systems continue to meet your evolving needs and perform at their best.",
//     img: "https://img.freepik.com/free-vector/customer-support-illustration_23-2148884662.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid",
//   },
// ];

function page() {
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
              Startup <span className="text-purple-500">Assistance</span>
            </h1>
          </Fade>
          <Fade direction="right">
            <p className="text-base font-medium text-gray-600 text-center max-w-7xl px-5 mx-auto">
              At Tecklo, we provide all the essential services and tools for new startups to launch successfully and grow sustainably, from innovative marketing to powerful software solutions—bringing your vision to life.
            </p>
          </Fade>
        </div>
      </section>
      <section className="pb-10">
        <div className="max-w-7xl mx-auto  px-5 flex flex-col gap-4">
          <div>
            <Fade direction="left">
              <h2 className="text-3xl text-center py-5 font-bold underline text-purple-500">
                Our Services
              </h2>
            </Fade>
            {/* <div className="flex flex-wrap gap-10 justify-evenly ">
              <Fade direction="up">
                {Design.map((props, index) => (
                  <div key={index} className="max-w-sm  group/card">
                    <div
                      className={cn(
                        "cursor-pointer overflow-hidden relative card h-64 rounded-[10px] shadow-xl max-w-sm mx-auto flex flex-col justify-around p-2"
                      )}
                    >
                      {props.img && (
                        <Image
                          src={props.img}
                          alt={props.title}
                          width={1000}
                          height={1000}
                          className="absolute w-full h-full top-0 left-0 object-cover"
                        />
                      )}
                      <div className="absolute w-full h-full top-0 left-0 object-cover bg-black opacity-60"></div>
                      <h1 className="font-bold text-3xl md:text-4xl text-gray-50 relative z-10">
                        {props.title}
                      </h1>
                      <p className="font-medium text-base text-gray-50 relative z-10 my-4">
                        {props.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Fade>
            </div> */}
            <ServiceCard services={Design} />
            <Fade direction="up">
              <Card

                className={`h-auto lg:h-[62vh] transition-all rounded shadow-md overflow-hidden duration-300 mt-6`}

              >
                <Image
                  src={"https://img.freepik.com/free-photo/person-using-tablet_53876-13420.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid"}
                  alt={" Start up Assistance"}
                  width={1000}
                  height={1000}
                  className="w-full h-[40vh] top-0 left-0 object-cover z-0"
                />

                <CardHeader className="text-start p-4 z-10">
                  <CardTitle className="text-start text-purple-500 uppercase font-bold text-2xl">
                    Start up Assistance
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative text-base text-start px-4 z-10">
                  we help startups establish a strong digital foundation by creating tailored websites, enhancing branding, and optimizing online marketing and SEO. We guide you in selecting the right tools to streamline operations, ensuring a smooth launch and long-term online success. Whether starting fresh or refining your presence, we’re here to assist you every step of the way.
                </CardContent>

              </Card>
            </Fade>
          </div>
          {/* <div className=" text-start mt-4">
            <Fade direction="left">
              <h2 className="text-2xl py-2 font-bold text-blue-500">
                Our Approach
              </h2>
            </Fade>
            <Fade direction="right">
              <ul className="list-disc ml-4 flex flex-col gap-2">
                <li>
                  By working closely with you, we ensure that every project
                  reflects your brand&apos;s values and objectives.{" "}
                </li>
                <li>
                  Our agile methodology allows us to adapt and respond to
                  changes quickly, delivering results on time and within budget.
                </li>
                <li>
                  Our process starts with understanding your brand, audience,
                  and goals. We then develop a comprehensive marketing strategy
                  that integrates various channels and tactics to achieve
                  optimal results.
                </li>
                <li>
                  We believe in a client-centric approach where your needs and
                  goals drive our solutions.
                </li>
                <li>
                  For web hosting, we focus on providing a seamless and
                  hassle-free experience with robust infrastructure and
                  exceptional support.
                </li>
                <li>
                  Our team is dedicated to offering reliable solutions that
                  enhance your business operations and drive success.
                </li>
                <li>
                  We believe in a collaborative approach to software
                  development. By working closely with you, we gain a thorough
                  understanding of your business processes and objectives. We
                  prioritize clear communication and continuous feedback to
                  ensure that the final product exceeds your expectations.
                </li>
              </ul>
            </Fade>
          </div> */}
          <div>
            {/* <Fade direction="left">
              <h2 className="text-2xl font-bold text-blue-500 py-8 text-center">
                Why Choose Us
              </h2>
            </Fade> */}
            {/* <div className="flex flex-wrap gap-5 justify-evenly ">
              <Fade direction="up">
                {Dwcu.map((props, index) => (
                  <div key={index} className="max-w-sm w-full group/card">
                    <div
                      className={cn(
                        "cursor-pointer overflow-hidden relative card h-72 rounded-[10px] shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                      )}
                    >
                      {props.img && (
                        <Image
                          src={props.img}
                          alt={props.title}
                          width={1000}
                          height={1000}
                          className="absolute w-full h-full top-0 left-0 object-cover"
                        />
                      )}
                      <div className="absolute w-full h-full top-0 left-0 object-cover bg-black opacity-60"></div>
                      <h1 className="font-bold text-2xl md:text-3xl text-gray-50 relative z-10">
                        {props.title}
                      </h1>
                      <p className="font-medium text-base text-gray-50 relative z-10 my-4">
                        {props.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Fade>
            </div> */}
            {/* <ServiceCard services={Dwcu} /> */}
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default page;
