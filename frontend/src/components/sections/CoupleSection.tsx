"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/data/weddingData";

export default function CoupleSection() {
    const { couple, coupleSection } = weddingData;

    return (
        <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#e8e4de", padding: "60px 0 80px" }} >
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="couple-warp">
                    <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves="3" seed="7" stitchTiles="stitch" result="warpNoise" />
                    <feDiffuseLighting in="warpNoise" lightingColor="#e8e4de" surfaceScale="5" result="warpLight">
                        <feDistantLight azimuth="120" elevation="40" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="warpLight" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#couple-warp)" opacity="0.7" fill="#e8e4de" />
            </svg>
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="couple-crumple">
                    <feTurbulence type="turbulence" baseFrequency="0.018 0.025" numOctaves="6" seed="13" stitchTiles="stitch" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="#e8e4de" surfaceScale="2.5" result="light">
                        <feDistantLight azimuth="45" elevation="55" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="light" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#couple-crumple)" opacity="0.55" fill="#e8e4de" />
            </svg>
            <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: "300px 300px", opacity: 0.06, mixBlendMode: "multiply", }} />
            <div className="pointer-events-none absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.06) 100%)" }} />

            <div className="relative z-10 flex flex-col items-center" style={{ gap: "28px" }}>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }} className="flex flex-col items-center" style={{ gap: "10px", textAlign: "center", padding: "0 24px" }} >
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(9px, 2.2vw, 11px)", letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a7a72", fontWeight: 600 }}>
                        {coupleSection.eyebrow}
                    </p>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 7vw, 38px)", color: "#1a2850", fontWeight: 400, lineHeight: 1.2 }}>
                        {coupleSection.title}
                    </h2>
                    <p style={{ fontFamily: "var(--font-handwritten)", fontSize: "clamp(11px, 2.8vw, 13px)", color: "#11212d", fontWeight: 400, lineHeight: 1.6 }}>
                        {coupleSection.subtitle}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "200px", marginTop: "4px" }}>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                        <div style={{ width: "32px", lineHeight: 0, flexShrink: 0 }}>
                            <Image src="/ornaments/red-ribbon.png" alt="" width={32} height={32} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                        </div>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 1, 0.5, 1] }} style={{ width: "88%", transform: "translateX(-8px) rotate(-1.5deg)", position: "relative" }} >
                    <Image src="/ornaments/postcard.png" alt="" width={900} height={600} style={{ width: "100%", height: "auto", display: "block" }} />

                    <div style={{ position: "absolute", top: 3, right: 20, width: 75, transform: "rotate(0deg)", zIndex: 20, pointerEvents: "none" }}>
                        <Image src="/ornaments/stmp.png" alt="" width={60} height={60} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                    </div>

                    <div className="absolute inset-0 flex" style={{ padding: "6% 4%" }}>
                        <div className="flex flex-col items-center justify-center" style={{ flex: "0 0 48%", gap: "12px" }}>
                            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(9px, 2.5vw, 13px)", color: "#4a3828", letterSpacing: "0.15em", textTransform: "uppercase", fontStyle: "italic", fontWeight: 400 }}>
                                {coupleSection.groomLabel}
                            </p>
                            <div style={{ width: 110, transform: "rotate(-4deg)", backgroundColor: "#fff", padding: "6px 6px 18px 6px", boxShadow: "0 3px 12px rgba(0,0,0,0.20)", flexShrink: 0 }}>
                                <div style={{ aspectRatio: "3/4", position: "relative", overflow: "hidden" }}>
                                    <Image src={couple.groom.photo} alt={couple.groom.fullName} fill style={{ objectFit: "cover" }} />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center" style={{ flex: "0 0 52%", paddingLeft: "6%", paddingTop: "14%", gap: "6px", textAlign: "center" }}>
                            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(15px, 4vw, 22px)", color: "#1a2850", fontWeight: 600, lineHeight: 1.2 }}>
                                {couple.groom.fullName}
                            </p>
                            <a href={`https://instagram.com/${couple.groom.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "5px", textDecoration: "none" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#8a7a72" strokeWidth="2" fill="none" />
                                    <circle cx="12" cy="12" r="5" stroke="#8a7a72" strokeWidth="2" fill="none" />
                                    <circle cx="17.5" cy="6.5" r="1.2" fill="#8a7a72" />
                                </svg>
                                <span style={{ fontFamily: "var(--font-body)", fontSize: "clamp(10px, 2.5vw, 12px)", color: "#8a7a72", letterSpacing: "0.05em", fontWeight: 500 }}>
                                    {couple.groom.instagram}
                                </span>
                            </a>
                            <div style={{ width: "40px", height: "1px", backgroundColor: "#c4b8b0", margin: "4px 0" }} />
                            <p style={{ fontFamily: "var(--font-handwritten)", fontSize: "clamp(10px, 2.5vw, 12px)", color: "#4a4540", lineHeight: 1.9, fontWeight: 600 }}>
                                {couple.groom.order} dari<br />
                                {couple.groom.father}<br />
                                {couple.groom.mother}
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 1, 0.5, 1] }} style={{ width: "88%", transform: "translateX(8px) rotate(1.5deg)", position: "relative" }} >
                    <Image src="/ornaments/postcard.png" alt="" width={900} height={600} style={{ width: "100%", height: "auto", display: "block", transform: "scaleX(-1)" }} />

                    <div style={{ position: "absolute", top: 3, left: 20, width: 75, transform: "rotate(0deg)", zIndex: 20, pointerEvents: "none" }}>
                        <Image src="/ornaments/stmp.png" alt="" width={60} height={60} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                    </div>

                    <div className="absolute inset-0 flex" style={{ padding: "6% 4%" }}>
                        <div className="flex flex-col justify-center items-center" style={{ flex: "0 0 52%", paddingRight: "6%", paddingTop: "14%", gap: "6px", textAlign: "center" }}>
                            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(15px, 4vw, 22px)", color: "#1a2850", fontWeight: 600, lineHeight: 1.2 }}>
                                {couple.bride.fullName}
                            </p>
                            <a href={`https://instagram.com/${couple.bride.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "5px", textDecoration: "none" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#8a7a72" strokeWidth="2" fill="none" />
                                    <circle cx="12" cy="12" r="5" stroke="#8a7a72" strokeWidth="2" fill="none" />
                                    <circle cx="17.5" cy="6.5" r="1.2" fill="#8a7a72" />
                                </svg>
                                <span style={{ fontFamily: "var(--font-body)", fontSize: "clamp(10px, 2.5vw, 12px)", color: "#8a7a72", letterSpacing: "0.05em", fontWeight: 500 }}>
                                    {couple.bride.instagram}
                                </span>
                            </a>
                            <div style={{ width: "40px", height: "1px", backgroundColor: "#c4b8b0", margin: "4px 0" }} />
                            <p style={{ fontFamily: "var(--font-handwritten)", fontSize: "clamp(10px, 2.5vw, 12px)", color: "#4a4540", lineHeight: 1.9, fontWeight: 600 }}>
                                {couple.bride.order} dari<br />
                                {couple.bride.father}<br />
                                {couple.bride.mother}
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-center" style={{ flex: "0 0 48%", gap: "12px" }}>
                            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(9px, 2.5vw, 13px)", color: "#4a3828", letterSpacing: "0.15em", textTransform: "uppercase", fontStyle: "italic", fontWeight: 400 }}>
                                {coupleSection.brideLabel}
                            </p>
                            <div style={{ width: 110, transform: "rotate(4deg)", backgroundColor: "#fff", padding: "6px 6px 18px 6px", boxShadow: "0 3px 12px rgba(0,0,0,0.20)", flexShrink: 0 }}>
                                <div style={{ aspectRatio: "3/4", position: "relative", overflow: "hidden" }}>
                                    <Image src={couple.bride.photo} alt={couple.bride.fullName} fill style={{ objectFit: "cover" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
