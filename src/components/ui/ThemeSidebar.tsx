import { SunMoon, Moon, Palette } from 'lucide-react';

const ThemeSidebar = () => {
    const themes = [
        { id: "purple", name: "Purple", color: "bg-purple-500" },
        { id: "red", name: "Red", color: "bg-red-500" },
        { id: "green", name: "Green", color: "bg-emerald-500" },
        { id: "blue", name: "Blue", color: "bg-blue-500" },
        { id: "pink", name: "Pink", color: "bg-pink-500" },
        { id: "cyan", name: "Cyan", color: "bg-cyan-500" },
        { id: "yellow", name: "Yellow", color: "bg-yellow-500" },
        { id: "rose", name: "Rose", color: "bg-rose-500" },
    ]
    return (
        <div
            className="fixed top-1/2 -translate-y-1/2 z-40 transition-all duration-300 right-0"
            style={{ transform: 'translateY(-50%)' }}
        >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-400/30 p-4 md:p-6 w-80 max-h-[90vh] overflow-y-auto">
                {/* Theme Mode Toggle */}
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium mb-3 flex items-center text-slate-700">
                        <SunMoon className="w-4 h-4 mr-2" />
                        Theme Mode
                    </span>
                    <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors duration-300">
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
                        {
                            themes.map((theme, index) => (
                                <button
                                    key={index}
                                    className="p-2 md:p-3 rounded-lg border-2 transition-all duration-300 transform transform-gpu hover:scale-[1.1] text-slate-700 border-transparent hover:border-slate-300"
                                >
                                    <div className={`w-5 h-5 rounded-full md:w-6 md:h-6 ${theme.color} mx-auto mb-1`}></div>
                                    <div className='text-xs'>{theme.name}</div>
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeSidebar;
