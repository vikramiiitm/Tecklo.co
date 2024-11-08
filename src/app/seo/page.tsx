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
        title: "Search Engine Optimization (SEO)",
        description:
            "SEO helps your website rank higher on search engines, making it easier for customers to find you. Here’s what we provide:",
        features: [
            "<p><strong>Keyword Optimization:</strong> We identify the best keywords for your business and use them strategically across your website, improving search engine rankings.</p>",
            "<p><strong>On-Page SEO:</strong> We optimize your content, meta tags, headings, and images to ensure search engines easily understand your pages and rank them higher.</p>",
            "<p><strong>Technical SEO:</strong> We enhance your site’s speed, mobile-friendliness, and security, and ensure it’s easy for search engines to crawl and index.</p>",
            "<p>With our SEO service, your website will attract more visitors, rank higher on Google, and convert more leads—helping your business grow organically.</p>",
        ],
        img:"https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy"
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
