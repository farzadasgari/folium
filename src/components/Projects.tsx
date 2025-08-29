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
 */
interface ProjectsProps {
    theme: string;
    lang: Language
}

const Projects: React.FC<ProjectsProps> = ({ theme, lang }) => {
    // Project data: List of projects to display in cards
    // Each project includes:
    // - imageURL: Local path to preview image (WebP for performance)
    // - title: Project name
    // - description: Brief summary of functionality and purpose
    // - topics: Tech stack or domain keywords
    // - liveURL: Link to live deployment (placeholder: '#')
    // - githubURL: Link to source code (placeholder: '#')
    const projects = [
        {
            imageURL: '/folium/projects/project1.webp',
            title: 'ProADV',
            description:
                'A Python package for processing and analyzing acoustic Doppler velocimeter (ADV) data, enabling researchers to clean, visualize, and extract turbulence statistics with ease.',
            topics: [
                'Python',
                'Signal Processing',
                'Fluid Dynamics',
                'Scientific Computing',
            ],
            liveURL: '#',
            githubURL: '#',
        },
        {
            imageURL: '/folium/projects/project2.webp',
            title: 'FlowViz',
            description:
                'An interactive web-based tool for visualizing 2D and 3D fluid flow simulations using WebGL and Python-generated datasets. Ideal for CFD post-processing and educational demonstrations.',
            topics: [
                'JavaScript',
                'WebGL',
                'Data Visualization',
                'Computational Fluid Dynamics',
            ],
            liveURL: '#',
            githubURL: '#',
        },
        {
            imageURL: '/folium/projects/project3.webp',
            title: 'SpectraPy',
            description:
                'A signal analysis toolkit in Python that simplifies spectral estimation, filtering, and noise reduction for experimental time-series data in research and industrial applications.',
            topics: ['Python', 'Signal Processing', 'FFT', 'Noise Reduction'],
            liveURL: '#',
            githubURL: '#',
        },
        {
            imageURL: '/folium/projects/project4.webp',
            title: 'HydroStat',
            description:
                'Open-source software for statistical analysis of hydrological time-series, including trend detection, outlier identification, and seasonal decomposition for environmental monitoring.',
            topics: [
                'R',
                'Time Series Analysis',
                'Environmental Science',
                'Statistics',
            ],
            liveURL: '#',
            githubURL: '#',
        },
        {
            imageURL: '/folium/projects/project5.webp',
            title: 'MeshLabX',
            description:
                'A lightweight desktop application for inspecting and cleaning 3D point cloud and mesh data from field surveys, designed for researchers in geosciences and civil engineering.',
            topics: [
                'C++',
                '3D Modeling',
                'Point Clouds',
                'Geospatial Analysis',
            ],
            liveURL: '#',
            githubURL: '#',
        },
    ];

    return (
        <section
            id="projects"
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
                <SectionTitle text={translations[lang].titles.projs} theme={theme} />

                {/* Grid Layout for Project Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            theme={theme}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
