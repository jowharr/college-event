import Link from "next/link";
import styles from "./UpcomingEvents.module.css";
import { reader } from "@/utils/keystatic";

export default async function UpcomingEvents() {
    // 1. Fetch from Keystatic
    const allEvents = await reader.collections.events.all();

    // 2. Map to format needed
    // 2. Map to format needed
    const eventData = allEvents
        .map(event => ({
            id: event.slug,
            title: event.entry.title,
            date: event.entry.date,
            image: (event.entry.image && event.entry.image.startsWith('http'))
                ? event.entry.image
                : `/images/events/${event.entry.image}`,
            category: event.entry.category
        }))
        .filter(event => new Date(event.date) >= new Date()) // Only upcoming
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) // Sort soonest first
        .slice(0, 2); // Limit to top 2

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h3 className={styles.title}>Upcoming Events</h3>
                <span className={styles.icon}>📅</span>
            </div>
            <div className={styles.list}>
                {eventData.map(event => (
                    <div key={event.id} className={styles.card}>
                        <img src={event.image} alt={event.title} className={styles.thumbnail} />
                        <div className={styles.content}>
                            <span className={styles.date}>{event.date}</span>
                            <h4 className={styles.dateTitle}>{event.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
            <Link href="/events" className={styles.viewAllBtn}>
                View All Events →
            </Link>
        </div>
    );
}
