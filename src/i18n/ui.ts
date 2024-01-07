export const languages = {
    en: 'English',
    ar: 'العربية',
};

export const defaultLang = 'en';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.blog': 'Blog',
        'nav.github': 'GitHub',
    },
    ar: {
        'nav.home': 'الصفحة الرئيسية',
        'nav.blog': 'المدونة',
    },
} as const;

type Lang = keyof typeof ui[typeof defaultLang] extends infer T
? T extends "nav.home" | "nav.blog"
  ? T
  : never
: never;;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang && lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: Lang) {
      return ui[lang][key] || ui[defaultLang][key];
    }
  }