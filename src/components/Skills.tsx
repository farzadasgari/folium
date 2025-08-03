const Skills = () => {
    const SkillCategory = [
        {
            title: "Front-End",
            skills: [
                {name: "React", level: 90},
                {name: "TypeScript", level: 95},
                {name: "Next.js", level: 80},
                {name: "Sass/SCSS", level: 70},
                {name: "Tailwind", level: 85},
            ],
        },
        {
            title: "Back-End",
            skills: [
                {name: "Node.js", level: 70},
                {name: "PostgreSQL", level: 95},
                {name: "MongoDB", level: 90},
                {name: "Django", level: 80},
                {name: "GraphQL", level: 85},
            ],
        },
        {
            title: "Tools",
            skills: [
                {name: "Git", level: 80},
                {name: "Docker", level: 90},
                {name: "AWS", level: 70},
                {name: "Figma", level: 95},
                {name: "Jest", level: 85},
            ],
        }
    ];

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-6 font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        Skills & Expertise
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto"></div>
                </div>
            </div>
        </section>
    )
}

export default Skills;