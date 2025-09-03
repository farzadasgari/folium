import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ThemeSidebar from '../components/ui/ThemeSidebar';
import { type Language } from '../components/lib/translate';
import { tailwindSafelist } from '../components/ui/tailwindSafelist';

const Index = () => {
    // State for enabling/disabling dark mode (light by default)
    const [darkMode, setDarkMode] = useState(false);

    // State for selecting the active theme (default: "purple")
    const [theme, setTheme] = useState('purple');

    // State for language selection (default: English)
    const [lang, setLang] = useState<Language>('en');

    // Side effect: Apply or remove `dark` class on <html> when darkMode changes
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Toggle handler for switching dark mode on/off
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        // Main container for the app’s landing page
        // Includes navbar, sidebar, content sections, and footer
        <div className="min-h-screen transition-all duration-500 bg-gradient-to-br">
            {/* Navigation bar (top section) */}
            <Navbar theme={theme} lang={lang} />

            {/* Sidebar for theme & language customization */}
            <ThemeSidebar
                lang={lang}
                setLang={setLang}
                theme={theme}
                setTheme={setTheme}
                darkMode={darkMode}
                toggleTheme={toggleTheme}
            />

            {/* Landing page sections */}
            <Hero theme={theme} lang={lang} />
            <About theme={theme} lang={lang} />
            <Skills theme={theme} lang={lang} />
            <Projects theme={theme} lang={lang} />
            <Contact theme={theme} lang={lang} />

            {/* Footer (bottom section) */}
            <Footer theme={theme} lang={lang} />

            {/* Tailwind styles SafeList */}
            <div className='hidden'>{tailwindSafelist()}</div>
        </div>
    );
};

// Export Index as the default page component
export default Index;
