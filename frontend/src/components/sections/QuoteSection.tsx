"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/data/weddingData";

export default function QuoteSection() {
    const { quoteSection } = weddingData;

    return (
        <section className="relative w-full overflow-hidden flex items-center justify-center" style={{ minHeight: "100dvh", backgroundColor: "#e8e4de" }} >
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="quote-warp">
                    <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves="3" seed="5" stitchTiles="stitch" result="warpNoise" />
                    <feDiffuseLighting in="warpNoise" lightingColor="#e8e4de" surfaceScale="5" result="warpLight">
                        <feDistantLight azimuth="120" elevation="40" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="warpLight" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#quote-warp)" opacity="0.7" fill="#e8e4de" />
            </svg>
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="quote-crumple">
                    <feTurbulence type="turbulence" baseFrequency="0.018 0.025" numOctaves="6" seed="11" stitchTiles="stitch" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="#e8e4de" surfaceScale="2.5" result="light">
                        <feDistantLight azimuth="45" elevation="55" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="light" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#quote-crumple)" opacity="0.55" fill="#e8e4de" />
            </svg>
            <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: "300px 300px", opacity: 0.06, mixBlendMode: "multiply", }} />
            <div className="pointer-events-none absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.06) 100%)" }} />

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }} className="relative z-10 flex items-center justify-center" style={{ width: "95%", padding: "32px 0" }} >
                <div className="relative" style={{ width: "85%", aspectRatio: "3/4" }}>

                    <Image src="/ornaments/stamp.png" alt="" fill className="object-fill" />

                    <div className="absolute flex flex-col items-center justify-center" style={{ top: "6%", left: "11%", right: "11%", bottom: "8%", gap: "clamp(6px, 1.2vh, 12px)", }} >
                        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.1, delay: 0.5, ease: [0.25, 1, 0.5, 1] }} style={{ fontFamily: "'Amiri', serif", fontSize: "clamp(15px, 4vw, 17px)", color: "#1a2850", lineHeight: 2.2, textAlign: "center", direction: "rtl", }} >
                            {quoteSection.arabic}
                        </motion.p>

                        <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }} style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%", transformOrigin: "center", }} >
                            <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                            <div style={{ width: "36px", lineHeight: 0, flexShrink: 0 }}>
                                <Image src="/ornaments/red-ribbon.png" alt="" width={36} height={36} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                            </div>
                            <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                        </motion.div>

                        <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.1, delay: 1.1, ease: [0.25, 1, 0.5, 1] }} style={{ fontFamily: "var(--font-handwritten)", fontSize: "clamp(12px, 3.2vw, 14px)", color: "#2b2118", lineHeight: 1.8, textAlign: "center", fontWeight: 400, marginTop: "clamp(4px, 1vh, 8px)" }} >
                            {quoteSection.translation}
                        </motion.p>

                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.9, delay: 1.4 }} style={{ fontFamily: "var(--font-body)", fontSize: "clamp(8px, 2vw, 9.5px)", color: "#4a4540", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, textAlign: "center", }} >
                            {quoteSection.source}
                        </motion.p>
                    </div>

                    <div style={{ position: "absolute", top: 0, left: 0, width: 80, transform: "rotate(-15deg)", zIndex: 20, pointerEvents: "none" }}>
                        <Image src="/ornaments/pink-washitape.png" alt="" width={90} height={90} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                    </div>

                    <div style={{ position: "absolute", bottom: -20, right: -20, width: 135, transform: "rotate(0deg)", zIndex: 20, pointerEvents: "none" }}>
                        <Image src="/ornaments/flower-stamp.png" alt="" width={80} height={80} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                    </div>

                    <div style={{ position: "absolute", bottom: 25, left: 20, width: 80, transform: "rotate(-8deg)", zIndex: 20, pointerEvents: "none" }}>
                        <Image src="/ornaments/pink-heart.png" alt="" width={60} height={60} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
