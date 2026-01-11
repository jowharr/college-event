
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./club-detail.module.css";
import { reader } from "@/utils/keystatic";
import { notFound } from "next/navigation";


export default async function ClubDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const club = await reader.collections.clubs.read(id);

    if (!club) return notFound();

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <div className={styles.hero} style={{ backgroundImage: `url(${(club.bgImage && club.bgImage.startsWith('http')) ? club.bgImage : `/images/clubs/${club.bgImage}`})` }}>
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.heroContent}>
                        <div className={styles.clubIcon} style={{ color: club.color }}>
                            {club.icon}
                        </div>
                        <h1 className={styles.clubName}>{club.name}</h1>
                        <p className={styles.clubTagline}>{club.tagline}</p>
                    </div>
                </div>

                <div className={styles.container}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>About Us</h2>
                        <p className={styles.description}>{club.description}</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Past Activities</h2>
                        <div className={styles.activitiesGrid}>
                            {club.activities.map((activity: any, index: number) => (
                                <div key={index} className={styles.activityCard}>
                                    <img src={(activity.image && activity.image.startsWith('http')) ? activity.image : `/images/clubs/activities/${activity.image}`} alt={activity.title} className={styles.activityImage} />
                                    <div className={styles.activityContent}>
                                        <span className={styles.activityDate}>{activity.date}</span>
                                        <h3 className={styles.activityTitle}>{activity.title}</h3>
                                        <p className={styles.activityDesc}>{activity.desc}</p>
                                    </div>
                                </div>
                            ))}
                            {club.activities.length === 0 && (
                                <p>No past activities listed.</p>
                            )}
                        </div>
                    </section>

                    <section className={styles.joinSection}>
                        <h2 className={styles.joinText}>Ready to be part of the legacy?</h2>
                        <button className={styles.joinBtn}>Join {club.name} Now</button>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
