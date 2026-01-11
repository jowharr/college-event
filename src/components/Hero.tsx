import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Discover.<br />
                    Engage. Relive.
                </h1>
                <p className={styles.tagline}>
                    The ultimate platform for campus events, clubs, and memories.
                </p>
                <div className={styles.ctaGroup}>
                    <Link href="/events">
                        <button className={styles.primaryBtn}>Explore Events</button>
                    </Link>
                    <Link href="/clubs">
                        <button className={styles.secondaryBtn}>Join a Club</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
