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
        title: "Web Infrastructure and Operations",
        description:
            "We ensure your website runs smoothly and securely. Here’s what we do:",
        features: [
            "<p><strong>Server Setup and Maintenance:</strong> We handle everything from setting up your hosting server to managing it, ensuring your website stays online and runs efficiently.</p>",
            "<p><strong>Performance Optimization:</strong> We enhance your site’s speed, reduce downtime, and make sure it can handle traffic spikes without issues.</p>",
            "<p><strong>Security and Backups:</strong> Your website will be protected with top-notch security protocols, including SSL encryption and regular backups to keep your data safe.</p>",
            "<p>This service is ideal for ensuring your website is fast, reliable, and secure, so you don’t have to worry about technical issues.</p>",
            "<p>We integrate your website with enterprise systems to streamline operations. Here’s how it works:</p>",
            "<p><strong>ERP Integration:</strong> We connect your site with your enterprise resource planning (ERP) system to manage inventory, finances, and other business processes efficiently.</p>",
            "<p><strong>CRM Integration:</strong> We link your customer relationship management (CRM) system to track and manage customer interactions, improving sales and customer support.</p>",
            "<p>This service helps you automate and simplify business operations, giving you better control over your processes and customer data.</p>",
        ],
        img:"https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE1vYmlsZSUyMERldmVsb3BtZW50fGVufDB8fDB8fHwy"
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
