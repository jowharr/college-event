"use client";

import { useState } from "react";
import styles from "./SpecialDays.module.css";
import Image from "next/image";

interface SpecialDay {
    id: string;
    title: string;
    date: string;
    image: string;
}

export default function SpecialDaysList({ days }: { days: SpecialDay[] }) {
    const [expanded, setExpanded] = useState(false);
    const displayedDays = expanded ? days : days.slice(0, 3);

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {displayedDays.map((day) => (
                    <div key={day.id} className={styles.item}>
                        <img
                            src={day.image}
                            alt={day.title}
                            className={styles.thumbnail}
                        />
                        <div className={styles.info}>
                            <span className={styles.date}>{day.date}</span>
                            <span className={styles.eventName}>{day.title}</span>
                        </div>
                    </div>
                ))}
            </div>
            {days.length > 3 && (
                <button
                    className={styles.expandBtn}
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "View Less" : `View More (+${days.length - 3})`}
                </button>
            )}
        </div>
    );
}
