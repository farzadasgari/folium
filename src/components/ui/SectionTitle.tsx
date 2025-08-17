import React from 'react';

interface SectionTitleProps {
    text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
    return (
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 p-2 font-bold bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-200 dark:to-purple-400 bg-clip-text text-transparent">
                {text}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto"></div>
        </div>
    );
};

export default SectionTitle;
