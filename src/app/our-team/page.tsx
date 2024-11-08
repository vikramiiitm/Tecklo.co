// pages/team.js
import TeamCard from "@/components/TeamCard";

const teamMembers = [
    {
        name: "Uddashay Arora",
        role: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        github: "https://github.com/",
        number: "+1 (236) 238-1642",
        location: "British Columbia - West"
    },
    {
        name: "Prabhakar",
        role: "Territory Manager",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        github: "https://github.com/",
        number: "+1 (250) 797-2237",
        location: "Vancouver Island"
    },
    
    // Add more team members as needed
];

const TeamPage = () => (



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
            <div className="justify-center items-center flex flex-col gap-4 mt-4 h-full max-w-4xl mx-auto bg-transparent">
                    <h1 className="text-gray-700 font-bold text-4xl lg:text-7xl text-center ">
                        Our <span className="text-purple-500">Team</span>
                    </h1>
                    <p className="text-base font-medium text-gray-600 text-center max-w-2xl px-5 mx-auto">
                    We&apos;re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
                    </p>
                
            </div>
        </section>
        <section className=" min-h-screen py-12">

            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 ">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    </div>
    
);

export default TeamPage;
