"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/data/weddingData";

function IconClock() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

function IconPin() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function IconExternalLink() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}

function IconAkad() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L9 7H3l5 4-2 6 6-4 6 4-2-6 5-4h-6z" />
        </svg>
    );
}

function IconResepsi() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 17L6 7l6 4 6-4 3 10H3z" />
            <path d="M3 17h18" />
        </svg>
    );
}

function PaperTexture() {
    return (
        <>
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="loc-warp">
                    <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves="3" seed="11" stitchTiles="stitch" result="warpNoise" />
                    <feDiffuseLighting in="warpNoise" lightingColor="#e8e4de" surfaceScale="5" result="warpLight">
                        <feDistantLight azimuth="120" elevation="40" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="warpLight" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#loc-warp)" opacity="0.7" fill="#e8e4de" />
            </svg>
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="loc-crumple">
                    <feTurbulence type="turbulence" baseFrequency="0.018 0.025" numOctaves="6" seed="27" stitchTiles="stitch" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="#e8e4de" surfaceScale="2.5" result="light">
                        <feDistantLight azimuth="45" elevation="55" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="light" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#loc-crumple)" opacity="0.55" fill="#e8e4de" />
            </svg>
            <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: "300px 300px", opacity: 0.06, mixBlendMode: "multiply" }} />
            <div className="pointer-events-none absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.06) 100%)" }} />
        </>
    );
}

function EventCard({
    eyebrow,
    name,
    day,
    date,
    time,
    venue,
    address,
    mapQuery,
    viewMapButton,
    icon,
    delay,
}: {
    eyebrow: string;
    name: string;
    day: string;
    date: string;
    time: string;
    venue: string;
    address: string;
    mapQuery: string;
    viewMapButton: string;
    icon: React.ReactNode;
    delay: number;
}) {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

    return (
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-60px" }} transition={{ duration: 1.0, delay, ease: [0.25, 1, 0.5, 1] }} style={{ backgroundColor: "rgba(253,250,245,0.92)", borderRadius: "16px", border: "1px solid rgba(196,184,176,0.4)", boxShadow: "0 4px 20px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)", overflow: "hidden", }} >
            <div style={{ height: "4px", background: delay === 0.2 ? "linear-gradient(90deg, #f4b8c8, #e8a0b4)" : "linear-gradient(90deg, #1a2850, #2d4270)" }} />

            <div style={{ padding: "20px 20px 22px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "16px" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "10px", backgroundColor: delay === 0.2 ? "rgba(244,184,200,0.25)" : "rgba(26,40,80,0.08)", border: `1.5px solid ${delay === 0.2 ? "rgba(244,184,200,0.6)" : "rgba(26,40,80,0.2)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: delay === 0.2 ? "#c0607a" : "#1a2850", flexShrink: 0, }}>
                        {icon}
                    </div>
                    <div>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a7a72", marginBottom: "3px" }}>
                            {eyebrow}
                        </p>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(17px, 4.5vw, 20px)", color: "#1a2850", fontWeight: 600, lineHeight: 1.2 }}>
                            {name}
                        </h3>
                    </div>
                </div>

                <div style={{ height: "1px", backgroundColor: "rgba(196,184,176,0.4)", marginBottom: "14px" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "18px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#4a4540" }}>
                        <span style={{ color: "#8a7a72", flexShrink: 0 }}><IconClock /></span>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "clamp(11px, 2.8vw, 12px)", fontWeight: 500 }}>
                            {day}, {date}
                        </span>
                        <span style={{ color: "#c4b8b0" }}>·</span>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "clamp(11px, 2.8vw, 12px)", fontWeight: 600, color: "#1a2850" }}>
                            {time}
                        </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "#4a4540" }}>
                        <span style={{ color: "#8a7a72", flexShrink: 0, marginTop: "1px" }}><IconPin /></span>
                        <div>
                            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(11px, 2.8vw, 12px)", fontWeight: 600, color: "#1a2850", marginBottom: "1px" }}>
                                {venue}
                            </p>
                            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(10px, 2.5vw, 11px)", color: "#8a7a72", lineHeight: 1.5 }}>
                                {address}
                            </p>
                        </div>
                    </div>
                </div>

                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", width: "100%", padding: "11px 0", backgroundColor: "#e8e4de", border: "1.5px solid #1a2850", borderRadius: "8px", color: "#1a2850", fontFamily: "var(--font-body)", fontSize: "clamp(10px, 2.5vw, 11px)", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", boxSizing: "border-box", transition: "background-color 0.2s, color 0.2s", }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1a2850"; e.currentTarget.style.color = "#fdfaf5"; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#e8e4de"; e.currentTarget.style.color = "#1a2850"; }} >
                    <IconExternalLink />
                    {viewMapButton}
                </a>
            </div>
        </motion.div>
    );
}

export default function LocationSection() {
    const { locationSection } = weddingData;
    const { events } = locationSection;
    const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(events.akad.mapQuery)}&output=embed`;

    return (
        <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#e8e4de", padding: "60px 0 90px" }} >
            <PaperTexture />
            <div className="relative z-10 flex flex-col items-center" style={{ gap: "32px" }}>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }} className="flex flex-col items-center" style={{ gap: "10px", textAlign: "center", padding: "0 24px" }} >
                    <p className="text-[14px] md:text-[11px]" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a7a72", fontWeight: 600 }}>
                        {locationSection.eyebrow}
                    </p>
                    <h2 className="text-[48px] md:text-[38px]" style={{ fontFamily: "var(--font-display)", color: "#1a2850", fontWeight: 400, lineHeight: 1.2 }}>
                        {locationSection.title}
                    </h2>
                    <p className="text-[16px] md:text-[13px]" style={{ fontFamily: "var(--font-handwritten)", color: "#11212d", fontWeight: 400, lineHeight: 1.6 }}>
                        {locationSection.subtitle}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "200px", marginTop: "4px" }}>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                        <div style={{ width: "32px", lineHeight: 0, flexShrink: 0 }}>
                            <Image src="/ornaments/red-ribbon.png" alt="" width={32} height={32} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                        </div>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-60px" }} transition={{ duration: 1.1, delay: 0.15, ease: [0.25, 1, 0.5, 1] }} style={{ width: "88%", position: "relative" }} >
                    <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 6px 28px rgba(0,0,0,0.14)", border: "1px solid rgba(196,184,176,0.35)", aspectRatio: "16/9", position: "relative", backgroundColor: "#d6d0c8", }}>
                        <iframe src={embedSrc} title="Lokasi Pernikahan" style={{ width: "100%", height: "100%", border: "none", display: "block" }} loading="lazy" allowFullScreen />
                    </div>
                </motion.div>

                <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-60px" }} transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 1, 0.5, 1] }} className="text-[14px] md:text-[11px]" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a7a72", fontWeight: 600 }} >
                    {locationSection.eventsLabel}
                </motion.p>

                <div style={{ width: "88%", display: "flex", flexDirection: "column", gap: "16px" }}>
                    <EventCard {...events.akad} viewMapButton={locationSection.viewMapButton} icon={<IconAkad />} delay={0.2} />
                    <EventCard {...events.resepsi} viewMapButton={locationSection.viewMapButton} icon={<IconResepsi />} delay={0.35} />
                </div>

            </div>
        </section>
    );
}
