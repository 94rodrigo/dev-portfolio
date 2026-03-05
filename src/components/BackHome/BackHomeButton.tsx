import { Link } from "react-router-dom";

export default function BackHomeButton() {
    return (
        <div className="flex content-start mb-6">
            <Link to="/" className="inline-flex text-left gap-2 rounded-md px-3 py-2 text-xl font-medium text-gray-600 cursor-pointer hover:text-gray-800 hover:underline">
                ← Home
            </Link>
        </div>
    );
}