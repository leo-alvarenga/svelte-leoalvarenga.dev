import { derived, writable } from "svelte/store";
import pt from '../config/i18n/pt_BR.json';

type LocaleObj = Record<string, string | undefined>;

export const availableLocales = ['en', 'pt'];

const data: Record<string, LocaleObj> = { 
    'pt': pt as LocaleObj,
    'en': pt as LocaleObj,
};

export const locale = writable('en');

function getTranslation(locale: string, key: string, values: Record<string, string>) {
    if (!locale || !key || !availableLocales.includes(locale) || !data[locale]) {
        console.error(`Error while getting translation for: { locale: ${locale} key: ${key} }`);
        
        return key;
    }
    
    let raw = data[locale][key];
    if (raw === undefined) return key;

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

export const setLocale = (l: string) => locale.set(availableLocales.includes(l) ? l : availableLocales[0]);
