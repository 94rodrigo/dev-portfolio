import { useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';

// The initial theme is applied by the inline script in index.html; this module keeps it in sync
const listeners = new Set<() => void>();

function getTheme(): Theme {
    return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}

export function setTheme(theme: Theme) {
    document.documentElement.dataset.theme = theme;
    try {
        localStorage.setItem('theme', theme);
    } catch {
        // Storage can be blocked (private mode); the choice then lasts for this visit only
    }
    listeners.forEach((listener) => listener());
}

export function useTheme(): Theme {
    return useSyncExternalStore(subscribe, getTheme);
}
