const ProjectCard = () => {
    return (
        <div className="max-w-80 mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-400/20 hover:border-purple-400/80 transition-all duration-300 group flex flex-col h-full">
                <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-cover bg-center relative">
                        <img src="/folium/projects/project1.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard;