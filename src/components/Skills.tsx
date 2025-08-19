import { Code } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
const Skills = () => {
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
            className="py-20 px-4 bg-gradient-to-bl from-slate-50 via-purple-100/50 to-slate-100 dark:from-slate-900 dark:via-purple-950 dark:to-slate-900"
        >
            <div className="max-w-6xl mx-auto">
                <SectionTitle text="Skills & Expertise" />
                <div className="grid md:grid-cols-3 gap-8">
                    {SkillCategory.map((category) => (
                        <div
                            key={category.title}
                            className="g-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/80 transition-all duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <Code className="w-6 h-6 text-purple-400 mr-3" />
                                <h3 className="text-xl font-semibold dark:text-slate-100">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-600 dark:text-slate-200">
                                                {skill.name}
                                            </span>
                                            <span className="text-purple-400 dark:text-slate-300 text-sm">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        <div className="w-full bg-slate-300 dark:bg-slate-300/25 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-400 dark:to-purple-300 h-2 rounded-full transition-all duration-300"
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
