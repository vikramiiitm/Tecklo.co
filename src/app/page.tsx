"use client"


import {InfiniteMovingCard} from "@/components/ui/infinite-moving-cards";
// import Img1 from '@/assets/images/1.jpg';
import Image from "next/image";

// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";




import Link from "next/link";
// import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Fade } from "react-awesome-reveal";
// import { BackgroundBeams } from "@/components/ui/background-beams";
// import ServiceComponentHome from "@/components/ServiceComponentHome";
// import Hero from "@/components/Hero/Hero";
import dynamic from "next/dynamic";
// import AboutUs from "@/assets/teckloss.png"
import { Button } from "@/components/ui/button"



import A1 from '@/assets/images/A1.png'
import B1 from '@/assets/images/B1.png'
import C1 from '@/assets/images/C1.png'
import D1 from '@/assets/images/D1.png'
import CTAButton from "@/components/CTAButton";
import React from "react";




const BackgroundBeams = dynamic(() => import('@/components/ui/background-beams'))
// const InfiniteTextMoving = dynamic(() => import('@/components/infinite-moving-text/InfiniteTextMoving'))


import {
  SearchIcon,
  ChartBarIcon,
  ServerIcon,
  AdjustmentsIcon,
  SupportIcon,
  CodeIcon,
} from '@heroicons/react/outline';

const features = [
  {
    title: 'Search Engine Optimization (SEO)',
    icon: SearchIcon, // Represents SEO-related functions well
  },
  {
    title: 'Digital Marketing, Applications Advertising, and Content Strategy',
    icon: ChartBarIcon, // Represents analytics, marketing, or strategy
  },
  {
    title: 'Web Infrastructure and Operations',
    icon: ServerIcon, // Represents servers and infrastructure
  },
  {
    title: 'Integration with Enterprise Systems',
    icon: AdjustmentsIcon, // Represents configuration or integration
  },
  {
    title: 'Support and Maintenance',
    icon: SupportIcon, // Represents customer or technical support
  },
  {
    title: 'Custom Software Development',
    icon: CodeIcon, // Represents coding and software development
  },
];









const testimonials = [
  {
    name: "Java",
    svg: "https://www.vectorlogo.zone/logos/java/java-ar21.svg",
  },
  {
    name: "Kotlin",
    svg: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  },
  {
    name: "Swift",
    svg: "https://www.vectorlogo.zone/logos/swift/swift-icon.svg",
  },
  {
    name: "Objective-C",
    svg: "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg",
  },
  {
    name: "Dart",
    svg: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
  },
  {
    name: "JavaScript",
    svg: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  },
  {
    name: "TypeScript",
    svg: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },

  {
    name: "Python",
    svg: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },

  {
    name: "Go",
    svg: "https://www.vectorlogo.zone/logos/golang/golang-official.svg",
  },
  {
    name: "Rust",
    svg: "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg",
  },
  {
    name: "Ruby",
    svg: "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
  },
  {
    name: "PHP",
    svg: "https://www.vectorlogo.zone/logos/php/php-ar21.svg",
  },
  {
    name: "Bash",
    svg: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
  },

  {
    name: "SQL",
    svg: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
  },
  {
    name: "MongoDB",
    svg: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "PostgreSQL",
    svg: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  },
  {
    name: "Julia",
    svg: "https://www.vectorlogo.zone/logos/julialang/julialang-icon.svg",
  },
];




const links = [
  { name: 'Open Roles', href: '#' },
  { name: 'Internship Program', href: '#' },
  { name: 'Our Values', href: '#' },
  { name: 'Leadership Team', href: '#' },
];
const stats = [
  { name: 'Projects Completed', value: '150+' },
  { name: 'Global Partners', value: '50+' },
  { name: 'Years of Experience', value: '10' },
  { name: 'Satisfied Clients', value: '1000+' },
];




export default function Home() {




  return (
    <main className="">
      {/* <section>
        <div className="flex flex-col overflow-hidden -mt-16   bg-gradient-to-tr   from-[#7240bddd] to-[#00276be3]   ">
          <ContainerScroll
            titleComponent={
              <>
                <div className=" flex flex-col lg:flex-row justify-between md:px-10 gap-6 border-t-2 pt-8  text-start px-5">
                  <div className="w-full md:w-1/4">
                    <h1 className="text-base md:text-2xl font-bold text-white">
                      At Tecklo
                    </h1>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h4 className="text-xl font-bold leading-[28px] md:text-5xl text-white">
                      We Transform Your IT Challenges into Seamless Solutions
                    </h4>
                  </div>
                </div>
              </>
            }
          >
            <Image
              src={Img1}
              alt="hero"
              height={720}
              width={1400}
              className=" rounded-2xl object-cover h-full object-center"
              // draggable={false}
            />
          </ContainerScroll>
        </div>
      </section> */}

      <section className='overflow-hidden     '>
        <Fade direction="up">
          <div className='bg-grid-black/[0.1] h-[90vh] md:h-[90vh] w-full relative flex justify-center items-center px-5'>
            <div className="absolute pointer-events-none inset-1 flex items-center justify-center  bg-gradient-to-tr   from-[#fff] to-[#fff] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
            <div className='flex flex-col-reverse md:flex-col justify-centre  md:justify-evenly text-start max-w-6xl mx-auto  items-center z-20'>
              <div className=" flex flex-col  md:mt-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 mt-10 relative text-center text-gray-700 max-w-6xl mx-auto ">Transforming Your IT Business <br/> into <span className="relative bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-blue-600/[0.8] z-10">Seamless Solutions</span> </h1>
                
                
                <p className="text-base lg:text-xl px-10 text-center mt-3 max-w-3xl mx-auto text-gray-500">
                  IT Consulting who believes in organic and sustainable growth of our clients through strategy, design and technology.
                </p>

<div className="flex justify-center gap-5 mt-8 max-w-5xl mx-auto flex-col lg:flex-row">

                  <Button asChild variant="secondary" className="bg-purple-600 text-white hover:bg-purple-500 hover:text-white rounded py-6 text-lg">
                    <Link href="/work">Glimps to our projects</Link>
                  </Button>
                  <Button asChild variant="outline"  className="hover:bg-gray-800 outline-purple-500 bg-white hover:text-white text-purple-500   rounded py-6 w-56 text-lg">
                    <a href="mailto:">Mail Us Now</a>
                  </Button>
</div>


              </div>

              
              {/* <Image src={HeroImg} width={1000} height={1000} className=' hover:scale-105  duration-500' alt="HeroImg" />  </div> */}
          </div>
          </div>
        </Fade>
        {/* <Image src={HeroImg} width={1000} height={1000} className=' hover:scale-105  duration-500' alt="HeroImg" /> */}


      </section>
     

      {/* <Fade direction="right" >
        <section className="">
          <div className="relative isolate overflow-hidden bg-blue-100 py-24 sm:py-32">
            <div
              aria-hidden="true"
              className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ea3465] to-[#766fffcb] opacity-20"
              />
            </div>
            <div className="mx-auto max-w-7xl  md:px-6 flex flex-col md:flex-row justify-between gap-6   px-6">
              <div className="w-full md:w-1/4">
                <h1 className="text-lg  md:text-2xl font-bold text-blue-800">Intro</h1>
              </div>
              <div className="w-full md:w-3/4">
                <h4 className="text-xl font-bold leading-[28px] md:text-6xl">
                  IT Consulting who believes in organic and sustainable growth
                  of our clients through strategy, design and technology.
                </h4>
              </div>
            </div>
          </div>
        </section>
      </Fade> */}

     


      <Fade direction="up" >
        <section className="py-10  overflow-hidden    ">

          {/* <Hero /> */}
          <InfiniteMovingCard
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </section>
      </Fade>
      <Fade direction="up">
        <section className="overflow-hidden ">
          <div className="relative bg-purple-950 overflow-hidden py-24 sm:py-32">

            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/4 top-1/4  h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]  sm:left-full sm:-ml-80 lg:left-1/4 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-1"
            >
              <circle r={512} cx={512} cy={512} fill="#CFA6E7" fillOpacity="0.7" />
              <defs>
                <radialGradient id="CFA6E7">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>



            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute right-1/2 -top-1/4  h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]  sm:left-full sm:-ml-80 lg:right-1/2 lg:ml-0 lg:-translate-x-1/2 lg:-translate-y-5"
            >
              <circle r={512} cx={512} cy={512} fill="#CFA6E7" fillOpacity="0.7" />
              <defs>
                <radialGradient id="CFA6E7">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
           
            <div className="mx-auto max-w-7xl flex flex-col items-center  px-6 lg:px-8">
              <Fade direction="up">
                <div className="mx-auto text-center max-w-2xl lg:mx-0">
                  <h3 className="text-base/7 font-semibold text-purple-400 mb-4">Your Trusted Partner in Growth</h3>
                  <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-7xl">About Tecklo</h2>
                  <p className="mt-8 text-lg font-medium text-purple-200 sm:text-xl">
                    We specialize in helping businesses of all sizes enhance their online presence and achieve their goals.
                  </p>
                </div>
              </Fade>
              {/* <div className="mx-auto mt-10 max-w-2xl  lg:max-w-none">
               
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.name} className="flex flex-col-reverse gap-1">
                      <dt className="text-gray-700">{stat.name}</dt>
                      <dd className="text-4xl font-semibold tracking-tight">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div> */}
            </div>
          </div>
        </section>

        
      </Fade>

      {/* <Fade direction="up" >
        <section className="py-5 md:py-8">
          <InfiniteTextMoving />
        </section>
      </Fade> */}
     



      
      <section className="py-8 relative flex flex-col items-center bg-gradient-to-tr   from-[#fff] to-purple-500/[.5]">
        <h1 className="z-30 relative text-center font-bold text-2xl lg:text-4xl text-purple-600 py-10">Our Project</h1>
        {/* <div className="absolute pointer-events-none inset-1 flex items-center justify-center   [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-8 px-5 lg:px-0 justify-center items-center">
          <Fade direction="down">
            <div className="border w-full  hover:scale-105  duration-500 rounded bg-white"> <Image
              src={A1}
              width={1000}
              height={1000}
              alt="about"
              className="w-full  border rounded-t  hover:rounded  object-contain md:object-cover shadow-lg shadow-white transform   z-50 "
            />
              <p className="font-bold text-purple-500 text-lg text-start p-3">Sweepy Maid</p>
            </div>
         </Fade>
          <Fade direction="down">
            <div className="border w-full  hover:scale-105 duration-500 rounded bg-white"> <Image
              src={B1}
              width={1000}
              height={1000}
              alt="about"
              className="w-full  border rounded-t  hover:rounded object-contain md:object-cover shadow-lg shadow-white transform   z-50 "
            />
              <p className="font-bold text-purple-500 text-lg text-start p-3">Pho 68</p>
            </div>
          </Fade>
          <Fade direction="down">
            <div className="border w-full hover:scale-105 duration-500 rounded bg-white"> <Image
              src={C1}
              width={1000}
              height={1000}
              alt="about"
              className="w-full   border rounded-t  hover:rounded object-contain md:object-cover shadow-lg shadow-white transform   z-50 "
            />
              <p className="font-bold text-purple-500 text-lg text-start p-3">HAVELI BISTRO</p>
            </div>
         </Fade>
          <Fade direction="down">
            <div className="border w-full hover:scale-105 duration-500 rounded bg-white"> <Image
              src={D1}
              width={1000}
              height={1000}
              alt="about"
              className="w-full  border rounded-t  hover:rounded object-contain md:object-cover shadow-lg shadow-white transform   z-50 "
            />
              <p className="font-bold text-purple-500 text-lg text-start p-3">PARATHA 2 PASTA</p>
            </div>
          </Fade>
          
         
        </div>
        <Link href="work" className="z-30 bg-white  p-2 rounded px-6 hover:bg-purple-500 hover:text-white duration-500 relative text-center font-bold text-lg  text-purple-600  mt-10">More Project...</Link>
      </section>



      {/* <section className="py-10 bg-gray-300 ">
        <div>
          <div className="flex flex-col max-w-7xl mx-auto gap-5 justify-center items-center">
            <Fade direction="left" >
              <h1 className="text-center py-10 font-bold text-2xl md:text-4xl text-white">
                What We Offer.
              </h1>
            </Fade>


            <div className="px-5 max-w-7xl mx-auto  ">
              <ServiceComponentHome />
            </div>
            <Fade direction="up" >
              <Link
                className="text-center text-2xl text-white underline hover:text-blue-900 duration-500 py-1 rounded mt-8 "
                href="/service"
              >
                Read More....
              </Link>
            </Fade>
          </div>
        </div>
      </section> */}


      <section>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-purple-600">Accelerate Your Deployment</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                Everything you need to launch your application smoothly
              </p>

            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid  max-w-xl grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:flex-wrap lg:gap-y-12">
                <Fade direction="up">
                  {features.map((feature) => (
                    <div key={feature.title} className=" h-24 flex items-center border border-purple-300 rounded p-4 shadow-md hover:shadow-xl duration-500">
                      <dt className="text-base/7 flex items-center rounded gap-5 font-semibold text-gray-900">
                        <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded bg-purple-600">
                          <feature.icon aria-hidden="true" className="h-6 w-10 text-white" />
                        </div>
                        {feature.title}
                      </dt>
                    </div>
                  ))}

                </Fade>
              </dl>
            </div>
          </div>
        </div>


      </section>


    


      

   


      <section>
       <Fade direction="up">
          <CTAButton />
       </Fade>
      </section>

      <section className="overflow-hidden relative bg-purple-800 py-20">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-around bg-transparent  py-10 animate-border z-30 relative text-white">
          <Fade direction="left" >
            <h2 className="py-10 sm:py-0   text-lg md:text-xl ">Locations</h2>
          </Fade>

          <div className="flex flex-col md:flex-row gap-4">
            <Fade direction="up" >
              <div className=" flex align-center gap-4">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FuYWRhfGVufDB8fDB8fHww"
                    alt="CANADA"
                    width={1000}
                    height={1000}
                    loading="eager"
                    className="w-20 aspect-square object-cover rounded-full"
                  />
                </div>
                <div className="flex gap-3">
                  <p className="text-7xl font-bold   ">CAN</p>
                  {/* <span className="content__number">01</span> */}
                </div>
              </div>
            </Fade>

            {/* <Fade direction="up" >
              <div className=" flex align-center gap-4">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1532952626554-d0cace1cd3fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzYXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="USA"
                    width={1000}
                    height={1000}
                    loading="eager"
                    className="w-20 aspect-square object-cover rounded-full"
                  />
                </div>
                <div className="flex gap-4"><p className="text-7xl font-bold   ">USA</p>
                  <span className="content__number">02</span></div>
              </div>
            </Fade> */}
          </div>
        </div>
        <BackgroundBeams className=" w-screen object-cover z-10" />
      </section>



    </main>
  );
}
