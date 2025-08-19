import {
    SunMoon,
    Moon,
    Palette,
    Languages,
    ChevronLeft,
    ChevronRight,
    Sun,
} from 'lucide-react';
import React, { useState } from 'react';

/**
 * ThemeSidebar Component
 *
 * A floating sidebar that allows users to:
 * - Toggle between light/dark mode
 * - Select from predefined color themes (visual placeholder)
 * - Switch languages (placeholder functionality)
 * - Open/close the panel via a toggle button
 *
 * Features:
 * - Persists theme preference in localStorage
 * - Applies 'dark' class to document root for global dark mode
 * - Responsive design with smooth animations
 * - Backdrop overlay when open for better UX
 * - Accessible icons and labels
 */

interface ThemeSidebarProps {
    theme: string;
    setTheme: (theme: string) => void;
    darkMode: boolean;
    toggleTheme: () => void;
}

const ThemeSidebar: React.FC<ThemeSidebarProps> = ({
    theme,
    setTheme,
    darkMode,
    toggleTheme,
}) => {
    // State to control sidebar visibility
    const [isOpen, setIsOpen] = useState(false);

    // List of available color themes (currently UI-only, not functional)
    const themes = [
        { id: 'purple', name: 'Purple', color: 'bg-purple-500' },
        { id: 'red', name: 'Red', color: 'bg-red-500' },
        { id: 'green', name: 'Green', color: 'bg-emerald-500' },
        { id: 'blue', name: 'Blue', color: 'bg-blue-500' },
        { id: 'pink', name: 'Pink', color: 'bg-pink-500' },
        { id: 'cyan', name: 'Cyan', color: 'bg-cyan-500' },
        { id: 'yellow', name: 'Yellow', color: 'bg-yellow-500' },
        { id: 'rose', name: 'Rose', color: 'bg-rose-500' },
    ];

    // Supported languages (UI placeholder – no actual i18n logic implemented)
    const languages = [
        { id: 'en', country: 'US', name: 'English' },
        { id: 'ja', country: 'JP', name: '日本語' },
        { id: 'fr', country: 'FR', name: 'Français' },
        { id: 'de', country: 'DE', name: 'Deutsch' },
        { id: 'zh', country: 'CN', name: '中文' },
        { id: 'es', country: 'ES', name: 'Español' },
        { id: 'kr', country: 'KR', name: '한국인' },
    ];

    return (
        <>
            {/* Backdrop overlay when sidebar is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar Panel */}
            <div
                className={`fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-300
                    ${isOpen ? 'right-0' : '-right-80'}`}
            >
                <div
                    className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-l-2xl shadow-2xl 
                        transition-all duration-300 border border-purple-400/30 dark:border-purple-200/50 
                        hover:border-purple-400/70 dark:hover:border-purple-200/90 p-4 md:p-6 w-80 max-h-[90vh] overflow-y-auto"
                    data-sidebar
                    aria-label="Theme and Language Settings"
                >
                    {/* Theme Mode Toggle */}
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium flex items-center text-slate-700 dark:text-slate-200">
                            <SunMoon className="w-4 h-4 mr-2" />
                            Theme Mode
                        </span>
                        <button
                            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 
                                dark:bg-slate-900/80 dark:hover:bg-slate-900 
                                transition-colors duration-300 transform transform-gpu hover:scale-[1.1] cursor-pointer"
                            onClick={toggleTheme}
                        >
                            {darkMode ? (
                                <Sun className="w-4 h-4 text-slate-300" />
                            ) : (
                                <Moon className="w-4 h-4 text-slate-600" />
                            )}
                        </button>
                    </div>

                    {/* Color Themes Section */}
                    <div>
                        <h3 className="text-sm font-medium mb-3 flex items-center text-slate-700 dark:text-slate-200">
                            <Palette className="w-4 h-4 mr-2" />
                            Color Themes
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => setTheme(t.id)}
                                    className={`p-2 md:p-3 rounded-lg border-2 transition-all duration-300 
                                        transform transform-gpu text-slate-700 dark:text-slate-200 
                                         cursor-pointer
                                        ${
                                            t.id === theme
                                                ? 'border-current shadow-md scale-[1.1]'
                                                : 'border-transparent hover:border-slate-300 hover:scale-[1.1]'
                                        }
                                        `}
                                >
                                    <div
                                        className={`w-5 h-5 rounded-full md:w-6 md:h-6 ${t.color} mx-auto mb-1`}
                                    ></div>
                                    <div className="text-xs">{t.name}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Languages Section */}
                    <div>
                        <h3 className="text-sm font-medium mb-3 flex items-center text-slate-700 dark:text-slate-200 mt-3">
                            <Languages className="w-4 h-4 mr-2" />
                            Languages
                        </h3>
                        <div className="space-y-2">
                            {languages.map((lang, index) => (
                                <button
                                    key={index}
                                    className="w-full p-2 rounded-lg text-left transition-all duration-300 
                                        transform transform-gpu hover:scale-[1.1] text-slate-700 hover:bg-slate-100 
                                        dark:text-slate-200 dark:hover:bg-slate-800 cursor-pointer"
                                    aria-label={`Switch to ${lang.name}`}
                                    // Note: Language switching is UI-only; no i18n integration
                                >
                                    <span className="text-sm">{lang.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Toggle Button (Stays visible) */}
            <button
                data-sidebar-toggle
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 transition-all duration-300 
                    shadow-lg hover:shadow-xl dark:bg-purple-400 dark:hover:bg-purple-600 
                    bg-purple-900 hover:bg-purple-700 text-white rounded-l-xl border-0 outline-none cursor-pointer
                    ${isOpen ? 'right-80' : 'right-0'}`}
            >
                {isOpen ? (
                    <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                ) : (
                    <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                )}
            </button>
        </>
    );
};

export default ThemeSidebar;
