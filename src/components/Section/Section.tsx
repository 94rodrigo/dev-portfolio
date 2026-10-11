import type { ReactNode } from "react";
import type { SectionId } from "../../constants";
import { useReveal } from "../../hooks/useReveal";

interface SectionProps {
    id: SectionId;
    index: string;
    label: string;
    title: string;
    children: ReactNode;
}

export default function Section({ id, index, label, title, children }: SectionProps) {
    const { ref, visible } = useReveal<HTMLDivElement>();

    return (
        <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 border-t border-line">
            <div
                ref={ref}
                data-visible={visible ? "" : undefined}
                className="reveal mx-auto grid max-w-6xl gap-x-8 gap-y-6 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-12 lg:px-8">
                <p className="font-mono text-sm text-ink-muted md:col-span-3 md:pt-3">
                    <span className="text-accent">{index}</span> / {label}
                </p>
                <div className="min-w-0 md:col-span-9">
                    <h2 id={`${id}-title`} className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                        {title}
                    </h2>
                    {children}
                </div>
            </div>
        </section>
    );
}
