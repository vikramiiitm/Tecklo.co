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
        title: "Digital Marketing, Applications Advertising, and Content Strategy",
        description:
            "We help you reach and engage your target audience effectively. Here’s how we can help:",
        features: [
            "<p><strong>Digital Marketing:</strong> We create customized online campaigns using social media, email, and search engines to drive targeted traffic to your website. Our strategies are data-driven to ensure maximum ROI.</p>",
            "<p><strong>Applications Advertising (PPC):</strong> We manage pay-per-click (PPC) ads on platforms like Google and social media to ensure your business gets instant visibility. You only pay for the clicks you receive, making it cost-effective and result-oriented.</p>",
            "<p><strong>Content Strategy:</strong> We create engaging, high-quality content—blog posts, articles, and multimedia—that attracts visitors and keeps them coming back. Our content aligns with your brand and enhances your SEO efforts.</p>",
            "<p>This service is perfect for businesses looking to grow online, drive traffic, and increase conversions through strategic marketing and advertising.</p>",
        ],
        img:"https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2ViJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D"
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
