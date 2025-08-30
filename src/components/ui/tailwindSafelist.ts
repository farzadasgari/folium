export const tailwindSafelist = () => {
    return `
        via-purple-100/50 via-blue-100/50 via-cyan-100/50 via-emerald-100/50 via-pink-100/50 via-red-100/50 via-rose-100/50 via-yellow-100/50
        via-purple-950 via-blue-950 via-cyan-950 via-emerald-950 via-pink-950 via-red-950 via-rose-950 via-yellow-950
        dark:via-purple-950 dark:via-blue-950 dark:via-cyan-950 dark:via-emerald-950 dark:via-pink-950 dark:via-red-950 dark:via-rose-950 dark:via-yellow-950
        border-purple-200 border-blue-200 border-cyan-200 border-emerald-200 border-pink-200 border-red-200 border-rose-200 border-yellow-200
        border-purple-400 border-blue-400 border-cyan-400 border-emerald-400 border-pink-400 border-red-400 border-rose-400 border-yellow-400
        border-purple-400/20 border-blue-400/20 border-cyan-400/20 border-emerald-400/20 border-pink-400/20 border-red-400/20 border-rose-400/20 border-yellow-400/20
        hover:border-purple-400/80 hover:border-blue-400/80 hover:border-cyan-400/80 hover:border-emerald-400/80 hover:border-pink-400/80 hover:border-red-400/80 hover:border-rose-400/80 hover:border-yellow-400/80
        focus:border-purple-400 focus:border-blue-400 focus:border-cyan-400 focus:border-emerald-400 focus:border-pink-400 focus:border-red-400 focus:border-rose-400 focus:border-yellow-400
        focus:ring-purple-400/20 focus:ring-blue-400/20 focus:ring-cyan-400/20 focus:ring-emerald-400/20 focus:ring-pink-400/20 focus:ring-red-400/20 focus:ring-rose-400/20 focus:ring-yellow-400/20
        text-purple-400 text-blue-400 text-cyan-400 text-emerald-400 text-pink-400 text-red-400 text-rose-400 text-yellow-400
        text-purple-900 text-blue-900 text-cyan-900 text-emerald-900 text-pink-900 text-red-900 text-rose-900 text-yellow-900
        dark:text-purple-200 dark:text-blue-200 dark:text-cyan-200 dark:text-emerald-200 dark:text-pink-200 dark:text-red-200 dark:text-rose-200 dark:text-yellow-200
        dark:text-purple-300 dark:text-blue-300 dark:text-cyan-300 dark:text-emerald-300 dark:text-pink-300 dark:text-red-300 dark:text-rose-300 dark:text-yellow-300
        hover:text-purple-400 hover:text-blue-400 hover:text-cyan-400 hover:text-emerald-400 hover:text-pink-400 hover:text-red-400 hover:text-rose-400 hover:text-yellow-400
        hover:text-purple-600 hover:text-blue-600 hover:text-cyan-600 hover:text-emerald-600 hover:text-pink-600 hover:text-red-600 hover:text-rose-600 hover:text-yellow-600
        dark:hover:text-purple-200 dark:hover:text-blue-200 dark:hover:text-cyan-200 dark:hover:text-emerald-200 dark:hover:text-pink-200 dark:hover:text-red-200 dark:hover:text-rose-200 dark:hover:text-yellow-200
        dark:hover:text-purple-300 dark:hover:text-blue-300 dark:hover:text-cyan-300 dark:hover:text-emerald-300 dark:hover:text-pink-300 dark:hover:text-red-300 dark:hover:text-rose-300 dark:hover:text-yellow-300
        dark:hover:text-purple-400 dark:hover:text-blue-400 dark:hover:text-cyan-400 dark:hover:text-emerald-400 dark:hover:text-pink-400 dark:hover:text-red-400 dark:hover:text-rose-400 dark:hover:text-yellow-400
        group-hover:text-purple-400 group-hover:text-blue-400 group-hover:text-cyan-400 group-hover:text-emerald-400 group-hover:text-pink-400 group-hover:text-red-400 group-hover:text-rose-400 group-hover:text-yellow-400
        dark:group-hover:text-purple-200 dark:group-hover:text-blue-200 dark:group-hover:text-cyan-200 dark:group-hover:text-emerald-200 dark:group-hover:text-pink-200 dark:group-hover:text-red-200 dark:group-hover:text-rose-200 dark:group-hover:text-yellow-200
        bg-purple-200 bg-blue-200 bg-cyan-200 bg-emerald-200 bg-pink-200 bg-red-200 bg-rose-200 bg-yellow-200
        bg-purple-400 bg-blue-400 bg-cyan-400 bg-emerald-400 bg-pink-400 bg-red-400 bg-rose-400 bg-yellow-400
        hover:bg-purple-300 hover:bg-blue-300 hover:bg-cyan-300 hover:bg-emerald-300 hover:bg-pink-300 hover:bg-red-300 hover:bg-rose-300 hover:bg-yellow-300
        hover:bg-purple-400 hover:bg-blue-400 hover:bg-cyan-400 hover:bg-emerald-400 hover:bg-pink-400 hover:bg-red-400 hover:bg-rose-400 hover:bg-yellow-400
        group-hover:bg-purple-400 group-hover:bg-blue-400 group-hover:bg-cyan-400 group-hover:bg-emerald-400 group-hover:bg-pink-400 group-hover:bg-red-400 group-hover:bg-rose-400 group-hover:bg-yellow-400
        dark:group-hover:bg-purple-300 dark:group-hover:bg-blue-300 dark:group-hover:bg-cyan-300 dark:group-hover:bg-emerald-300 dark:group-hover:bg-pink-300 dark:group-hover:bg-red-300 dark:group-hover:bg-rose-300 dark:group-hover:bg-yellow-300
        from-purple-400 from-blue-400 from-cyan-400 from-emerald-400 from-pink-400 from-red-400 from-rose-400 from-yellow-400
        to-purple-600 to-blue-600 to-cyan-600 to-emerald-600 to-pink-600 to-red-600 to-rose-600 to-yellow-600
        from-purple-400/20 from-blue-400/20 from-cyan-400/20 from-emerald-400/20 from-pink-400/20 from-red-400/20 from-rose-400/20 from-yellow-400/20
        dark:from-purple-200 dark:from-blue-200 dark:from-cyan-200 dark:from-emerald-200 dark:from-pink-200 dark:from-red-200 dark:from-rose-200 dark:from-yellow-200
        dark:to-purple-300 dark:to-blue-300 dark:to-cyan-300 dark:to-emerald-300 dark:to-pink-300 dark:to-red-300 dark:to-rose-300 dark:to-yellow-300
        hover:from-purple-500 hover:from-blue-500 hover:from-cyan-500 hover:from-emerald-500 hover:from-pink-500 hover:from-red-500 hover:from-rose-500 hover:from-yellow-500
        hover:to-purple-800 hover:to-blue-800 hover:to-cyan-800 hover:to-emerald-800 hover:to-pink-800 hover:to-red-800 hover:to-rose-800 hover:to-yellow-800
    `;
};
