import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";


const FAQ_Structure = () => {
    const [answers, setAnswers] = useState({
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false,
    });

    const toggleAnswer = (answerId) => {
        setAnswers((prevAnswers) => ({ ...prevAnswers, [answerId]: !prevAnswers[answerId] }));
    };

    return (
        <>
            <section className="py-10 sm:py-16 bg-[#C9E8D7] lg:py-24">

                <div className="px-4  mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Explore Common Questions
                        </h2>
                    </div>
                    <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                        <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => toggleAnswer('answer1')}
                            >
                                <span className="flex text-lg font-semibold text-black"> My leaves are falling off or dying?</span>
                                <RiArrowDropDownLine
                                    className='w-[35px] h-[35px] ' />
                            </button>
                            <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${answers.answer1 ? 'block' : 'hidden'}`}>
                                <p>If they're falling apart when you touch them, are soggy or brittle and are going
                                    dark brown, these are signs of rot. Wash off the and trim off the affected
                                    parts; you'll also need to trim off some leaves to keep it in balance.</p>
                            </div>
                        </div>

                        <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => toggleAnswer('answer2')}
                            >
                                <span className="flex text-lg font-semibold text-black"> What causes leaves to become pale? </span>
                                <RiArrowDropDownLine
                                    className='w-[35px] h-[35px] ' />
                            </button>
                            <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${answers.answer2 ? 'block' : 'hidden'}`}>
                                <p>The most common reason for leaves turning pale is that they're not getting
                                    enough sunlight. </p>
                            </div>
                        </div>
                        <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => toggleAnswer('answer3')}
                            >
                                <span className="flex text-lg font-semibold text-black"> What causes brown crispy leaves?</span>
                                <RiArrowDropDownLine
                                    className='w-[35px] h-[35px] ' />
                            </button>
                            <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${answers.answer3 ? 'block' : 'hidden'}`}>
                                <p>Browning leaves are typically caused by under watering, sunburn, or
                                    overwatering. If the leaf tips are turning brown and crunchy, the soil likely
                                    became too dry for too long in between waterings.</p>
                            </div>
                        </div>

                        <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => toggleAnswer('answer4')}
                            >
                                <span className="flex text-lg font-semibold text-black"> How do I choose a plant? </span>
                                <RiArrowDropDownLine
                                    className='w-[35px] h-[35px] ' />
                            </button>
                            <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${answers.answer4 ? 'block' : 'hidden'}`}>
                                <p>Check for insects by looking at the underside of leaves.
                                    Avoid plants with drought stress, indicated by yellow foliage. </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section></>
    );
};

export default FAQ_Structure;