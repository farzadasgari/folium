const SafeList = () => {
    const colors = [
        'purple',
        'red',
        'emerald',
        'blue',
        'rose',
        'pink',
        'yellow',
        'cyan',
    ];
    return (
        <section className="hidden">
            {colors.map((c) => (
                <>
                    <span
                        className={`via-${c}-100/50 dark:via-${c}-950 hover:text-${c}-400 dark:hover:text-${c}-300 group-hover:bg-${c}-400 dark:group-hover:bg-${c}-300`}
                    />
                    <span
                        className={`from-${c}-400 to-${c}-600 dark:from-${c}-200 dark:to-${c}-300`}
                    />
                    <div
                        className={`bg-${c}-400 text-${c}-600 hover:text-${c}-400 dark:text-${c}-300 dark:hover:text-${c}-400`}
                    />
                </>
            ))}
            <button className="border-purple-400 text-purple-400 hover:bg-purple-400" />
            <button className="border-red-400 text-red-400 hover:bg-red-400" />
            <button className="border-emerald-400 text-emerald-400 hover:bg-emerald-400" />
            <button className="border-blue-400 text-blue-400 hover:bg-blue-400" />
            <button className="border-rose-400 text-rose-400 hover:bg-rose-400" />
            <button className="border-pink-400 text-pink-400 hover:bg-pink-400" />
            <button className="border-yellow-400 text-yellow-400 hover:bg-yellow-400" />
            <button className="border-cyan-400 text-cyan-400 hover:bg-cyan-400" />

            <div className="w-3 h-3 bg-purple-400 rounded-full mr-3" />
            <div className="w-3 h-3 bg-red-400 rounded-full mr-3" />
            <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3" />
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-3" />
            <div className="w-3 h-3 bg-rose-400 rounded-full mr-3" />
            <div className="w-3 h-3 bg-pink-400 rounded-full mr-3" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3" />
            <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3" />

            <div className="text-purple-600 hover:text-purple-400 dark:text-purple-300 dark:hover:text-purple-400" />
            <div className="text-red-600 hover:text-red-400 dark:text-red-300 dark:hover:text-red-400" />
            <div className="text-emerald-600 hover:text-emerald-400 dark:text-emerald-300 dark:hover:text-emerald-400" />
            <div className="text-blue-600 hover:text-blue-400 dark:text-blue-300 dark:hover:text-blue-400" />
            <div className="text-rose-600 hover:text-rose-400 dark:text-rose-300 dark:hover:text-rose-400" />
            <div className="text-pink-600 hover:text-pink-400 dark:text-pink-300 dark:hover:text-pink-400" />
            <div className="text-yellow-600 hover:text-yellow-400 dark:text-yellow-300 dark:hover:text-yellow-400" />
            <div className="text-cyan-600 hover:text-cyan-400 dark:text-cyan-300 dark:hover:text-cyan-400" />

            <div className="border border-purple-400/20 hover:border-purple-400/80 " />
            <div className="border border-red-400/20 hover:border-red-400/80 " />
            <div className="border border-blue-400/20 hover:border-blue-400/80 " />
            <div className="border border-emerald-400/20 hover:border-emerald-400/80 " />
            <div className="border border-yellow-400/20 hover:border-yellow-400/80 " />
            <div className="border border-rose-400/20 hover:border-rose-400/80 " />
            <div className="border border-pink-400/20 hover:border-pink-400/80 " />
            <div className="border border-cyan-400/20 hover:border-cyan-400/80 " />
        </section>
    );
};

export default SafeList;
