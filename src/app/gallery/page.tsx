import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./gallery.module.css";
import { reader } from "@/utils/keystatic";

export default async function Gallery() {
    const photos = await reader.collections.gallery.all();

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <div className={styles.headerSection}>
                    <h1 className={styles.title}>Campus Life</h1>
                    <p className={styles.subtitle}>Relive the best moments captured through the lens.</p>
                </div>

                <div className={styles.masonry}>
                    {photos.map((photo) => (
                        <div key={photo.slug} className={styles.item}>
                            <img
                                src={(photo.entry.image && photo.entry.image.startsWith('http'))
                                    ? photo.entry.image
                                    : photo.entry.image ? `/images/gallery/${photo.entry.image}` : "https://placehold.co/600x400?text=No+Image"}
                                alt={photo.entry.caption}
                                className={styles.image}
                            />
                            <div className={styles.overlay}>
                                <span className={styles.date}>{photo.entry.date}</span>
                                <p className={styles.caption}>{photo.entry.caption}</p>
                            </div>
                        </div>
                    ))}
                    {photos.length === 0 && (
                        <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>No photos found.</p>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
