import { ArrowDown } from 'lucide-react';

/**
 * Hero Component
 *
 * The landing section of the website, visible on initial load.
 * Features:
 * - Full-screen height with centered content
 * - Profile image with ring effect
 * - Name displayed with gradient text
 * - Current roles/subtitle
 * - List of professional occupations
 * - Call-to-action buttons for navigation
 * - Animated downward arrow indicating scrollability
 */

interface HeroProps {
    theme: string;
}


const Hero: React.FC<HeroProps> = ({ theme }) => {
    // List of current roles or titles to display under the name
    const occupation = [
        'CEO and product architect of Tesla',
        'Founder and CEO of xAI',
        'Founder, CEO, and chief engineer of SpaceX',
        'President of the Musk Foundation',
    ];

    /**
     * Scrolls to a specific section by ID
     *
     * @param sectionID - The ID of the target section (e.g., 'projects', 'contact')
     */
    const scrollToSection = (sectionID: string) => {
        const element = document.getElementById(sectionID);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className={`min-h-screen flex items-center justify-center
        relative overflow-hidden w-full bg-gradient-to-bl from-slate-50 via-${theme}-100/50 to-slate-100 dark:from-slate-900 dark:via-${theme}-950 dark:to-slate-900`}
        >
            {/* Main content container (centered, above other elements) */}
            <div className="text-center z-10">
                {/* Profile Image */}
                <div className="mb-8">
                    <div
                        className="w-40 h-40 mx-auto rounded-full overflow-hidden
                    shadow-2xl ring-4 ring-white/40 dark:ring-white/70"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src="/folium/avatar.webp"
                            alt="John Doe"
                        />
                    </div>
                </div>

                {/* Name with gradient styling */}
                <div className="mb-6 text-5xl md:text-7xl font-bold">
                    <h1 className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-transparent bg-clip-text dark:from-white dark:via-slate-300 dark:to-white">
                        John Doe
                    </h1>
                </div>

                {/* Subtitle - currently shows first occupation */}
                <div className="mb-8">
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-200">
                        CEO and product architect of Tesla | Founder and CEO of
                        xAI
                    </p>
                </div>

                {/* Detailed list of occupations */}
                <div className="mb-12">
                    <div className="text-lg text-slate-500 dark:text-slate-300 max-w-3xl leading-relaxed">
                        {/* Two-column layout on medium screens and up */}
                        <ul className="space-y-2 md:columns-2 md:gap-4 ml-4">
                            {occupation.map((item) => (
                                <li className="flex items-start" key={item}>
                                    <span className="mr-2">●</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Primary Button: View My Work */}
                    <button
                        onClick={() => scrollToSection('projects')}
                        className={`cursor-pointer bg-gradient-to-r from-${theme}-400 to-${theme}-600
                    hover:shadow-lg text-white px-8 py-4 rounded-full font-bold transition-all
                    duration-300 transform-gpu hover:scale-[1.05] shadow-md`}
                    >
                        View My Work
                    </button>

                    {/* Secondary Button: Get In Touch */}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className={`cursor-pointer border-2 border-${theme}-400 text-${theme}-400
                    hover:bg-${theme}-400 hover:text-white px-8 py-4 rounded-full font-bold transition-all
                    duration-300 transform-gpu hover:scale-[1.05]`}
                    >
                        Get In Touch
                    </button>
                </div>
            </div>

            {/* Animated downward arrow indicating scroll */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ArrowDown className="w-6 h-6 text-slate-400" />
            </div>
        </section>
    );
};

export default Hero;
