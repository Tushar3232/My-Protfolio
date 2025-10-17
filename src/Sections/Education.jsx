import React from 'react';
import { GraduationCap } from "lucide-react";

const Education = () => {
    return (
        <div>
            <section id="education" className="bg-base-200 py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Section Title */}
                    <h2 className="text-4xl font-bold text-center mb-12">
                        <span className="text-primary">Education</span>
                    </h2>

                    {/* Education Card */}
                    <div className="relative border-l-4 border-primary pl-8 bg-base-100 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="absolute -left-6 top-6 bg-primary text-white p-3 rounded-full shadow-md">
                            <GraduationCap size={28} />
                        </div>

                        <h3 className="text-2xl font-semibold mb-2">
                            Diploma in Computer Science and Technology (CST)
                        </h3>
                        <p className="text-lg text-gray-700 mb-1">
                            Tangail Polytechnic Institute
                        </p>
                        <p className="text-sm text-gray-500">Session: 2022 - 2023</p>
                        <p className="text-sm text-gray-500">
                            Currently studying (6th Semester Running)
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Education;