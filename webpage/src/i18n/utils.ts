import de from './de.json';
import en from './en.json';

export const languages = {
  de: 'Deutsch',
  en: 'English',
};

export const defaultLang = 'de';

export const ui = {
  de,
  en,
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = ui[lang];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }

    return value || key;
  }
}

export function getLocalizedUrl(lang: keyof typeof ui, path: string = '') {
  return `/${lang}${path}`;
}
