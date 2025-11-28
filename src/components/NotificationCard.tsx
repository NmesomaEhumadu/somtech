import { Link } from "react-router-dom";

type Notification = {
    id: number;
    title: string;
    message: string;
    link: string;
};

export default function NotificationCard({ title, message, link }: Notification) {
    const isExternal = link.startsWith("http");

    return (
        <div className="notification-card p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-start justify-between gap-4">
                <div className="p-3 rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {message}
                    </p>
                    {isExternal ? (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                            View Project <span className="ml-1">→</span>
                        </a>
                    ) : (
                        <Link
                            to={link}
                            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                            View Details <span className="ml-1">→</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
