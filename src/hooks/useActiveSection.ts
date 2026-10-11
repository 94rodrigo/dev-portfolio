import { useEffect, useState } from 'react';
import type { SectionId } from '../constants';

// Returns the id of the section currently crossing the middle band of the viewport
export function useActiveSection(ids: readonly SectionId[]): SectionId | null {
    const [active, setActive] = useState<SectionId | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) setActive(visible.target.id as SectionId);
            },
            { rootMargin: '-45% 0px -50% 0px' },
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [ids]);

    return active;
}
