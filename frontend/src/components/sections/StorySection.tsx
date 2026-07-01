"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/data/weddingData";

export default function StorySection() {
    const { storySection } = weddingData;
    const [current, setCurrent] = useState(0);

    const total = storySection.items.length;

    const goTo = useCallback((index: number) => {
        setCurrent(((index % total) + total) % total);
    }, [total]);

    const goNext = () => goTo(current + 1);
    const goPrev = () => goTo(current - 1);

    const item = storySection.items[current];
    const rotates = ["-2deg", "1.5deg", "-1deg", "2deg"];
    const photoRotates = ["-4deg", "3deg", "-3deg", "4deg"];

    return (
        <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#e8e4de", padding: "60px 0 80px" }} >
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="story-warp">
                    <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves="3" seed="9" stitchTiles="stitch" result="warpNoise" />
                    <feDiffuseLighting in="warpNoise" lightingColor="#e8e4de" surfaceScale="5" result="warpLight">
                        <feDistantLight azimuth="120" elevation="40" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="warpLight" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#story-warp)" opacity="0.7" fill="#e8e4de" />
            </svg>
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="story-crumple">
                    <feTurbulence type="turbulence" baseFrequency="0.018 0.025" numOctaves="6" seed="15" stitchTiles="stitch" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="#e8e4de" surfaceScale="2.5" result="light">
                        <feDistantLight azimuth="45" elevation="55" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="light" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#story-crumple)" opacity="0.55" fill="#e8e4de" />
            </svg>
            <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: "300px 300px", opacity: 0.06, mixBlendMode: "multiply", }} />
            <div className="pointer-events-none absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.06) 100%)" }} />

            <div className="relative z-10 flex flex-col items-center" style={{ gap: "32px" }}>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }} className="flex flex-col items-center" style={{ gap: "10px", textAlign: "center", padding: "0 24px" }} >
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(9px, 2.2vw, 11px)", letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a7a72", fontWeight: 600 }}>
                        {storySection.eyebrow}
                    </p>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 7vw, 38px)", color: "#1a2850", fontWeight: 400, lineHeight: 1.2 }}>
                        {storySection.title}
                    </h2>
                    <p style={{ fontFamily: "var(--font-handwritten)", fontSize: "clamp(11px, 2.8vw, 13px)", color: "#11212d", fontWeight: 400, lineHeight: 1.6 }}>
                        {storySection.subtitle}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "200px", marginTop: "4px" }}>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                        <div style={{ width: "32px", lineHeight: 0, flexShrink: 0 }}>
                            <Image src="/ornaments/red-ribbon.png" alt="" width={32} height={32} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                        </div>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                    </div>
                </motion.div>

                <div className="relative flex items-center justify-center" style={{ width: "100%" }} >
                    <button onClick={goPrev} style={{ position: "absolute", left: "4px", zIndex: 30, background: "none", border: "none", cursor: "pointer", opacity: 0.75, padding: "8px", transition: "opacity 0.2s", }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="#4a3828" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div style={{ width: "78%", position: "relative" }}>
                        <AnimatePresence mode="wait">
                            <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} style={{ transform: `rotate(${rotates[current % rotates.length]})`, position: "relative", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.16))", }} >
                                <Image src="/ornaments/paper-story.png" alt="" width={600} height={900} style={{ width: "100%", height: "auto", display: "block" }} />

                                <div className="absolute inset-0 flex flex-col" style={{ padding: "8% 10% 10% 10%" }} >
                                    <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(9px, 2vw, 11px)", color: "#b8a99e", letterSpacing: "0.15em", fontWeight: 600, alignSelf: "flex-start", }}>
                                        {item.number}
                                    </p>

                                    <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 5vw, 24px)", color: "#1a2850", fontWeight: 500, textAlign: "center", lineHeight: 1.2, marginTop: "4px", }}>
                                        {item.title}
                                    </p>

                                    <div style={{ display: "flex", justifyContent: "center", margin: "16px 0", position: "relative" }}>
                                        <div id="photo-wrapper" style={{ position: "relative", width: "62%", aspectRatio: "1/1", backgroundColor: "#fff", padding: "6px", boxShadow: "0 3px 12px rgba(0,0,0,0.18)", transform: `rotate(${photoRotates[current % photoRotates.length]})`, flexShrink: 0, }} >
                                            <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                                                <Image src={item.photo} alt={item.title} fill style={{ objectFit: "cover" }} />
                                            </div>
                                        </div>
                                    </div>

                                    <p style={{ fontFamily: "var(--font-handwritten)", fontSize: "clamp(10px, 2.6vw, 12px)", color: "#4a4540", lineHeight: 1.8, textAlign: "center", fontWeight: 400, flex: 1, }}>
                                        {item.text}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button onClick={goNext} style={{ position: "absolute", right: "4px", zIndex: 30, background: "none", border: "none", cursor: "pointer", opacity: 0.75, padding: "8px", transition: "opacity 0.2s", }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 6L15 12L9 18" stroke="#4a3828" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}
