import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-6 font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-8">
                            Let's Connect!
                        </h3>
                        <div className="space-y-6">
                            <a
                                href="mailto:khufarzadasgari@gmail.com"
                                className="flex items-center p-4 bg-white/10 rounded-lg border border-purple-400/20 hover:border-purple-400/80 transition-all duration-300 group"
                            >
                                <Mail className="w-6 h-6 text-purple-400 mr-4 transition-all duration-300 transform transform-gpu group-hover:scale-[1.1]" />
                                <div>
                                    <div className="font-medium">Email</div>
                                    <div className="text-slate-500 text-sm">khufarzadasgari@gmail.com</div>
                                </div>
                            </a>
                            <a
                                href="https://github.com/farzadasgari"
                                className="flex items-center p-4 bg-white/10 rounded-lg border border-purple-400/20 hover:border-purple-400/80 transition-all duration-300 group"
                            >
                                <Github className="w-6 h-6 text-purple-400 mr-4 transition-all duration-300 transform transform-gpu group-hover:scale-[1.1]" />
                                <div>
                                    <div className="font-medium">Github</div>
                                    <div className="text-slate-500 text-sm">https://github.com/farzadasgari</div>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/farzad-asgari/"
                                className="flex items-center p-4 bg-white/10 rounded-lg border border-purple-400/20 hover:border-purple-400/80 transition-all duration-300 group"
                            >
                                <Linkedin className="w-6 h-6 text-purple-400 mr-4 transition-all duration-300 transform transform-gpu group-hover:scale-[1.1]" />
                                <div>
                                    <div className="font-medium">Linkedin</div>
                                    <div className="text-slate-500 text-sm">https://www.linkedin.com/in/farzad-asgari/</div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact;