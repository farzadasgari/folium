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
                        className={`text-2xl font-bold bg-gradient-to-r from-${theme}-400 to-${theme}-600 dark:from-${theme}-200 dark:to-${theme}-300 text-transparent bg-clip-text`}
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
                                    hover:text-${theme}-400 dark:hover:text-${theme}-300
                                    transition-all duration-300 cursor-pointer font-medium 
                                    relative group`}
                                    aria-label={`Go to ${item} section`}
                                >
                                    {item}
                                    {/* Underline animation on hover */}
                                    <span
                                        className={`absolute -bottom-1 left-0 w-0 h-0.5 
                                    group-hover:bg-${theme}-400 dark:group-hover:bg-${theme}-300
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
                                     hover:text-${theme}-400 dark:hover:text-${theme}-300
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
