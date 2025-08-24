import { Code } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

/**
 * Skills Component
 *
 * Displays a categorized list of technical skills with proficiency levels.
 * Each skill is shown as a progress bar with a percentage value.
 *
 * Structure:
 * - Section with gradient background (light/dark mode compatible)
 * - Three-column grid layout on desktop (stacks on mobile)
 * - Each category (Front-End, Back-End, Tools) in a glassmorphic card
 * - Progress bars reflect skill level from 0–100%
 */

interface SkillsProps {
    theme: string;
}

const Skills: React.FC<SkillsProps> = ({ theme }) => {
    // Array of skill categories
    // Each category has:
    // - title: Name of the category (e.g., "Front-End")
    // - skills: Array of individual skills with:
    //   - name: Skill or technology (e.g., "React")
    //   - level: Proficiency percentage (0–100), used for progress bar width
    const SkillCategory = [
        {
            title: 'Front-End',
            skills: [
                { name: 'React', level: 10 },
                { name: 'TypeScript', level: 95 },
                { name: 'Next.js', level: 35 },
                { name: 'Sass/SCSS', level: 70 },
                { name: 'Tailwind', level: 85 },
            ],
        },
        {
            title: 'Back-End',
            skills: [
                { name: 'Node.js', level: 70 },
                { name: 'PostgreSQL', level: 95 },
                { name: 'MongoDB', level: 50 },
                { name: 'Django', level: 80 },
                { name: 'GraphQL', level: 0 },
            ],
        },
        {
            title: 'Tools',
            skills: [
                { name: 'Git', level: 100 },
                { name: 'Docker', level: 20 },
                { name: 'AWS', level: 70 },
                { name: 'Figma', level: 45 },
                { name: 'Jest', level: 85 },
            ],
        },
    ];

    return (
        <section
            id="skills"
            className={`py-20 px-4 bg-gradient-to-bl from-slate-50 via-${theme}-100/50 to-slate-100 dark:from-slate-900 dark:via-${theme}-950 dark:to-slate-900`}
        >
            <div className="max-w-6xl mx-auto">
                {/* Section title centered above the skills grid */}
                <SectionTitle text="Skills & Expertise" />

                {/* Grid layout: 1 column on mobile, 3 on desktop */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Map over each skill category */}
                    {SkillCategory.map((category) => (
                        <div
                            key={category.title}
                            className={`g-white/5 backdrop-blur-sm rounded-2xl p-8 border border-${theme}-400/20 hover:border-${theme}-400/80 transition-all duration-300`}
                        >
                            {/* Category header with icon and title */}
                            <div className="flex items-center mb-6">
                                <Code
                                    className={`w-6 h-6 text-${theme}-400 mr-3`}
                                />
                                <h3 className="text-xl font-semibold dark:text-slate-100">
                                    {category.title}
                                </h3>
                            </div>

                            {/* List of skills within this category */}
                            <div className="space-y-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="space-y-2">
                                        {/* Skill name and percentage */}
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-600 dark:text-slate-200">
                                                {skill.name}
                                            </span>
                                            <span
                                                className={`text-${theme}-400 dark:text-slate-300 text-sm`}
                                            >
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress bar container */}
                                        <div className="w-full bg-slate-300 dark:bg-slate-300/25 rounded-full h-2">
                                            {/* Filled portion of progress bar, width based on skill level */}
                                            <div
                                                className={`bg-gradient-to-r from-${theme}-400 to-${theme}-600 dark:from-${theme}-200 dark:to-${theme}-300 h-2 rounded-full transition-all duration-300`}
                                                style={{
                                                    width: `${skill.level}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
