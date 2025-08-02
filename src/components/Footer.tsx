import { Github } from "lucide-react";

const Footer = () => {
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
            </div>
        </footer>
    )
}

export default Footer;