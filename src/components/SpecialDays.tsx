import styles from "./SpecialDays.module.css";
import { reader } from "@/utils/keystatic";

import SpecialDaysList from "./SpecialDaysList";

export default async function SpecialDays() {
    // 1. Fetch from Keystatic
    const allDays = await reader.collections.specialDays.all();

    // 2. Format
    const days = allDays.map(day => ({
        id: day.slug,
        title: day.entry.title,
        date: day.entry.date,
        // Fallback or fetched image
        image: (day.entry.image && day.entry.image.startsWith('http'))
            ? day.entry.image
            : day.entry.image
                ? `/images/special-days/${day.entry.image}`
                : "https://placehold.co/600x400?text=No+Image"
    }));

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h3 className={styles.title}>Special Days<br />Reminder</h3>
                <span className={styles.icon}>🔔</span>
            </div>
            <SpecialDaysList days={days} />
        </div>
    );
}
