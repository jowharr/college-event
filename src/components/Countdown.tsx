"use client";
import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

interface CountdownProps {
    targetDate: string; // ISO string
    label?: string;
}

export default function Countdown({ targetDate, label = "Next Big Event Starts In" }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const target = new Date(targetDate).getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className={styles.section}>
            <div className={styles.label}>{label}</div>
            <div className={styles.timerContainer}>
                <div className={styles.timeUnit}>
                    <span className={styles.number}>{timeLeft.days.toString().padStart(2, '0')}</span>
                    <span className={styles.unit}>Days</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.timeUnit}>
                    <span className={styles.number}>{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <span className={styles.unit}>Hours</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.timeUnit}>
                    <span className={styles.number}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <span className={styles.unit}>Minutes</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.timeUnit}>
                    <span className={styles.number}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <span className={styles.unit}>Seconds</span>
                </div>
            </div>
        </div>
    );
}
