"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMenu = () => setIsMobileOpen(!isMobileOpen);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Events", path: "/events" },
        { name: "Clubs", path: "/clubs" },
        { name: "Gallery", path: "/gallery" },
        { name: "Team", path: "/contact" },
    ];

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo} onClick={() => setIsMobileOpen(false)}>
                <Image
                    src="/images/logo.svg"
                    alt="College Logo"
                    width={45}
                    height={45}
                    className={styles.logoImage}
                />
                <div className={styles.titleGroup}>
                    <h1 className={styles.title}>Campus Connect</h1>
                    <p className={styles.subtitle}>Discover. Engage. Relive.</p>
                </div>
            </Link>

            {/* Desktop Nav */}
            <nav className={styles.nav}>
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={`${styles.navLink} ${(link.path === '/' ? pathname === '/' : pathname.startsWith(link.path))
                            ? styles.active
                            : ""
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            <Link href="/keystatic" className={styles.ctaButton}>
                Admin Portal
            </Link>

            {/* Mobile Toggle */}
            <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle Menu">
                {isMobileOpen ? '✕' : '☰'}
            </button>

            {/* Mobile Nav */}
            <div className={`${styles.mobileNav} ${isMobileOpen ? styles.open : ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={`${styles.mobileNavLink} ${(link.path === '/' ? pathname === '/' : pathname.startsWith(link.path))
                            ? styles.active
                            : ""
                            }`}
                        onClick={() => setIsMobileOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="/keystatic"
                    className={styles.ctaButton}
                    style={{ display: 'inline-block', marginTop: '1rem' }}
                    onClick={() => setIsMobileOpen(false)}
                >
                    Admin Portal
                </Link>
            </div>
        </header>
    );
}
