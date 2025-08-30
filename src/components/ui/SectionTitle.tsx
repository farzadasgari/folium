import React from 'react';

/**
 * Interface for SectionTitle Component Props
 *
 * @property {string} text - The title text to display (e.g., "About", "Projects")
 * @property {string} theme - The current color theme to apply gradient styles (e.g., "purple", "blue")
 */
interface SectionTitleProps {
    text: string;
    theme: string;
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
 * The gradient colors are dynamically generated based on the provided theme.
 *
 * Accessibility:
 * - Text is readable with sufficient contrast in both light and dark modes
 * - Visual elements are non-essential decoration and do not require ARIA labels
 */
const SectionTitle: React.FC<SectionTitleProps> = ({ text, theme }) => {
    return (
        <div className="text-center mb-16">
            {/* Gradient Text Heading */}
            <h2
                className={`
                    text-4xl md:text-5xl
                    mb-4 p-2
                    font-bold
                    bg-gradient-to-r from-${theme}-400 to-${theme}-600
                    dark:from-${theme}-200 dark:to-${theme}-300
                    bg-clip-text
                    text-transparent
                `}
            >
                {text}
            </h2>

            {/* Decorative Gradient Line Underline */}
            <div
                className={`
                    w-24 h-1
                    bg-gradient-to-r from-${theme}-400 to-${theme}-600
                    rounded-full
                    mx-auto
                `}
            ></div>
        </div>
    );
};

export default SectionTitle;
