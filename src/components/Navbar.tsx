import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Navbar Component
 *
 * A responsive navigation bar that:
 * - Shows a gradient-styled brand logo
 * - Displays desktop menu on larger screens
 * - Toggles a mobile menu on smaller screens
 * - Applies visual changes when user scrolls (e.g., background blur, shadow)
 * - Smoothly scrolls to sections via ID
 * - Automatically closes mobile menu after navigation
 */

interface NavbarProps {
    theme: string;
}

const Navbar: React.FC<NavbarProps> = ({ theme }) => {
    // State to manage mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // State to detect if page has been scrolled (for visual feedback)
    const [isScrolled, setIsScrolled] = useState(false);

    /**
     * Scrolls to a specific section by ID
     *
     * @param sectionID - The ID of the target DOM element (e.g., 'about', 'projects')
     */
    const scrollToSection = (sectionID: string) => {
        const element = document.getElementById(sectionID);
        if (element) {
            // Smooth scrolling animation
            element.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu after navigation
        setIsMenuOpen(false);
    };

    const bgLightFromTo = () => {
        switch (theme) {
            case 'blue':
                return 'from-blue-400 to-blue-600';
            case 'emerald':
                return 'from-emerald-400 to-emerald-600';
            case 'red':
                return 'from-red-400 to-red-600';
            case 'yellow':
                return 'from-yellow-400 to-yellow-600';
            case 'pink':
                return 'from-pink-400 to-pink-600';
            case 'rose':
                return 'from-rose-400 to-rose-600';
            case 'cyan':
                return 'from-cyan-400 to-cyan-600';
            default:
                return 'from-purple-400 to-purple-600';
        }
    };
    const bgDarkFromTo = () => {
        switch (theme) {
            case 'blue':
                return 'dark:from-blue-200 dark:to-blue-300';
            case 'emerald':
                return 'dark:from-emerald-200 dark:to-emerald-300';
            case 'red':
                return 'dark:from-red-200 dark:to-red-300';
            case 'yellow':
                return 'dark:from-yellow-200 dark:to-yellow-300';
            case 'pink':
                return 'dark:from-pink-200 dark:to-pink-300';
            case 'rose':
                return 'dark:from-rose-200 dark:to-rose-300';
            case 'cyan':
                return 'dark:from-cyan-200 dark:to-cyan-300';
            default:
                return 'dark:from-purple-200 dark:to-purple-300';
        }
    };
    const navHover = () => {
        switch (theme) {
            case 'blue':
                return 'hover:text-blue-400 dark:hover:text-blue-300';
            case 'emerald':
                return 'hover:text-emerald-400 dark:hover:text-emerald-300';
            case 'red':
                return 'hover:text-red-400 dark:hover:text-red-300';
            case 'yellow':
                return 'hover:text-yellow-400 dark:hover:text-yellow-300';
            case 'pink':
                return 'hover:text-pink-400 dark:hover:text-pink-300';
            case 'rose':
                return 'hover:text-rose-400 dark:hover:text-rose-300';
            case 'cyan':
                return 'hover:text-cyan-400 dark:hover:text-cyan-300';
            default:
                return 'hover:text-purple-400 dark:hover:text-purple-300';
        }
    };

    const navLink = () => {
        switch (theme) {
            case 'blue':
                return 'group-hover:bg-blue-400 dark:group-hover:bg-blue-300';
            case 'emerald':
                return 'group-hover:bg-emerald-400 dark:group-hover:bg-emerald-300';
            case 'red':
                return 'group-hover:bg-red-400 dark:group-hover:bg-red-300';
            case 'yellow':
                return 'group-hover:bg-yellow-400 dark:group-hover:bg-yellow-300';
            case 'pink':
                return 'group-hover:bg-pink-400 dark:group-hover:bg-pink-300';
            case 'rose':
                return 'group-hover:bg-rose-400 dark:group-hover:bg-rose-300';
            case 'cyan':
                return 'group-hover:bg-cyan-400 dark:group-hover:bg-cyan-300';
            default:
                return 'group-hover:bg-purple-400 dark:group-hover:bg-purple-300';
        }
    };

    /**
     * Effect to detect scroll position and update navbar appearance
     * Adds a background and shadow when user scrolls past 50px
     */
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup: Remove event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500
                ${
                    isScrolled
                        ? 'bg-white/80 backdrop-blur-md shadow-lg dark:bg-slate-900/80'
                        : 'bg-transparent'
                }`}
            aria-label="Main Navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Brand Logo */}
                    <div
                        className={`text-2xl font-bold bg-gradient-to-r ${bgLightFromTo()} ${bgDarkFromTo()} text-transparent bg-clip-text`}
                    >
                        John Doe
                    </div>

                    {/* Desktop Navigation Menu (hidden on mobile) */}
                    <div className="hidden md:flex space-x-8">
                        {['home', 'about', 'skills', 'projects', 'contact'].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize
                                    text-slate-800 dark:text-slate-200
                                    ${navHover()}
                                    transition-all duration-300 cursor-pointer font-medium 
                                    relative group`}
                                    aria-label={`Go to ${item} section`}
                                >
                                    {item}
                                    {/* Underline animation on hover */}
                                    <span
                                        className={`absolute -bottom-1 left-0 w-0 h-0.5 
                                    ${navLink()}
                                    group-hover:w-full transition-all duration-300`}
                                    ></span>
                                </button>
                            )
                        )}
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-800/20 
                            dark:text-slate-200 dark:hover:bg-slate-800/70 
                            transition-colors cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown (only visible when toggled) */}
                {isMenuOpen && (
                    <div
                        className="md:hidden py-4 bg-white/90 dark:bg-slate-800/80 
                        rounded-lg mt-2 border border-slate-400/30 backdrop-blur-md"
                    >
                        <div className="flex flex-col space-y-4 px-4">
                            {[
                                'home',
                                'about',
                                'skills',
                                'projects',
                                'contact',
                            ].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize text-left py-2 text-slate-800 dark:text-slate-200
                                     ${navHover()}
                                        transition-colors duration-300 font-medium cursor-pointer`}
                                    aria-label={`Go to ${item} section`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
