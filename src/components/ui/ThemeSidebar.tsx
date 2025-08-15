import { SunMoon, Moon, Palette, Languages, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            const sidebar = document.querySelector('[data-sidebar]');
            const toggle = document.querySelector('[data-sidebar-toggle]');

            if (isOpen && sidebar && !sidebar.contains(target) && toggle && !toggle.contains(target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [isOpen]);


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
            <div className="fixed top-1/2 -translate-y-1/2 z-40 transition-all duration-300 right-0">
                <div className="bg-white/95 backdrop-blur-md rounded-l-2xl shadow-2xl transition-all duration-300 border border-purple-400/30 hover:border-purple-400/70 p-4 md:p-6 w-80 max-h-[90vh] overflow-y-auto" data-sidebar>
                    {/* Theme Mode Toggle */}
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium flex items-center text-slate-700">
                            <SunMoon className="w-4 h-4 mr-2" />
                            Theme Mode
                        </span>
                        <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors duration-300 transform transform-gpu hover:scale-[1.1] cursor-pointer">
                            <Moon className="w-4 h-4 text-slate-600" />
                        </button>
                    </div>
                    {/* Color Themes */}
                    <div>
                        <h3 className="text-sm font-medium mb-3 flex items-center text-slate-700">
                            <Palette className="w-4 h-4 mr-2" />
                            Color Themes
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            {themes.map((theme, index) => (
                                <button
                                    key={index}
                                    className="p-2 md:p-3 rounded-lg border-2 transition-all duration-300 transform transform-gpu hover:scale-[1.1] text-slate-700 border-transparent hover:border-slate-300 cursor-pointer"
                                >
                                    <div
                                        className={`w-5 h-5 rounded-full md:w-6 md:h-6 ${theme.color} mx-auto mb-1`}
                                    ></div>
                                    <div className="text-xs">{theme.name}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Languages */}
                    <div>
                        <h3 className="text-sm font-medium mb-3 flex items-center text-slate-700 mt-3">
                            <Languages className="w-4 h-4 mr-2" />
                            Languages
                        </h3>
                        <div className="space-y-2">
                            {languages.map((lang, index) => (
                                <button
                                    key={index}
                                    className="w-full p-2 rounded-lg text-left transition-all duration-300 transform transform-gpu hover:scale-[1.1] text-slate-700 hover:bg-slate-100 cursor-pointer"
                                >
                                    <span className="text-sm">{lang.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                data-sidebar-toggle
                className="fixed top-1/2 -translate-y-1/2 z-40 p-2 md:pd-3 transition-all duration-300 shadow-lg hover:shadow-xl bg-purple-400 hover:bg-purple-600 text-white rounded-l-xl border-0 outline-none right-80 cursor-pointer"
            >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
        </>
    );
};

export default ThemeSidebar;
