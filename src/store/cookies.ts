import { derived, get, writable } from "svelte/store";
import { locale, setLocale } from "./i18n";

export const LocalStorageKey = {
    'i18n': 'i18n',
    'cookies': 'cookies',
    'notifications': 'notifications',
};

export const cookieConfigKey = LocalStorageKey.cookies;

export const getCookieConfigFromLocalStorage = () => localStorage.getItem(LocalStorageKey.cookies) === 'true';

export const allowCookies = writable(false);

export const shouldAllowCookies = derived(allowCookies, ($allowCookies) => $allowCookies);

export function setAllowCookies(allow = false) {
    allowCookies.set(allow);
    setLocale(get(locale));

    if (allow) {
        try {
            localStorage.setItem(cookieConfigKey, String(allow));
        } catch (e) {
            console.error(e);
        }
    } else {
        for (const key of Object.values(LocalStorageKey)) {
            localStorage.removeItem(key);
        }
    }
}
