import SectionTitle from './ui/SectionTitle';
import ProjectCard from './ui/ProjectCard';
import { translations, type Language } from './lib/translate';

/**
 * Projects Component
 *
 * Displays a responsive grid of project cards showcasing:
 * - Personal or professional projects with images, titles, descriptions, and tech tags
 * - Live demo and GitHub links (currently placeholders)
 *
 * Features:
 * - Responsive layout: 1 column on mobile, 2 on tablet, 3 on desktop
 * - Reusable ProjectCard components
 * - Section-level gradient background (light/dark mode compatible)
 * - Semantic HTML with accessible structure
 *
 * Accessibility:
 * - Section labeled by ID for screen readers
 * - Project cards should include appropriate ARIA roles and labels via ProjectCard component
 *
 * Note: Project data is sourced from translation files, allowing multilingual support.
 * The index is used as key; consider using a unique project ID if available in the future.
 */
interface ProjectsProps {
    theme: string;
    lang: Language;
}

const Projects: React.FC<ProjectsProps> = ({ theme, lang }) => {
    return (
        <section
            id={translations[lang].navbar.navlinks[3]}
            className={`
                py-20 px-4
                bg-gradient-to-bl 
                from-slate-50 via-${theme}-100/50 to-slate-100
                dark:from-slate-900 dark:via-${theme}-950 dark:to-slate-900
            `}
            aria-labelledby="projects-title"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <SectionTitle
                    text={translations[lang].titles.projs}
                    theme={theme}
                />

                {/* Grid Layout for Project Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {translations[lang].projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            theme={theme}
                            lang={lang}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
