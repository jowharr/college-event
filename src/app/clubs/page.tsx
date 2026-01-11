import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./clubs.module.css";
import { reader } from "@/utils/keystatic";

export default async function Clubs() {
    const clubs = await reader.collections.clubs.all();

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <div className={styles.headerSection}>
                    <h1 className={styles.title}>Student Clubs</h1>
                    <p className={styles.subtitle}>Find your tribe. Join a community that shares your passion.</p>
                </div>

                <div className={styles.grid}>
                    {clubs.map((club) => (
                        <Link href={`/clubs/${club.slug}`} key={club.slug} className={styles.cardLink}>
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconContainer}>
                                        {club.entry.icon}
                                    </div>
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.clubTitle}>{club.entry.name}</h3>
                                    <p className={styles.description}>{club.entry.description}</p>
                                    <button className={styles.joinBtn}>View Details</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
