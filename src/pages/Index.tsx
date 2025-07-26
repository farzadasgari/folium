import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Index = () => {
    return (
        <div
            className="min-h-screen transition-all duration-500 bg-gradient-to-br
        from-slate-50 to-slate-200 text-slate-900"
        >
            <Navbar />
            <Hero />
        </div>
    );
};

export default Index;
