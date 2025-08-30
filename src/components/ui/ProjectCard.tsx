import { Github } from 'lucide-react';
import React from 'react';
import { translations, type Language } from '../lib/translate';

/**
 * Interface: Project
 *
 * Defines the structure of a project object displayed in the card.
 * Note: All string fields are expected to be pre-translated based on the current language.
 */
interface Project {
    imageURL: string; // URL of the project preview image
    title: string; // Project title (e.g., "E-Commerce Dashboard")
    description: string; // Short description of the project
    topics: readonly string[]; // Array of tech stacks or categories (e.g., ["React", "Tailwind"])
    liveURL: string; // URL to the live deployment
    githubURL: string; // URL to the GitHub repository
}

/**
 * Interface: ProjectCardProps
 *
 * Props passed to the ProjectCard component.
 * - project: The project data to render
 * - index: Index for potential animation or key usage (currently unused but included for future flexibility)
 * - theme: Current color theme for styling consistency
 * - lang: Current language for translation key lookup
 */
interface ProjectCardProps {
    project: Project;
    index: number;
    theme: string;
    lang: Language;
}

/**
 * ProjectCard Component
 *
 * A reusable, responsive card component that displays:
 * - A project image preview with hover overlay
 * - Title, description, and topic tags
 * - Action buttons: "Live Demo" and "GitHub"
 *
 * Features:
 * - Glassmorphism effect with backdrop blur
 * - Hover animations (scale, color, opacity)
 * - Responsive layout using flexbox
 * - Accessible links with proper `target="_blank"` and `rel` safety
 * - Gradient-styled buttons and subtle border transitions
 *
 * Accessibility:
 * - GitHub link includes descriptive aria-label
 * - Image uses alt text for screen readers
 * - Interactive elements are keyboard navigable
 *
 * Performance:
 * - Images use `loading="lazy"` to defer offscreen image loading
 * - CSS transitions are GPU-optimized where applicable
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project, theme, lang }) => {
    return (
        <div
            className={`
                bg-white/10 backdrop-blur-sm
                rounded-2xl overflow-hidden
                border border-${theme}-400/20 hover:border-${theme}-400/80
                transition-all duration-300
                group flex flex-col h-full
                transform-gpu hover:shadow-lg hover:-translate-y-1
            `}
        >
            {/* Image Section with Hover Overlay */}
            <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-cover bg-center relative">
                    <img
                        src={project.imageURL}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy" // Improves performance for offscreen images
                    />
                    {/* Gradient overlay that fades on hover */}
                    <div
                        className={`
                            absolute inset-0
                            bg-gradient-to-br from-${theme}-400/20 to-${theme}-600/20
                            opacity-60 group-hover:opacity-20
                            transition-opacity duration-300
                        `}
                    ></div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3
                    className={`
                        text-lg font-semibold mb-3
                        text-slate-900 dark:text-slate-100
                        group-hover:text-${theme}-400 dark:group-hover:text-${theme}-200
                        transition-colors duration-300
                    `}
                >
                    {project.title}
                </h3>

                {/* Description */}
                <p
                    className="
                        text-slate-600 dark:text-slate-200
                        text-sm mb-4 leading-relaxed
                        flex-grow
                    "
                >
                    {project.description}
                </p>

                {/* Topic Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.topics.map((topic) => (
                        <span
                            key={topic}
                            className={`
                                px-3 py-1
                                bg-${theme}-200 hover:bg-${theme}-300
                                text-${theme}-900
                                border border-${theme}-200
                                text-xs rounded-full font-medium
                                transition-colors duration-200
                                cursor-default
                            `}
                        >
                            {topic}
                        </span>
                    ))}
                </div>

                {/* Action Buttons (Live Demo & GitHub) */}
                <div className="flex gap-3 mt-auto">
                    {/* Live Demo Button */}
                    <a
                        href={project.liveURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            flex-1
                            text-white dark:text-slate-800
                            bg-gradient-to-r from-${theme}-400 to-${theme}-600
                            dark:from-${theme}-200 dark:to-${theme}-300
                            hover:text-slate-100 dark:hover:text-slate-900
                            hover:shadow-lg
                            text-center py-2 px-4 rounded-lg
                            text-sm font-medium
                            transition-all duration-300
                            transform transform-gpu hover:scale-[1.01]
                        `}
                    >
                        {translations[lang].titles.live}
                    </a>

                    {/* GitHub Link */}
                    <a
                        href={project.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            text-slate-500 hover:text-${theme}-400
                            dark:text-slate-100 dark:hover:text-${theme}-200
                            transition-all duration-300
                            transform transform-gpu hover:scale-[1.1]
                            p-2 rounded-lg hover:bg-gray-500/5
                        `}
                        aria-label={`View ${project.title} on GitHub`}
                    >
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
