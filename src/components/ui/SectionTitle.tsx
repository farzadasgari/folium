import React from 'react';

/**
 * Interface for SectionTitle Component Props
 *
 * @property {string} text - The title text to display (e.g., "About", "Projects")
 */
interface SectionTitleProps {
    text: string;
}

/**
 * SectionTitle Component
 *
 * A reusable, centered section title with:
 * - A gradient-styled heading using background-clip for colorful text
 * - A decorative gradient line below the title
 * - Responsive font sizing (larger on md screens and up)
 * - Consistent margin spacing for visual rhythm
 *
 * Used to introduce major sections of the page with visual emphasis.
 */
const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
    return (
        <div className="text-center mb-16">
            {/* Gradient Text Heading */}
            <h2
                className="
                    text-4xl md:text-5xl
                    mb-4 p-2
                    font-bold
                    bg-gradient-to-r from-purple-400 to-purple-600
                    dark:from-purple-200 dark:to-purple-400
                    bg-clip-text
                    text-transparent
                "
            >
                {text}
            </h2>

            {/* Decorative Gradient Line Underline */}
            <div
                className="
                    w-24 h-1
                    bg-gradient-to-r from-purple-400 to-purple-600
                    rounded-full
                    mx-auto
                "
            ></div>
        </div>
    );
};

export default SectionTitle;
