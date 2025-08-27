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
        hero: {
            Subtitle:
                'CEO and product architect of Tesla | Founder and CEO of xAI',
            occupations: [
                'CEO and product architect of Tesla',
                'Founder and CEO of xAI',
                'Founder, CEO, and chief engineer of SpaceX',
                'President of the Musk Foundation',
            ],
            work: 'View My Work',
            touch: 'Get In Touch',
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
        hero: {
            Subtitle: 'テスラのCEO兼製品アーキテクト | xAIの創設者兼CEO',
            occupations: [
                'テスラのCEO兼製品アーキテクト',
                'xAIの創設者兼CEO',
                'スペースXの創設者、CEO、チーフエンジニア',
                'マスク財団の代表理事',
            ],
            work: '作品を見る',
            touch: 'お問い合わせ',
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
        hero: {
            Subtitle:
                'PDG et architecte produit de Tesla | Fondateur et PDG de xAI',
            occupations: [
                'PDG et architecte produit de Tesla',
                'Fondateur et PDG de xAI',
                'Fondateur, PDG et ingénieur en chef de SpaceX',
                'Président de la Musk Foundation',
            ],
            work: 'Voir mes réalisations',
            touch: 'Contactez-moi',
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
        hero: {
            Subtitle:
                'CEO und Produktarchitekt von Tesla | Gründer und CEO von xAI',
            occupations: [
                'CEO und Produktarchitekt von Tesla',
                'Gründer und CEO von xAI',
                'Gründer, CEO und leitender Ingenieur von SpaceX',
                'Präsident der Musk Foundation',
            ],
            work: 'Meine Arbeiten ansehen',
            touch: 'Kontakt aufnehmen',
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
        hero: {
            Subtitle: '特斯拉CEO兼产品架构师 | xAI创始人兼CEO',
            occupations: [
                '特斯拉CEO兼产品架构师',
                'xAI创始人兼CEO',
                'SpaceX创始人、CEO兼总工程师',
                '马斯克基金会主席',
            ],
            work: '查看我的作品',
            touch: '联系我',
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
        hero: {
            Subtitle:
                'CEO y arquitecto de producto de Tesla | Fundador y CEO de xAI',
            occupations: [
                'CEO y arquitecto de producto de Tesla',
                'Fundador y CEO de xAI',
                'Fundador, CEO e ingeniero jefe de SpaceX',
                'Presidente de la Fundación Musk',
            ],
            work: 'Ver mi trabajo',
            touch: 'Ponte en contacto',
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
        hero: {
            Subtitle: '테슬라 CEO 겸 제품 아키텍트 | xAI 창립자 겸 CEO',
            occupations: [
                '테슬라 CEO 겸 제품 아키텍트',
                'xAI 창립자 겸 CEO',
                '스페이스엑스 창립자, CEO, 수석 엔지니어',
                '머스크 재단 회장',
            ],
            work: '내 작업 보기',
            touch: '연락하기',
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
        hero: {
            Subtitle:
                'CEO e architetto prodotto di Tesla | Fondatore e CEO di xAI',
            occupations: [
                'CEO e architetto prodotto di Tesla',
                'Fondatore e CEO di xAI',
                'Fondatore, CEO e ingegnere capo di SpaceX',
                'Presidente della Musk Foundation',
            ],
            work: 'Guarda il mio lavoro',
            touch: 'Contattami',
        },
    },
} as const;

export type Language = keyof typeof translations;
