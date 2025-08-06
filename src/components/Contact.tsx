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

                    <div>
                        <form action="javascript:void(0)">
                            <div className="mt-3">
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-white/10 border-2 border-slate-300/50 rounded-lg focus:border-purple-400 focus:ring-purple-400/20 focus:outline-none focus:ring-2 transition-all duration-300 text-slate-800 placeholder:text-slate-400/90"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="your_email@example.com"
                                    className="w-full px-4 py-3 bg-white/10 border-2 border-slate-300/50 rounded-lg focus:border-purple-400 focus:ring-purple-400/20 focus:outline-none focus:ring-2 transition-all duration-300 text-slate-800 placeholder:text-slate-400/90"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell Me About Your Project..."
                                    className="w-full px-4 py-3 bg-white/10 border-2 border-slate-300/50 rounded-lg focus:border-purple-400 focus:ring-purple-400/20 focus:outline-none focus:ring-2 transition-all duration-300 text-slate-800 placeholder:text-slate-400/90"
                                    style={{
                                        resize: "none",
                                    }}
                                />
                            </div>
                            <div className="mt-3">
                                <button
                                    type="submit"
                                    className="w-full cursor-pointer bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform-gpu hover:scale-[1.01] shadow-md"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;