import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import UpcomingEvents from "@/components/UpcomingEvents";
import ClubCorner from "@/components/ClubCorner";
import SpecialDays from "@/components/SpecialDays";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

import { reader } from "@/utils/keystatic";

export default async function Home() {
  const settings = await reader.singletons.homepage.read();

  // Default fallback if settings are empty
  const targetDate = settings?.countdownDate || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  const label = settings?.countdownLabel || "Upcoming Event";

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Countdown targetDate={targetDate} label={label} />
        <div className={styles.contentGrid}>
          <UpcomingEvents />
          <ClubCorner />
          <SpecialDays />
        </div>
      </main>
      <Footer />
    </div>
  );
}
