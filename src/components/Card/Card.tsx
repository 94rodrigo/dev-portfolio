import { Link } from "react-router-dom";

export interface CardProps {
    icon?: string;
    title: string;
    description?: string;
    colorIconBackground?: string;
    href?: string;
    colorButton?: string;
}

export default function Card({ icon, title, description, colorIconBackground = "#FFB84D", href = "#", colorButton = "#FFB84D" }: CardProps) {
    return (
        <div
            className="relative group block rounded-lg border border-gray-200 p-6 pt-12 shadow-sm hover:border-gray-300 hover:ring-1 hover:ring-gray-300"
        >
            {/* icon circle positioned above the card */}
            {icon && (
                <div
                    className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-full"
                    style={{ background: colorIconBackground }}
                >
                    <img src={icon} alt={title} className="h-20 w-20" />
                </div>
            )}

            {/* content has extra top padding to avoid overlap */}
            <div className="text-center">
                <h3 className="mt-0 text-lg font-semibold text-gray-900">{title}</h3>
                {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
                <Link to={href}>
                    <button 
                        className={`mt-4 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white cursor-pointer`}
                        style={{ backgroundColor: colorButton }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#4f46e5"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colorButton}
                    >
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
}