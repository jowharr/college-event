"use client";

import { useState } from "react";
import styles from "@/app/events/events.module.css"; // Reuse existing button/input styles

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    eventTitle: string;
}

export default function RegistrationModal({ isOpen, onClose, eventTitle }: RegistrationModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        studentId: "",
        department: "",
        year: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, eventTitle }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Registration failed");
            }

            setStatus("success");
            setTimeout(() => {
                onClose();
                setStatus("idle");
                setFormData({ name: "", email: "", studentId: "", department: "", year: "" });
            }, 2000);
        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }} onClick={onClose}>
            <div style={{
                background: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(34, 211, 238, 0.2)',
                padding: '2rem',
                borderRadius: '1.5rem',
                width: '100%',
                maxWidth: '500px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                position: 'relative'
            }} onClick={e => e.stopPropagation()}>

                <h2 style={{
                    fontFamily: 'var(--font-cinzel)',
                    fontSize: '1.8rem',
                    color: 'white',
                    marginBottom: '0.5rem',
                    textAlign: 'center'
                }}>Register Now</h2>

                <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>
                    for {eventTitle}
                </p>

                {status === "success" ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0', color: '#4ade80' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Registration Successful!</h3>
                        <p style={{ color: '#94a3b8' }}>See you at the event.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            className={styles.searchInput} // reusing existing style
                            style={{ width: '100%' }}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="College Email"
                            required
                            className={styles.searchInput}
                            style={{ width: '100%' }}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <input
                                type="text"
                                placeholder="Student ID"
                                required
                                className={styles.searchInput}
                                style={{ width: '100%' }}
                                value={formData.studentId}
                                onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Year (e.g., 2nd)"
                                required
                                className={styles.searchInput}
                                style={{ width: '100%' }}
                                value={formData.year}
                                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Department"
                            required
                            className={styles.searchInput}
                            style={{ width: '100%' }}
                            value={formData.department}
                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        />

                        {status === "error" && (
                            <p style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'center' }}>{errorMessage}</p>
                        )}

                        <button
                            type="submit"
                            className={styles.registerBtn}
                            style={{
                                width: '100%',
                                marginTop: '1rem',
                                padding: '1rem',
                                opacity: status === "loading" ? 0.7 : 1,
                                cursor: status === "loading" ? 'wait' : 'pointer'
                            }}
                            disabled={status === "loading"}
                        >
                            {status === "loading" ? "Processing..." : "Confirm Registration"}
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#94a3b8',
                                cursor: 'pointer',
                                marginTop: '0.5rem'
                            }}
                        >
                            Cancel
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
