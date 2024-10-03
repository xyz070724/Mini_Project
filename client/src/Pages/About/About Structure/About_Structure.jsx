import React from 'react';
import About_Image from "../../../assets/Images/Arbo_pic.jpeg";

const About = () => {
    return (
        <section className="bg-green-200 ">
            <div className="container mx-auto w-full h-full sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 w-full h-full md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">About Us</h2>
                        <p className="mt-4 text-gray-900 text-lg">
                            The Botanical Garden at The Maharaja Sayajirao University of Baroda, established in
                            1920
                            and
                            spanning 2.5 acres, serves as a vital resource for plant science students and
                            researchers.
                            Originally guided by Prof. S. V. Shevade, it has grown to house over 1,059 plant
                            species,
                            including rare and endangered varieties. The garden features diverse plant
                            collections
                            such as
                            Angiosperms, Trees, Cacti, Succulents, and Orchids, as well as a notable assortment
                            of
                            Gymnosperms and medicinal plants. Significant additions include a Medicinal Plant
                            section
                            established in 2009 and various specialized facilities like greenhouses and an
                            aquatic
                            pond.
                            Annually, around 5,000 students benefit from its educational and conservation
                            efforts,
                            making it
                            a key repository of biodiversity and a valuable learning environment.
                        </p>
                        
                    </div>
                    <div className="mt-12 md:mt-0 p-3 ">
                        <img
                            src={About_Image}
                            alt="About Us Image"
                            className="object-cover flex-auto w-[450px] h-[450px] rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
