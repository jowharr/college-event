import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";
import { reader } from "@/utils/keystatic";

export default async function Contact() {
    const teamMembers = await reader.collections.team.all();

    // Sort or process if needed, currently just mapping
    const students = teamMembers.map(member => ({
        name: member.entry.name,
        role: member.entry.role,
        bio: member.entry.bio,
        image: (member.entry.image && member.entry.image.startsWith('http'))
            ? member.entry.image
            : "https://placehold.co/400x400?text=No+Image"
    }));

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Meet the Team</h1>
                <p className={styles.subtitle}>The students behind Campus Connect</p>

                <div className={styles.grid}>
                    {students.map((student, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src={student.image} alt={student.name} className={styles.image} />
                            </div>
                            <div className={styles.info}>
                                <h3 className={styles.name}>{student.name}</h3>
                                <p className={styles.role}>{student.role}</p>
                                <p className={styles.bio}>{student.bio}</p>
                            </div>
                        </div>
                    ))}
                    {students.length === 0 && (
                        <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>No team members found.</p>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
