import { derived, get, writable } from "svelte/store";
import pt from '../config/i18n/pt_BR.json';
import en from '../config/i18n/en_US.json';
import { LocalStorageKey, allowCookies } from "./cookies";

type LocaleObj = Record<string, string | undefined>;

const localeLocalStorageKey = LocalStorageKey.i18n;

export const availableLocales = ['en', 'pt'];

const data: Record<string, LocaleObj> = { 
    'en': en as LocaleObj,
    'pt': pt as LocaleObj,
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

export const getLocaleFromLocalStorage = () => {
    const val = localStorage.getItem(localeLocalStorageKey);

    if (!val) {
        console.error('Could not retrieve language from localStorage. Defaulted to', availableLocales[0]);
    }

    return val ?? availableLocales[0];
};

export const setLocale = (l: string) => {
    const lang = availableLocales.includes(l) ? l : availableLocales[0];

    locale.set(lang);

    if (!get(allowCookies)) return;
    console.log(lang, get(locale));

    try {
        localStorage.setItem(localeLocalStorageKey, lang);
        console.log(localStorage.getItem(localeLocalStorageKey))
    } catch (e) {
        console.error(e, 'Error while saving the choosen language to localStorage');
    }
}
