import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "Email",
            href: "mailto:khufarzadasgari@gmail.com",
            icon: Mail,
        },
        {
            name: "GitHub",
            href: "https://github.com/farzadasgari/",
            icon: Github,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/farzad-asgari/",
            icon: Linkedin,
        }
    ];

    return (
        <footer className="py-12 px-4 border-t border-purple-400/20 hover:border-purple-400/80 bg-white/50 backdrop-blur-sm transition-all duration-300">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                            John Doe
                        </div>
                        <p className="text-slate-600 text-sm">
                            CEO and product architect of Tesla
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Github />
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-black/10 text-center">
                    <p className="text-slate-600 text-sm">
                        John Doe © {currentYear} All rights reserved. Made with ❤️ by
                        <a
                        className="ml-2 text-purple-400 hover:text-purple-600 hover:underline transition-all duration-300"
                        href="https://github.com/farzadasgari">
                        FarZad
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;