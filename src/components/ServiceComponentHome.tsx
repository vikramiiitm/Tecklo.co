import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = [
  {
    title: "Graphic Design and User Interface (UI) Development",
   
  },
  {
    title: "Application Programming Interface (API)",
    
  },
  {
    title: "Search Engine Optimization (SEO) ",
    
  },
  {
    title: "Digital Marketing, Applications Advertising, and Content Strategy ",
   
  },
  {
    title: "Web Infrastructure and Operations      ",
   
  },
  {
    title: "Support and Maintenance  ",
   
  },
  {
    title: "Start up Assistance",
   
  },
];

export default function ServicesComponent() {
  const [visibleDescriptionIndex, setVisibleDescriptionIndex] = useState<
    number | null
  >(null);

  // Function to handle visibility toggle
  const toggleDescription = (index: number) => {
    setVisibleDescriptionIndex(
      visibleDescriptionIndex === index ? null : index
    );
  };

  // Close description on scroll
  useEffect(() => {
    const handleScroll = () => {
      setVisibleDescriptionIndex(null);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 ">
      {Services.map((service, index) => {
        const isVisible = visibleDescriptionIndex === index;

        return (
          <Fade direction="up" triggerOnce key={index}>
            <Card
              className={`border flex flex-col  justify-center items-center rounded bg-white  hover:shadow-lg hover:shadow-blue-400  transform transition-all duration-500 ease-in-out w-[90vw] sm:w-[40vw] xl:w-[25vw] aspect-square ${
                isVisible ? "lg:h-[20rem] xl:h-[22rem]  py-10 " : "h-60 "
              }`}
              style={{
                overflow: "hidden",
                transition: "height 0.3s ease-in-out",
              }}
              onClick={() => toggleDescription(index)}
            >
              <CardHeader className=" p-4">
                <CardTitle className="text-blue-600 text-2xl text-center">
                  {service.title}
                </CardTitle>
               
              </CardHeader>

              {/* {isVisible && (
                <CardContent className="relative text-gray-500 font-medium text-start px-4">
                  {service.content}
                </CardContent>
              )} */}
            </Card>
          </Fade>
        );
      })}
    </div>
  );
}
