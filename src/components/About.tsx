import { User, Code, Download } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import React from 'react';

/**
 * About Component
 *
 * A two-column section that introduces the user with:
 * - A personal story (left column)
 * - A list of skills/services offered (right column)
 * - A "Download Resume" link with icon
 *
 * Styled with glassmorphism, gradient backgrounds, and smooth hover effects.
 * Responsive layout using Tailwind’s grid system.
 */

interface AboutProps {
    theme: string;
}

const About: React.FC<AboutProps> = ({ theme }) => {
    // List of professional skills or services the user offers
    const iDo = [
        'Full-Stack Web Development', // Fixed typo: 'Developement' → 'Development'
        'Responsive UI/UX Design',
        'Modern JavaScript Frameworks', // Pluralized for consistency
        'API Development & Integration',
    ];

    return (
        <section
            id="about"
            className={`
                py-20 px-4
                bg-gradient-to-bl 
                from-slate-50 via-${theme}-100/50 to-slate-100
                dark:from-slate-900 dark:via-${theme}-950 dark:to-slate-900
            `}
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <SectionTitle text="About Me" />

                {/* Two-column layout (stacks on mobile) */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Personal Story */}
                    <div
                        className={`
                            bg-white/5 backdrop-blur-sm
                            rounded-2xl p-8
                            border border-${theme}-400/20 hover:border-${theme}-400/80
                            transition-all duration-300
                            transform-gpu hover:shadow-lg
                        `}
                    >
                        <div className="flex items-center mb-6">
                            <User
                                className={`w-8 h-8 text-${theme}-400 mr-3`}
                            />
                            <h3 className="text-2xl font-semibold dark:text-slate-100">
                                My Story
                            </h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-200 leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores ea, voluptatibus quidem quaerat illo,
                            ducimus dignissimos eius dolore veniam eveniet
                            sapiente minima corrupti aspernatur blanditiis
                            fugiat accusamus aut optio iste!
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores ea, voluptatibus quidem quaerat illo.
                        </p>
                    </div>

                    {/* Right Column: Skills & Resume */}
                    <div
                        className={`
                            bg-white/5 backdrop-blur-sm
                            rounded-2xl p-8
                            border border-${theme}-400/20 hover:border-${theme}-400/80
                            transition-all duration-300
                            transform-gpu hover:shadow-lg
                        `}
                    >
                        <div className="flex items-center mb-6">
                            <Code
                                className={`w-8 h-8 text-${theme}-400 mr-3`}
                            />
                            <h3 className="text-2xl font-semibold dark:text-slate-100">
                                What I Do
                            </h3>
                        </div>

                        {/* List of skills with bullet points */}
                        <div className="space-y-4">
                            {iDo.map((item, index) => (
                                <div className="flex items-center" key={index}>
                                    <div
                                        className={`w-3 h-3 bg-${theme}-400 rounded-full mr-3`}
                                    ></div>
                                    <span className="text-slate-600 dark:text-slate-200">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Resume Download Link */}
                        <div className="mt-4">
                            <a
                                href="/folium/resume.pdf"
                                download
                                className="inline-flex"
                                aria-label="Download resume as PDF"
                            >
                                <div
                                    className={`
                                    inline-flex items-center
                                    text-${theme}-600 hover:text-${theme}-400
                                    dark:text-${theme}-300 dark:hover:text-${theme}-400
                                    transition-colors duration-300
                                    group
                                `}
                                >
                                    <Download className="h-4 w-4 mr-3" />
                                    Download Resume
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
