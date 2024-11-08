import { useState, useEffect } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface Service {
    title: string;
    description: string;
    img?: string;
    link?: string;
}

interface ServiceCardProps {
    services: Service[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ services }) => {
    const [visibleDescriptionIndex, setVisibleDescriptionIndex] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const toggleDescription = (index: number) => {
        setVisibleDescriptionIndex(visibleDescriptionIndex === index ? null : index);
    };

    useEffect(() => {
        if (visibleDescriptionIndex !== null) {
            const handleScroll = () => setVisibleDescriptionIndex(null);
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [visibleDescriptionIndex]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            {services.map((service, index) => {
                const isVisible = visibleDescriptionIndex === index;
                const isBlurred = hoveredIndex !== null && hoveredIndex !== index;

                return (
                    <Fade direction="up" key={index}>
                        <Card
                            aria-expanded={isVisible}
                            className={`h-auto lg:h-[62vh] transition-all rounded shadow-md overflow-hidden duration-300 ${isBlurred ? "blur-lg" : ""}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => toggleDescription(index)}
                        >
                            {service.img && (
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-[40vh] top-0 left-0 object-cover z-0"
                                />
                            )}
                            <CardHeader className="text-start p-4 z-10">
                                <CardTitle className="text-start text-purple-500 uppercase text-xl">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="relative text-xs text-start px-4 z-10">
                                {service.description}
                            </CardContent>
                            <CardContent className="relative text-sm text-start px-4 z-10">
                                {service.link && (
                                    <Link className="bg-purple-500 p-2 text-white  hover:bg-purple-600 rounded" href={service.link}>
                                        Read More...
                                    </Link>
                                )}
                            </CardContent>
                        </Card>
                    </Fade>
                );
            })}
        </div>
    );
};

export default ServiceCard;
