export const translations = {
    en: {
        sidebar: {
            mode: 'Theme Mode',
            theme: 'Color Themes',
            langs: 'Languages',
        },
        navbar: {
            navlinks: ['home', 'about', 'skills', 'projects', 'contact'],
        },
    },
    ja: {
        sidebar: {
            mode: 'テーマモード',
            theme: 'カラーテーマ',
            langs: '言語',
        },
        navbar: {
            navlinks: [
                'ホーム',
                '概要',
                'スキル',
                'プロジェクト',
                'お問い合わせ',
            ],
        },
    },
    fr: {
        sidebar: {
            mode: 'Mode de thème',
            theme: 'Thèmes de couleur',
            langs: 'Langues',
        },
        navbar: {
            navlinks: [
                'accueil',
                'à propos',
                'compétences',
                'projets',
                'contact',
            ],
        },
    },
    de: {
        sidebar: {
            mode: 'Themenmodus',
            theme: 'Farbthemen',
            langs: 'Sprachen',
        },
        navbar: {
            navlinks: [
                'startseite',
                'über',
                'fähigkeiten',
                'projekte',
                'kontakt',
            ],
        },
    },
    zh: {
        sidebar: {
            mode: '主题模式',
            theme: '颜色主题',
            langs: '语言',
        },
        navbar: {
            navlinks: ['首页', '关于', '技能', '项目', '联系'],
        },
    },
    es: {
        sidebar: {
            mode: 'Modo de tema',
            theme: 'Temas de color',
            langs: 'Idiomas',
        },
        navbar: {
            navlinks: [
                'inicio',
                'sobre',
                'habilidades',
                'proyectos',
                'contacto',
            ],
        },
    },
    kr: {
        sidebar: {
            mode: '테마 모드',
            theme: '색상 테마',
            langs: '언어',
        },
        navbar: {
            navlinks: ['홈', '소개', '기술', '프로젝트', '연락처'],
        },
    },
    it: {
        sidebar: {
            mode: 'Modalità tema',
            theme: 'Temi colore',
            langs: 'Lingue',
        },
        navbar: {
            navlinks: [
                'home',
                'chi siamo',
                'competenze',
                'progetti',
                'contatto',
            ],
        },
    },
} as const;

export type Language = keyof typeof translations;
