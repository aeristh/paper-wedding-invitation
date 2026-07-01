"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/data/weddingData";

export default function GiftSection() {
    const { giftSection, couple } = weddingData;
    const groomInitial = couple.groom.nickname.charAt(0).toUpperCase();
    const brideInitial = couple.bride.nickname.charAt(0).toUpperCase();
    const sealMonogram = `${groomInitial} & ${brideInitial}`;
    const [isOpen, setIsOpen] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (number: string, index: number) => {
        navigator.clipboard.writeText(number).then(() => {
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        });
    };

    return (
        <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#e8e4de", padding: "60px 0 80px" }} >
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="gift-warp">
                    <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves="3" seed="9" stitchTiles="stitch" result="warpNoise" />
                    <feDiffuseLighting in="warpNoise" lightingColor="#e8e4de" surfaceScale="5" result="warpLight">
                        <feDistantLight azimuth="120" elevation="40" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="warpLight" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#gift-warp)" opacity="0.7" fill="#e8e4de" />
            </svg>
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="gift-crumple">
                    <feTurbulence type="turbulence" baseFrequency="0.018 0.025" numOctaves="6" seed="21" stitchTiles="stitch" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="#e8e4de" surfaceScale="2.5" result="light">
                        <feDistantLight azimuth="45" elevation="55" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="light" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#gift-crumple)" opacity="0.55" fill="#e8e4de" />
            </svg>
            <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: "300px 300px", opacity: 0.06, mixBlendMode: "multiply", }} />
            <div className="pointer-events-none absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.06) 100%)" }} />

            <div className="relative z-10 flex flex-col items-center" style={{ gap: "40px" }}>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }} className="flex flex-col items-center" style={{ gap: "10px", textAlign: "center", padding: "0 24px" }} >
                    <p className="text-[14px] md:text-[11px]" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a7a72", fontWeight: 600 }}>
                        {giftSection.eyebrow}
                    </p>
                    <h2 className="text-[55px] md:text-[38px]" style={{ fontFamily: "var(--font-display)", color: "#1a2850", fontWeight: 400, lineHeight: 1.2 }}>
                        {giftSection.title}
                    </h2>
                    <p className="text-[16px] md:text-[13px]" style={{ fontFamily: "var(--font-handwritten)", color: "#11212d", fontWeight: 400, lineHeight: 1.6 }}>
                        {giftSection.subtitle}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "200px", marginTop: "4px" }}>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                        <div style={{ width: "32px", lineHeight: 0, flexShrink: 0 }}>
                            <Image src="/ornaments/red-ribbon.png" alt="" width={32} height={32} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                        </div>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }} style={{ width: "88%", position: "relative" }} >
                    <AnimatePresence mode="wait">
                        {!isOpen ? (
                            <motion.div key="closed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }} style={{ backgroundColor: "rgba(253,250,245,0.92)", borderRadius: "16px", border: "1px solid rgba(196,184,176,0.4)", boxShadow: "0 4px 20px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)", overflow: "hidden", }} >
                                <div style={{ height: "4px", background: "linear-gradient(90deg, #f4b8c8, #e8a0b4)" }} />

                                <div style={{ padding: "28px 24px 26px", display: "flex", flexDirection: "column", alignItems: "center", gap: "18px", textAlign: "center" }}>

                                    <div style={{ width: 56, height: 56, borderRadius: "12px", backgroundColor: "rgba(244,184,200,0.25)", border: "1.5px solid rgba(244,184,200,0.6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a2850", }}>
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="10" width="18" height="12" rx="1" stroke="#1a2850" strokeWidth="1.8" />
                                            <path d="M3 10V8a1 1 0 011-1h16a1 1 0 011 1v2" stroke="#1a2850" strokeWidth="1.8" />
                                            <path d="M12 7V22" stroke="#1a2850" strokeWidth="1.8" />
                                            <path d="M12 7C12 7 10 4 8 4C6 4 6 6 8 7C10 8 12 7 12 7Z" stroke="#1a2850" strokeWidth="1.4" />
                                            <path d="M12 7C12 7 14 4 16 4C18 4 18 6 16 7C14 8 12 7 12 7Z" stroke="#1a2850" strokeWidth="1.4" />
                                        </svg>
                                    </div>

                                    <motion.button onClick={() => setIsOpen(true)} whileTap={{ scale: 0.97 }} style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#e8e4de", color: "#1a2850", border: "1.5px solid #1a2850", borderRadius: "8px", padding: "12px 26px", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "clamp(10px, 2.5vw, 11px)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, transition: "background-color 0.2s, color 0.2s", }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1a2850"; e.currentTarget.style.color = "#fdfaf5"; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#e8e4de"; e.currentTarget.style.color = "#1a2850"; }} >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="10" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="1.8" />
                                            <path d="M3 10V8a1 1 0 011-1h16a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.8" />
                                            <path d="M12 7V22" stroke="currentColor" strokeWidth="1.8" />
                                        </svg>
                                        {giftSection.buttonLabel}
                                    </motion.button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div key="open" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }} style={{ display: "flex", flexDirection: "column", gap: "16px" }} >
                                {giftSection.accounts.map((account, index) => (
                                    <motion.div key={index} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }} style={{ backgroundColor: "#faf7f2", border: "1px solid #c4b8a8", borderRadius: "12px", padding: "18px 20px", boxShadow: "0 3px 12px rgba(0,0,0,0.08)", }} >
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                                            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(9px, 2.2vw, 10px)", color: "#8a7a72", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, }}>
                                                {account.bank}
                                            </p>
                                            <span style={{ color: "#c4b8a8" }}>·</span>
                                            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(13px, 3.2vw, 15px)", color: "#1a2850", fontWeight: 600, }}>
                                                {account.owner}
                                            </p>
                                        </div>

                                        <div style={{ height: "1px", backgroundColor: "#c4b8a8", marginBottom: "12px" }} />

                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(14px, 4vw, 18px)", color: "#1a2850", fontWeight: 700, letterSpacing: "0.08em", }}>
                                                {account.number}
                                            </p>

                                            <motion.button onClick={() => handleCopy(account.number, index)} whileTap={{ scale: 0.95 }} style={{ display: "flex", alignItems: "center", gap: "5px", backgroundColor: copiedIndex === index ? "#2d5a27" : "#1a2850", color: "#f3ead9", border: "none", borderRadius: "8px", padding: "7px 14px", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "clamp(9px, 2.2vw, 10px)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, transition: "background-color 0.3s ease", flexShrink: 0, }} >
                                                {copiedIndex === index ? (
                                                    <>
                                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M20 6L9 17L4 12" stroke="#f3ead9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        {giftSection.copiedLabel}
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="9" y="9" width="13" height="13" rx="1" stroke="#f3ead9" strokeWidth="2" />
                                                            <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" stroke="#f3ead9" strokeWidth="2" />
                                                        </svg>
                                                        {giftSection.copyLabel}
                                                    </>
                                                )}
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}

                                <motion.button onClick={() => setIsOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", backgroundColor: "transparent", color: "#8a7a72", border: "none", padding: "12px", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "clamp(9px, 2.2vw, 10px)", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, marginTop: "4px", }} >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 15L12 9L6 15" stroke="#8a7a72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {giftSection.backLabel}
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
