import { Github } from 'lucide-react';
import React from 'react';

/**
 * Interface: Project
 *
 * Defines the structure of a project object displayed in the card.
 */
interface Project {
    imageURL: string; // URL of the project preview image
    title: string; // Project title (e.g., "E-Commerce Dashboard")
    description: string; // Short description of the project
    topics: string[]; // Array of tech stacks or categories (e.g., ["React", "Tailwind"])
    liveURL: string; // URL to the live deployment
    githubURL: string; // URL to the GitHub repository
}

/**
 * Interface: ProjectCardProps
 *
 * Props passed to the ProjectCard component.
 */
interface ProjectCardProps {
    project: Project; // The project data to render
    index: number; // Index for potential animation or key usage (currently unused but included)
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
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div
            className="
                bg-white/10 backdrop-blur-sm
                rounded-2xl overflow-hidden
                border border-purple-400/20 hover:border-purple-400/80
                transition-all duration-300
                group flex flex-col h-full
                transform-gpu hover:shadow-lg hover:-translate-y-1
            "
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
                        className="
                            absolute inset-0
                            bg-gradient-to-br from-purple-400/20 to-purple-600/20
                            opacity-60 group-hover:opacity-20
                            transition-opacity duration-300
                        "
                    ></div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3
                    className="
                        text-lg font-semibold mb-3
                        text-slate-900 dark:text-slate-100
                        group-hover:text-purple-400 dark:group-hover:text-purple-200
                        transition-colors duration-300
                    "
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
                            className="
                                px-3 py-1
                                bg-purple-200 hover:bg-purple-300
                                text-purple-900
                                border border-purple-200
                                text-xs rounded-full font-medium
                                transition-colors duration-200
                                cursor-default
                            "
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
                        className="
                            flex-1
                            text-white dark:text-slate-800
                            bg-gradient-to-r from-purple-400 to-purple-600
                            dark:from-purple-300 dark:to-purple-400
                            hover:text-slate-100 dark:hover:text-slate-900
                            hover:shadow-lg
                            text-center py-2 px-4 rounded-lg
                            text-sm font-medium
                            transition-all duration-300
                            transform transform-gpu hover:scale-[1.01]
                        "
                    >
                        Live Demo
                    </a>

                    {/* GitHub Link */}
                    <a
                        href={project.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            text-slate-500 hover:text-purple-400
                            dark:text-slate-100 dark:hover:text-purple-200
                            transition-all duration-300
                            transform transform-gpu hover:scale-[1.1]
                            p-2 rounded-lg hover:bg-gray-500/5
                        "
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
