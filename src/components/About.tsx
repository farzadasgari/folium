import { User, Code, Download } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import React from 'react';
import { translations, type Language } from './lib/translate';

/**
 * About Component
 *
 * A two-column section introducing the user:
 * - Left: personal story
 * - Right: skills/services + resume download link
 *
 * Features:
 * - Glassmorphism styling (blur, transparency, subtle borders)
 * - Gradient background adapting to `theme` + dark mode
 * - Responsive layout with Tailwind’s grid utilities
 *
 * Props:
 * - theme: a string that controls Tailwind color utility classes
 * - lang: current language code, passed to `translations`
 */

interface AboutProps {
    theme: string;
    lang: Language;
}

const About: React.FC<AboutProps> = ({ theme, lang }) => {
    return (
        <section
            id={translations[lang].navbar.navlinks[1]}
            className={`
                py-20 px-4
                bg-gradient-to-bl 
                from-slate-50 via-${theme}-100/50 to-slate-100
                dark:from-slate-900 dark:via-${theme}-950 dark:to-slate-900
            `}
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <SectionTitle
                    text={translations[lang].titles.about}
                    theme={theme}
                />

                {/* Responsive two-column layout */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* === Left Column: Personal Story === */}
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
                                {translations[lang].about.storyTitle}
                            </h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-200 leading-relaxed mb-6">
                            {translations[lang].about.story}
                        </p>
                    </div>

                    {/* === Right Column: Skills & Resume === */}
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
                                {translations[lang].about.iDoTitle}
                            </h3>
                        </div>

                        {/* Skills / Services List */}
                        <div className="space-y-4">
                            {translations[lang].about.iDo.map((item, index) => (
                                <div className="flex items-center" key={index}>
                                    <div
                                        className={`w-3 h-3 bg-${theme}-400 rounded-full mr-3`}
                                    />
                                    <span className="text-slate-600 dark:text-slate-200">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Resume Download Button */}
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
                                    {translations[lang].about.download}
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
