import ServicePageComponent from '@/components/servicePageComponent';
import React from 'react';

interface ServiceProps {
    title: string;
    description: string;
    features: string[];
    img:string;
}

const services: ServiceProps[] = [
    {
        title: "Graphic Design and User Interface (UI) Development",
        description:
            "We focus on making your website or application both visually appealing and easy to use. Here's what you get:",
        features: [
            "<strong>Graphic Design:</strong> We create eye-catching visuals that align with your brand, including logos, icons, and overall layouts.",
            "Every element is tailored to look professional and modern, ensuring your site stands out.",
            "<strong>Professional Design:</strong> Professional and modern design.",
            "<strong>Intuitive Navigation:</strong> Intuitive layout and navigation.",
            "<strong>Responsive Design:</strong> Responsive and mobile-friendly designs.",
            "<strong>User Interface (UI) Development:</strong>We design the layout and navigation to be intuitive, so visitors can easily find what they need.",
            "Our team ensures the site is responsive and mobile-friendly, giving a seamless experience across all devices.",
            "This service is ideal if you want a website that looks great and works effortlessly for your users. We handle the design and development, leaving you with a polished, user-friendly site. "
        ],
        img:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDI%3D"
    },
    // You can add more services here...
];

function Page() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Our Services</h1>
            {services.map((service, index) => (
                <ServicePageComponent
                    key={index}
                    img={service.img}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                />
            ))}
        </div>
    );
}

export default Page;
