const ProjectCard = () => {
    return (
        <div className="max-w-80 mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-400/20 hover:border-purple-400/80 transition-all duration-300 group flex flex-col h-full">
                <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-cover bg-center relative">
                        <img
                            src="/folium/projects/project3.webp"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20
                        opacity-60 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-3 text-slate-900 group-hover:text-purple-400 transition-color duration-300">
                        ProADV
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-grow">
                        A Python package designed for efficient processing and analysis of acoustic Doppler velocimeter (ADV) data.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-purple-200 text-purple-900 border border-purple-200 text-xs rounded-full font-medium">
                            python
                        </span>
                        <span className="px-3 py-1 bg-purple-200 text-purple-900 border border-purple-200 text-xs rounded-full font-medium">
                            signal
                        </span>
                        <span className="px-3 py-1 bg-purple-200 text-purple-900 border border-purple-200 text-xs rounded-full font-medium">
                            turbulance
                        </span>
                        <span className="px-3 py-1 bg-purple-200 text-purple-900 border border-purple-200 text-xs rounded-full font-medium">
                            numerical
                        </span>
                        <span className="px-3 py-1 bg-purple-200 text-purple-900 border border-purple-200 text-xs rounded-full font-medium">
                            package
                        </span>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default ProjectCard;