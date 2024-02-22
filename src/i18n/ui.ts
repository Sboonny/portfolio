export const languages = {
  en: "English",
  ar: "العربية",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.github": "GitHub",
  },
  ar: {
    "nav.home": "الصفحة الرئيسية",
    "nav.blog": "المدونة",
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang && lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations<TLang extends keyof typeof ui>(lang: TLang) {
  return function t<TKey extends keyof (typeof ui)[TLang]>(key: TKey) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
