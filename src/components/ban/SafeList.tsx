const SafeList = () => {
    const colors = ["purple", "red", "emerald", "blue", "rose", "pink", "yellow", "cyan"]
    return (
        <section className="hidden">
            {
                colors.map((c) => (
                    <>
                        <span className={`via-${c}-100/50 dark:via-${c}-950 hover:text-${c}-400 dark:hover:text-${c}-300 group-hover:bg-${c}-400 dark:group-hover:bg-${c}-300`}></span>
                        <span className={`from-${c}-400 to-${c}-600 dark:from-${c}-200 dark:to-${c}-300`}></span>
                    </>
                ))
            }
            <button className="border-purple-400 text-purple-400 hover:bg-purple-400"></button>
            <button className="border-red-400 text-red-400 hover:bg-red-400"></button>
            <button className="border-emerald-400 text-emerald-400 hover:bg-emerald-400"></button>
            <button className="border-blue-400 text-blue-400 hover:bg-blue-400"></button>
            <button className="border-rose-400 text-rose-400 hover:bg-rose-400"></button>
            <button className="border-pink-400 text-pink-400 hover:bg-pink-400"></button>
            <button className="border-yellow-400 text-yellow-400 hover:bg-yellow-400"></button>
            <button className="border-cyan-400 text-cyan-400 hover:bg-cyan-400"></button>
        </section>
    )
}

export default SafeList;