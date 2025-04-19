import React from 'react';
import left from '../assets/image copy 37.png';

const AboutUs = () => {

    const product = [
        {
            p: "Our company, which produces cotton fabrics and ecological bags, has been supplying cotton fabrics to the global market for many years."
        },
        {
            p: "Our company started its activity 17 years ago and has been gaining the trust of our customers."
        },
        {
            p: "The main goal of our company is to create high-quality, durable and environmentally friendly products."
        },
        {
            p: "Manufacturing processes are fully environmentally friendly and environmentally friendly."
        },
        {
            p: "Using modern technologies, we are able to produce various cotton products at a high level."
        },
        {
            p: "Also, we act as the official representative of DongJu weaving equipment in Uzbekistan."
        },
        {
            p: "Every year, more than 80 types of products are produced in our factory, as a result of which the company ensures high quality and stable production."
        },
        {
            p: "More than 50 looms are operating in our enterprise based on modern technologies."
        },
        {
            p: "In our production processes, we ensure the production of only high-quality and environmentally safe products."
        },
        {
            p: "According to the requirements of our customers, the production of eco-friendly and modern design bags has been launched."
        },
        {
            p: "Our company is always happy to provide quality products and high level of service to its customers."
        },
    ];

    return (
        <div className="w-full py-12 bg-gray-100">
            <br />
            <br />
            <br />
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 p-6 bg-white rounded-2xl shadow-lg">
                    <div className="max-w-xl space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Ecologically Clean Sleep Products</h1>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Our company, which produces cotton fabrics and ecological bags, has been supplying cotton fabrics to the global market for many years.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Our company started its activity 17 years ago and has been gaining the trust of our customers.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            The main goal of our company is to create high-quality, durable and environmentally friendly products.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Manufacturing processes are fully environmentally friendly and environmentally friendly.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Using modern technologies, we are able to produce various cotton products at a high level.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Also, we act as the official representative of DongJu weaving equipment in Uzbekistan.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Every year, more than 80 types of products are produced in our factory, as a result of which the company ensures high quality and stable production.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            More than 50 looms are operating in our enterprise based on modern technologies.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            In our production processes, we ensure the production of only high-quality and environmentally safe products.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            According to the requirements of our customers, the production of eco-friendly and modern design bags has been launched.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Our company is always happy to provide quality products and high level of service to its customers.
                        </p>
                    </div>
                    <img src={left} alt="Eco Products" className="w-full md:w-1/2 rounded-xl shadow-lg object-cover" />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
