import { Github } from 'lucide-react';
import React from 'react';

interface Project {
    imageURL: string;
    title: string;
    description: string;
    topics: string[];
    liveURL: string;
    githubURL: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-400/20 hover:border-purple-400/80 transition-all duration-300 group flex flex-col h-full">
            <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-cover bg-center relative">
                    <img
                        src={project.imageURL}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20
                        opacity-60 group-hover:opacity-20 transition-opacity duration-300"
                    ></div>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-3 text-slate-900 group-hover:text-purple-400 transition-color duration-300">
                    {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-grow">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.topics.map((topic) => (
                        <span
                            key={topic}
                            className="px-3 py-1 bg-purple-200 hover:bg-purple-300 text-purple-900 border border-purple-200 text-xs rounded-full font-medium"
                        >
                            {topic}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 mt-auto">
                    <a
                        href={project.liveURL}
                        target="_blank"
                        className="flex-1 text-white bg-gradient-to-r from-purple-400 to-purple-600 hover:text-gray-100 hover:shadow-lg text-center py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 transform transform-gpu hover:scale-[1.01]"
                    >
                        Live Demo
                    </a>
                    <a
                        href={project.githubURL}
                        className="text-slate-500 hover:text-purple-400 transition-all duration-300 transform transform-gpu hover:scale-[1.1] p-2 rounded-lg hover:bg-gray-500/5"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;
