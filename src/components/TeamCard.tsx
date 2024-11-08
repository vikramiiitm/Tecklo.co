// components/TeamCard.tsx
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
// import Image from "next/image";

type TeamCardProps = {
    name: string;
    role: string;
    image?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    number?: string;
    location?:string;
};

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, linkedin, twitter, github, number, location }) => (
    <div className=" rounded p-6 text-center h-64 w-96 justify-center flex flex-col hover:shadow-2xl hover:border hover:rounded-2xl hover:bg-purple-950 shadow text-gray-800 hover:text-white transition duration-300">
        {/* <Image width={1000} height={1000}
            className="h-[40vh] w-full object-center lg:h-[60vh] lg:w-auto rounded  mx-auto object-cover"
            src={image}
            alt={`${name}'s photo`}
        /> */}
        <h3 className="mt-4 text-2xl font-semibold">{name}</h3>
        <p className="">{role}</p>
        <p className="text-purple-500">{number}</p>
        <p className="text-purple-500">{location}</p>
        {/* <div className="flex justify-center mt-4 space-x-4 text-gray-500">
            {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-500" />
                </a>
            )}
            {twitter && (
                <a href={twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="hover:text-blue-400" />
                </a>
            )}
            {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-black" />
                </a>
            )}
        </div> */}
    </div>
);

export default TeamCard;
