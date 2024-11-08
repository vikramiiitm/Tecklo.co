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
        title: "Support and Maintenance",
        description:
            "We ensure your website stays up-to-date and functional with ongoing support. Here’s what we provide:",
        features: [
            "<p><strong>Regular Updates and Fixes:</strong> We handle software updates, bug fixes, and improvements to keep your website running smoothly.</p>",
            "<p><strong>Monitoring and Security:</strong> We continuously monitor your website’s performance and security, quickly addressing any issues that arise.</p>",
            "<p><strong>Customer Support:</strong> Our team is available to provide support and troubleshoot any problems you may encounter.</p>",
            "<p>This service is perfect for keeping your site in top shape, minimizing downtime, and ensuring it evolves with your business needs.</p>",
        ],
        img:"https://img.freepik.com/free-vector/call-center-helpdesk-concept-with-support-symbols-isometric-vector-illustration_1284-69102.jpg?ga=GA1.1.1237693334.1722664951&semt=ais_hybrid"
    },
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
