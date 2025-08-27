export const translations = {
    en: {
        sidebar: {
            mode: 'Theme Mode',
            theme: 'Color Themes',
            langs: 'Languages',
        },
    },
    ja: {
        sidebar: {
            mode: 'テーマモード',
            theme: 'カラーテーマ',
            langs: '言語',
        },
    },
    fr: {
        sidebar: {
            mode: 'Mode de thème',
            theme: 'Thèmes de couleur',
            langs: 'Langues',
        },
    },
    de: {
        sidebar: {
            mode: 'Themenmodus',
            theme: 'Farbthemen',
            langs: 'Sprachen',
        },
    },
    zh: {
        sidebar: {
            mode: '主题模式',
            theme: '颜色主题',
            langs: '语言',
        },
    },
    es: {
        sidebar: {
            mode: 'Modo de tema',
            theme: 'Temas de color',
            langs: 'Idiomas',
        },
    },
    kr: {
        sidebar: {
            mode: '테마 모드',
            theme: '색상 테마',
            langs: '언어',
        },
    },
    it: {
        sidebar: {
            mode: 'Modalità tema',
            theme: 'Temi colore',
            langs: 'Lingue',
        },
    },
} as const;

export type Language = keyof typeof translations;
