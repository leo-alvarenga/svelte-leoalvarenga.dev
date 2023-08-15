import { derived, writable } from "svelte/store";
import pt from '../config/i18n/pt_BR.json';

type LocaleObj = Record<string, string | undefined>;

const availableLocales = ['en', 'pt'];

const data: Record<string, LocaleObj> = { 
    'pt': pt as LocaleObj,
    'en': pt as LocaleObj,
};

const fallback = '';

const locale = writable('en');

function getTranslation(locale: string, key: string, values: Record<string, string>) {
    if (!locale || !key || !availableLocales.includes(locale) || !data[locale]) {
        console.error(`Error while getting translation for: { locale: ${locale} key: ${key} }`);
        
        return fallback;
    }
    
    let raw = data[locale][key];
    if (!raw) return '';

    const toReplace = Object.keys(values);

    if (toReplace.length) {
        for (const k of toReplace ) {
            const regex = new RegExp(`{{${k}}}`, "gm");
            raw = raw.replace(regex, values[k]);
        }
    }

    return raw;
}

export const t = derived(locale, ($locale) => (key: string, vars: Record<string, string> = {}) =>
    getTranslation($locale, key, vars)
);
