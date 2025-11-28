import { useEffect, useState } from "react";
import NotificationCard from "@/components/NotificationCard";
import { Navigation } from "@/components/Navigation";

type Notification = {
    id: number;
    title: string;
    message: string;
    link: string;
};

export default function Notifications() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch from the backend we created on port 4000
        fetch("/api/notifications")
            .then((res) => {
                if (!res.ok) throw new Error("Network response not ok");
                return res.json();
            })
            .then((data) => {
                setNotifications(data);
                setLoading(false);
            })
            .catch((e) => {
                console.error(e);
                setError("Could not load notifications. Is the backend running?");
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <div className="container px-4 py-20 mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-glow-cyan">SomTech Admin Dashboard</h1>

                {loading && <p className="text-muted-foreground">Loading notifications...</p>}

                {error && (
                    <div className="p-4 border border-destructive/50 bg-destructive/10 rounded-lg text-destructive">
                        {error}
                    </div>
                )}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {notifications.map((n) => (
                        <NotificationCard key={n.id} {...n} />
                    ))}
                </div>
            </div>
        </div>
    );
}
