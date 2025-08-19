import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

/**
 * Footer Component
 *
 * A responsive footer section that includes:
 * - Branding (name and title)
 * - Social media links with icons
 * - Copyright notice with dynamic year
 * - Attribution link to the developer
 *
 * Styled with glassmorphism, subtle borders, and hover effects.
 * Adapts layout for mobile and desktop.
 */
const Footer = () => {
    // Get current year for copyright dynamically
    const currentYear = new Date().getFullYear();

    // List of social media links to display
    // Each link contains:
    // - name: Platform name (used for aria-label and title)
    // - href: URL to external profile or mailto
    // - icon: Lucide icon component to render
    const socialLinks = [
        {
            name: 'Email',
            href: 'mailto:khufarzadasgari@gmail.com',
            icon: Mail,
        },
        {
            name: 'GitHub',
            href: 'https://github.com/farzadasgari/  ',
            icon: Github,
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/farzad-asgari/  ',
            icon: Linkedin,
        },
        {
            name: 'Twitter',
            href: 'https://x.com/farzad_asg/  ',
            icon: Twitter,
        },
    ];

    return (
        <footer className="py-12 px-4 border-t border-purple-400/20 hover:border-purple-400/80 bg-white/50 dark:bg-slate-900 backdrop-blur-sm transition-all duration-300">
            <div className="max-w-6xl mx-auto">
                {/* Top section: Brand and Social Links */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Brand Info */}
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                            John Doe
                        </div>
                        <p className="text-slate-600 text-sm dark:text-slate-200">
                            CEO and product architect of Tesla
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 dark:text-slate-300 hover:text-purple-400 dark:hover:text-purple-300 transition-all duration-300 transform transform-gpu hover:scale-[1.1] p-2 rounded-lg hover:bg-black/5"
                                    aria-label={social.name}
                                    title={social.name}
                                >
                                    <IconComponent />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Section: Copyright and Attribution */}
                <div className="mt-8 pt-8 border-t border-black/10 dark:border-white/20 text-center">
                    <p className="text-slate-600 text-sm dark:text-slate-200">
                        John Doe © {currentYear} All rights reserved. Made with
                        ❤️ by
                        <a
                            className="ml-1 text-purple-400 hover:text-purple-600 dark:text-purple-200 dark:hover:text-purple-400 hover:underline transition-all duration-300"
                            href="https://github.com/farzadasgari  "
                        >
                            FarZad
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
