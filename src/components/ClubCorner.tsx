import Link from "next/link";
import styles from "./ClubCorner.module.css";
import { reader } from "@/utils/keystatic";

export default async function ClubCorner() {
    const clubs = await reader.collections.clubs.all();
    // Take first 8 clubs for the widget view (2 rows of 4)
    const featuredClubs = clubs.slice(0, 8);

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h3 className={styles.title}>Club Corner</h3>
                <span className={styles.icon}>🚀</span>
            </div>
            <div className={styles.grid}>
                {featuredClubs.map((club) => (
                    <Link href={`/clubs/${club.slug}`} key={club.slug} className={styles.clubItem} style={{ '--hover-color': club.entry.color } as any}>
                        <div className={styles.clubIcon} style={{ color: club.entry.color }}>
                            {club.entry.icon}
                        </div>
                        <span className={styles.name}>{club.entry.name}</span>
                    </Link>
                ))}
            </div>
            <Link href="/clubs" className={styles.viewAllBtn}>
                View All Clubs →
            </Link>
        </div>
    );
}
