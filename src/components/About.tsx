import { User, Code, Download } from 'lucide-react';

const About = () => {
    const iDo = [
        'Full-Stack Web Developement',
        'Responsive UI/UX Design',
        'Modern JavaScript FrameWorks',
        'API Development & Integration',
    ];

    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-6 font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/80 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <User className="w-8 h-8 text-purple-400 mr-3" />
                            <h3 className="text-2xl font-semibold">My Story</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores ea, voluptatibus quidem quaerat illo,
                            ducimus dignissimos eius dolore veniam eveniet
                            sapiente minima corrupti aspernatur blanditiis
                            fugiat accusamus aut optio iste!
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores ea, voluptatibus quidem quaerat illo.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/80 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <Code className="w-8 h-8 text-purple-400 mr-3" />
                            <h3 className="text-2xl font-semibold">
                                What I Do
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {iDo.map((item) => (
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                                    <span className="text-slate-600">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className='mt-4'>
                            <a href="/portfolio-template/resume.pdf" download>
                                <div className="inline-flex items-center text-purple-600 hover:text-purple-400 transition-colors duration-300">
                                    <Download className='h-4 w-4 mr-3'/> Download Resume
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
