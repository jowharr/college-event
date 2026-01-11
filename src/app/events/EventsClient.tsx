"use client";
import { useState } from "react";
import RegistrationModal from "@/components/RegistrationModal";

export default function EventsClient({ initialEvents, styles }: { initialEvents: any[], styles: any }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const categories = ["All", "Tech", "Sports", "Cultural", "Seminar", "Community"];

    const filteredEvents = initialEvents.filter((event) => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === "All" || event.category === category;
        return matchesSearch && matchesCategory;
    });

    const now = new Date();
    const upcomingEvents = filteredEvents.filter(event => new Date(event.date) >= now).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const pastEvents = filteredEvents.filter(event => new Date(event.date) < now).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

    return (
        <>
            <RegistrationModal
                isOpen={!!selectedEvent}
                onClose={() => setSelectedEvent(null)}
                eventTitle={selectedEvent || ""}
            />

            <div className={styles.headerSection}>
                <h1 className={styles.title}>Events Calendar</h1>
                <p className={styles.subtitle}>Discover what's happening on campus and relive past memories.</p>

                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Search events..."
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {/* Custom Dropdown */}
                    <div className={styles.filterWrapper}>
                        <button
                            className={`${styles.filterTrigger} ${isDropdownOpen ? styles.active : ''}`}
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                        >
                            {category === "All" ? "All Categories" : category}
                            <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>▼</span>
                        </button>

                        {/* Click Outside Mask */}
                        {isDropdownOpen && (
                            <div
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    zIndex: 90,
                                    cursor: 'default'
                                }}
                                onClick={() => setDropdownOpen(false)}
                            />
                        )}

                        <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.open : ''}`}>
                            {categories.map((cat) => (
                                <div
                                    key={cat}
                                    className={`${styles.dropdownItem} ${category === cat ? styles.selected : ''}`}
                                    onClick={() => {
                                        setCategory(cat);
                                        setDropdownOpen(false);
                                    }}
                                >
                                    {cat === "All" ? "All Categories" : cat}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Section */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 className={styles.title} style={{ fontSize: '2rem', textAlign: 'left', marginBottom: '2rem', borderLeft: '4px solid #22d3ee', paddingLeft: '1rem' }}>Upcoming Events</h2>
                <div className={styles.grid}>
                    {upcomingEvents.map((event) => (
                        <div key={event.id} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src={event.image} alt={event.title} className={styles.image} />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.dateTag}>{event.date}</span>
                                <h3 className={styles.cardTitle}>{event.title}</h3>
                                <p className={styles.description}>{event.description}</p>
                                <div className={styles.cardFooter}>
                                    <span className={styles.price}>{event.price}</span>
                                    <button
                                        className={styles.registerBtn}
                                        onClick={() => setSelectedEvent(event.title)}
                                    >
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {upcomingEvents.length === 0 && (
                        <p style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2rem", color: "#94a3b8" }}>No upcoming events found.</p>
                    )}
                </div>
            </section>

            {/* Past Section */}
            <section>
                <h2 className={styles.title} style={{ fontSize: '2rem', textAlign: 'left', marginBottom: '2rem', borderLeft: '4px solid #a855f7', paddingLeft: '1rem' }}>Past Events</h2>
                <div className={styles.grid} style={{ opacity: 0.8 }}>
                    {pastEvents.map((event) => (
                        <div key={event.id} className={styles.card} style={{ filter: 'grayscale(0.3)' }}>
                            <div className={styles.imageContainer}>
                                <img src={event.image} alt={event.title} className={styles.image} />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.dateTag} style={{ background: 'rgba(148, 163, 184, 0.1)', color: '#94a3b8', borderColor: 'rgba(148,163,184,0.2)' }}>{event.date}</span>
                                <h3 className={styles.cardTitle}>{event.title}</h3>
                                <p className={styles.description}>{event.description}</p>
                                <div className={styles.cardFooter}>
                                    <span className={styles.price} style={{ color: '#94a3b8' }}>{event.price}</span>
                                    <button className={styles.registerBtn} style={{ background: '#334155', cursor: 'not-allowed' }} disabled>Event Ended</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {pastEvents.length === 0 && (
                        <p style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2rem", color: "#94a3b8" }}>No past events found.</p>
                    )}
                </div>
            </section>
        </>
    );
}
