import { Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-purple-600">
                        Farzad Asgari
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {['home', 'about', 'skills', 'projects', 'contact'].map(
                            (item) => (
                                <button className="capitalize hover:text-purple-400 transition-all duration-300 cursor-pointer font-medium relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                                </button>
                            )
                        )}
                    </div>
                    <button className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
