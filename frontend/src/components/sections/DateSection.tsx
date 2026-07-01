"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/data/weddingData";

import { Caveat } from "next/font/google";
const caveat = Caveat({ subsets: ["latin"], weight: ["400", "600"] });

const BULAN: Record<string, number> = {
    Januari: 1, Februari: 2, Maret: 3, April: 4, Mei: 5, Juni: 6,
    Juli: 7, Agustus: 8, September: 9, Oktober: 10, November: 11, Desember: 12,
};

function getWeddingDate() {
    const { year, month, dateNumber } = weddingData.hero.date;
    const m = BULAN[month] ?? 1;
    return new Date(Number(year), m - 1, Number(dateNumber), 0, 0, 0);
}

function useCountdown() {
    const target = getWeddingDate();
    const calc = () => {
        const diff = target.getTime() - Date.now();
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    };
    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
        setTime(calc());
        const id = setInterval(() => setTime(calc()), 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

function pad(n: number) {
    return String(n).padStart(2, "0");
}

export default function DateSection() {
    const { hero, couple, dateSection } = weddingData;
    const countdown = useCountdown();

    const countdownItems = [
        { value: countdown.days, label: dateSection.countdown.days },
        { value: countdown.hours, label: dateSection.countdown.hours },
        { value: countdown.minutes, label: dateSection.countdown.minutes },
        { value: countdown.seconds, label: dateSection.countdown.seconds },
    ];

    const handleSaveCalendar = () => {
        const d = hero.date;
        const monthIdx = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ].indexOf(d.month) + 1;
        const dateStr = `${d.year}${String(monthIdx).padStart(2, "0")}${d.dateNumber.padStart(2, "0")}`;
        const title = encodeURIComponent(`Pernikahan ${couple.groom.nickname} & ${couple.bride.nickname}`);
        const details = encodeURIComponent(dateSection.calendarDescription);
        const location = encodeURIComponent(dateSection.calendarLocation);
        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateStr}/${dateStr}&details=${details}&location=${location}`;
        window.open(url, "_blank");
    };

    const handleReminder = async () => {
        if (!("Notification" in window)) {
            alert("Browser Anda tidak mendukung notifikasi.");
            return;
        }
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            new Notification(`Pengingat Pernikahan`, {
                body: `Jangan lupa! ${couple.groom.nickname} & ${couple.bride.nickname} menikah pada ${hero.date.day}, ${hero.date.dateNumber} ${hero.date.month} ${hero.date.year}`,
                icon: "/ornaments/red-stamp.png",
            });
        } else {
            alert("Izin notifikasi ditolak. Silakan aktifkan di pengaturan browser.");
        }
    };

    const btnBase: React.CSSProperties = {
        width: "100%",
        padding: "13px 20px",
        border: "1.5px solid #1a2850",
        borderRadius: "8px",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "clamp(10px, 2.5vw, 11px)",
        fontWeight: 600,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        backgroundColor: "#e8e4de",
        color: "#1a2850",
        transition: "background-color 0.2s, color 0.2s",
    };
    return (
        <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#e8e4de", padding: "60px 0 80px" }} >
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="date-warp">
                    <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves="3" seed="6" stitchTiles="stitch" result="warpNoise" />
                    <feDiffuseLighting in="warpNoise" lightingColor="#e8e4de" surfaceScale="5" result="warpLight">
                        <feDistantLight azimuth="120" elevation="40" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="warpLight" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#date-warp)" opacity="0.7" fill="#e8e4de" />
            </svg>
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="date-crumple">
                    <feTurbulence type="turbulence" baseFrequency="0.018 0.025" numOctaves="6" seed="19" stitchTiles="stitch" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="#e8e4de" surfaceScale="2.5" result="light">
                        <feDistantLight azimuth="45" elevation="55" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="light" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#date-crumple)" opacity="0.55" fill="#e8e4de" />
            </svg>
            <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: "300px 300px", opacity: 0.06, mixBlendMode: "multiply" }} />
            <div className="pointer-events-none absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.06) 100%)" }} />

            <div className="relative z-10 flex flex-col items-center" style={{ gap: "20px" }}>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }} className="flex flex-col items-center" style={{ gap: "10px", textAlign: "center", padding: "0 24px" }} >
                    <p className="text-[14px] md:text-[11px]" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a7a72", fontWeight: 600 }}>
                        {dateSection.eyebrow}
                    </p>
                    <h2 className="text-[55px] md:text-[38px]" style={{ fontFamily: "var(--font-display)", color: "#1a2850", fontWeight: 400, lineHeight: 1.2 }}>
                        {dateSection.title}
                    </h2>
                    <p className="text-[16px] md:text-[13px]" style={{ fontFamily: "var(--font-handwritten)", color: "#11212d", fontWeight: 400, lineHeight: 1.6 }}>
                        {dateSection.subtitle}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "200px", marginTop: "4px" }}>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                        <div style={{ width: "32px", lineHeight: 0, flexShrink: 0 }}>
                            <Image src="/ornaments/red-ribbon.png" alt="" width={32} height={32} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                        </div>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }} style={{ position: "relative", width: "82%", transform: "rotate(-1.5deg)" }} >
                    <Image src="/ornaments/grid-paper.png" alt="" width={800} height={400} style={{ width: "100%", height: "auto", display: "block" }} />

                    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ gap: "2px", padding: "10% 14%" }} >
                        <p className={caveat.className} style={{ fontSize: "clamp(16px, 4.5vw, 22px)", color: "#1a1a1a", fontWeight: 400, lineHeight: 1.1, textAlign: "center", letterSpacing: "0.04em", }}>
                            {hero.date.day}
                        </p>

                        <div style={{ width: "28px", height: "1px", backgroundColor: "#a09080", margin: "4px 0" }} />

                        <p className={caveat.className} style={{ fontSize: "clamp(20px, 6vw, 32px)", color: "#1a1a1a", fontWeight: 600, lineHeight: 1.15, textAlign: "center", letterSpacing: "0.02em", }}>
                            {hero.date.dateNumber} {hero.date.month} {hero.date.year}
                        </p>
                    </div>
                </motion.div>

                <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.0, delay: 0.1, ease: [0.25, 1, 0.5, 1] }} className="text-[14px] md:text-[11px]" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.15em", color: "#8a7a72", fontWeight: 600, textTransform: "uppercase", textAlign: "center", padding: "0 32px", lineHeight: 1.6 }} >
                    {dateSection.countdownLabel}
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }} style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "8px", width: "92%", padding: "0 4px" }} >
                    {countdownItems.map((item, i) => (
                        <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: [0.25, 1, 0.5, 1] }} style={{ flex: "1 1 0", position: "relative", minWidth: 0 }} >
                            <Image src="/ornaments/sq-grid.png" alt="" width={200} height={200} style={{ width: "100%", height: "auto", display: "block" }} />
                            <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ gap: "2px" }}>
                                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 6vw, 30px)", color: "#1a2850", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.02em" }}>
                                    {pad(item.value)}
                                </p>
                                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(7px, 1.8vw, 9px)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8a7a72", fontWeight: 600 }}>
                                    {item.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.0, delay: 0.4, ease: [0.25, 1, 0.5, 1] }} style={{ display: "flex", flexDirection: "column", gap: "12px", width: "78%", alignItems: "center" }} >
                    <button onClick={handleSaveCalendar} style={btnBase} onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1a2850"; e.currentTarget.style.color = "#e8e4de"; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#e8e4de"; e.currentTarget.style.color = "#1a2850"; }} >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {dateSection.saveButton}
                    </button>

                    <button onClick={handleReminder} style={btnBase} onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1a2850"; e.currentTarget.style.color = "#e8e4de"; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#e8e4de"; e.currentTarget.style.color = "#1a2850"; }} >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                        {dateSection.reminderButton}
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
