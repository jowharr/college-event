import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>
                            Campus Connect
                        </Link>
                        <p className={styles.tagline}>
                            Empowering students to build, explore, and create.
                            Your gateway to campus life, events, and communities.
                        </p>
                        <div className={styles.socialIcons}>
                            {/* Instagram */}
                            <a href="#" className={styles.socialIcon} aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            {/* Twitter */}
                            <a href="#" className={styles.socialIcon} aria-label="Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>

                    {/* Explore Column */}
                    <div>
                        <h4 className={styles.columnTitle}>Explore</h4>
                        <div className={styles.columnLinks}>
                            <Link href="/events" className={styles.link}>Upcoming Events</Link>
                            <Link href="/clubs" className={styles.link}>Student Clubs</Link>
                            <Link href="/gallery" className={styles.link}>Photo Gallery</Link>
                            <Link href="/keystatic" className={styles.link}>Admin Portal</Link>
                        </div>
                    </div>

                    {/* Community Column */}
                    <div>
                        <h4 className={styles.columnTitle}>Community</h4>
                        <div className={styles.columnLinks}>
                            <Link href="/contact" className={styles.link}>Meet the Team</Link>
                            <Link href="#" className={styles.link}>Student Guidelines</Link>
                            <Link href="#" className={styles.link}>Feedback</Link>
                            <Link href="#" className={styles.link}>Help Center</Link>
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className={styles.columnTitle}>Stay Updated</h4>
                        <div className={styles.newsletter}>
                            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                                Subscribe to our newsletter for the latest updates and event announcements.
                            </p>
                            <div className={styles.inputGroup}>
                                <input type="email" placeholder="Your email" className={styles.input} />
                                <button className={styles.subscribeBtn}>Join</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>&copy; {new Date().getFullYear()} Campus Connect. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <Link href="#" className={styles.link}>Privacy Policy</Link>
                        <Link href="#" className={styles.link}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
