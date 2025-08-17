import { ArrowDown } from 'lucide-react';

const Hero = () => {
    const occupation = [
        'CEO and product architect of Tesla',
        'Founder and CEO of xAI',
        'Founder, CEO, and chief engineer of SpaceX',
        'President of the Musk Foundation',
    ];

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center
        relative overflow-hidden w-full dark:bg-slate-900/80"
        >
            <div className="text-center z-10">
                <div className="mb-8">
                    <div
                        className="w-40 h-40 mx-auto rounded-full overflow-hidden
                    shadow-2xl ring-4 ring-white/40 dark:ring-white/70"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src="/folium/avatar.webp"
                            alt="John Doe"
                        />
                    </div>
                </div>
                <div className="mb-6 text-5xl md:text-7xl font-bold">
                    <h1 className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-transparent bg-clip-text dark:from-white dark:via-slate-300 dark:to-white">John Doe</h1>
                </div>
                <div className="mb-8">
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
                        CEO and product architect of Tesla | Founder and CEO of xAI
                    </p>
                </div>
                <div className="mb-12">
                    <div className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
                        <ul className="space-y-2 md:columns-2 md:gap-4 ml-4">
                            {occupation.map((item) => (
                                <li className="flex items-start">
                                    <span className="mr-2">●</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        className="cursor-pointer bg-gradient-to-r from-purple-400 to-purple-600
                    hover:shadow-lg text-white px-8 py-4 rounded-full font-semibold transition-all
                    duration-300 transform-gpu hover:scale-[1.05] shadow-md"
                    >
                        View My Work
                    </button>

                    <button
                        className="cursor-pointer border-2 border-purple-400 text-purple-400
                    hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all
                    duration-300 transform-gpu hover:scale-[1.05]"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ArrowDown className="w-6 h-6 text-slate-400" />
            </div>
        </section>
    );
};

export default Hero;
