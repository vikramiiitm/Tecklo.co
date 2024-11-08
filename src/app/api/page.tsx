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
            title: "Application Programming Interface (API)",
            description:
                "We specialize in delivering custom API solutions that empower your business to scale and innovate. Our API services are designed to seamlessly connect your systems, allowing you to integrate applications, automate processes, and enhance user experience. Here's how we provide this:",
            features: [
                "<p><strong>Tailored Integrations:</strong> We build APIs that are uniquely designed to fit your business needs. Whether you need to integrate a CRM, ERP, or third-party service, our APIs ensure smooth data flow and functionality across platforms.</p>",
                "<p><strong>Secure and Scalable:</strong> Tecklo provides secure APIs that protect sensitive data while ensuring scalability. As your business grows, our APIs adapt to handle increased data and user requests without compromising speed or performance.</p>",
                "<p><strong>Real-Time Data Access:</strong> Our APIs give your applications real-time access to data, enabling instant updates, fast decision-making, and enhanced user experience across mobile apps, websites, and internal systems.</p>",
                "<p><strong>API Management and Support:</strong> We don’t just build APIs; we also offer ongoing management and support services. From monitoring API performance to troubleshooting issues, we ensure your systems are always running smoothly.</p>",
            ],
        img:"https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHwy"
        },  // You can add more services here...
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
