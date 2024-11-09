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
        title: "Startup Digital Foundation",
        description:
            "We help startups establish a strong digital presence with tailored strategies and continuous support:",
        features: [
            "<p><strong>Establish a Strong Digital Foundation:</strong> We guide startups in building a solid digital presence from the ground up.</p>",
            "<p><strong>Custom Website Development:</strong> We create tailored, professional websites to meet your unique needs and objectives.</p>",
            "<p><strong>Brand Enhancement:</strong> We enhance your branding to make it memorable and impactful for your target audience.</p>",
            "<p><strong>SEO and Online Marketing:</strong> Our team optimizes your online marketing and SEO to increase your visibility and reach.</p>",
            "<p><strong>Streamlined Operations:</strong> We assist in selecting the right tools to make your operations more efficient and effective.</p>",
            "<p><strong>Smooth Launch and Long-Term Success:</strong> We ensure your startup launches smoothly with a focus on sustaining long-term online success.</p>",
            "<p><strong>Support for Startups:</strong> Whether you're starting fresh or refining your presence, we provide expert guidance at every step.</p>",
        ],
        img: "https://img.freepik.com/free-photo/person-using-tablet_53876-13420.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid"
    },
];


function Page() {
    return (
        <div>
            
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
