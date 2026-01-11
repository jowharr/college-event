import { reader } from "@/utils/keystatic";
import EventsClient from "./EventsClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./events.module.css";

export default async function Events() {
    const events = await reader.collections.events.all();
    // Transform to match what Client expects or update Client to use CMS format
    const formattedEvents = events.map(event => ({
        id: event.slug,
        title: event.entry.title,
        date: event.entry.date,
        description: event.entry.description,
        image: (event.entry.image && event.entry.image.startsWith('http'))
            ? event.entry.image
            : event.entry.image ? `/images/events/${event.entry.image}` : "https://placehold.co/600x400?text=No+Image",
        category: event.entry.category,
        price: event.entry.price,
    }));

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <EventsClient initialEvents={formattedEvents} styles={styles} />
            </main>
            <Footer />
        </div>
    );
}
