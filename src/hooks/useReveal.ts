import { useEffect, useRef, useState } from 'react';

// Marks an element as visible the first time it scrolls into view; pair with the .reveal class
export function useReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '0px 0px -10% 0px' },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return { ref, visible };
}
