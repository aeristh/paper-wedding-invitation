"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/data/weddingData";

export default function HeroSection() {
    const { hero, couple } = weddingData;

    return (
        <div className="relative w-full overflow-hidden" style={{ height: "100dvh" }}>
            <motion.div className="absolute inset-0 z-0" initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.2, delay: 1.0, ease: "easeOut" }} >
                <Image src={hero.photo} alt={`${couple.groom.nickname} & ${couple.bride.nickname}`} fill className="object-cover object-top" priority />
            </motion.div>

            <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0.42) 65%, rgba(0,0,0,0.72) 100%)", }} />

            <div className="absolute inset-0 z-10 flex flex-col items-center px-6" style={{ justifyContent: "space-between", paddingTop: "72px", paddingBottom: "36px" }} >

                <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 1.6, ease: [0.25, 1, 0.5, 1] }} className="flex flex-col items-center" style={{ gap: "10px" }} >
                    <p style={{ color: "rgba(243,234,217,0.75)", letterSpacing: "0.28em", fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, }} className="uppercase">
                        {hero.eyebrow}
                    </p>
                    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: 1.9, ease: "easeOut" }} style={{ width: "36px", height: "1px", backgroundColor: "rgba(184,169,158,0.6)", transformOrigin: "center", }} />
                </motion.div>

                <div className="mt-[5vh] sm:mt-0" style={{ position: "relative", width: "100%", textAlign: "center" }}>
                    <div style={{ position: "relative", display: "block", paddingBottom: "20px" }}>
                        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, delay: 1.8, ease: [0.16, 1, 0.3, 1] }} className="text-[clamp(74px,23vw,96px)] sm:text-[76px]" style={{ fontFamily: "var(--font-script)", color: "#f3ead9", lineHeight: 1.2, textShadow: "0 2px 16px rgba(0,0,0,0.45)", display: "block", padding: "4px 8px", transform: "translateX(-20px)", }} >
                            {couple.groom.nickname}
                        </motion.h1>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 2.4, ease: "easeOut" }} style={{ fontFamily: "var(--font-body)", color: "#f3ead9", fontSize: "18px", fontWeight: 600, letterSpacing: "0.15em", lineHeight: 1, }} >
                            &amp;
                        </motion.p>
                    </div>

                    <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, delay: 2.1, ease: [0.16, 1, 0.3, 1] }} className="text-[clamp(74px,23vw,96px)] sm:text-[76px]" style={{ fontFamily: "var(--font-script)", color: "#f3ead9", lineHeight: 1.2, textShadow: "0 2px 16px rgba(0,0,0,0.45)", display: "block", padding: "4px 8px", transform: "translateX(20px)", }} >
                        {couple.bride.nickname}
                    </motion.h1>
                </div>

                <div className="flex flex-col items-center" style={{ gap: "16px" }}>

                    <motion.div initial={{ opacity: 0, scaleX: 0.6 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 1.0, delay: 2.8, ease: "easeOut" }} className="mb-[4vh] sm:mb-0" style={{ display: "flex", alignItems: "center", gap: "10px", width: "220px" }} >
                        <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(138,122,114,0.7)" }} />
                        <div style={{ width: "48px", lineHeight: 0, flexShrink: 0 }}>
                            <Image src="/ornaments/red-ribbon.png" alt="" width={48} height={48} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                        </div>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(138,122,114,0.7)" }} />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 3.1, ease: [0.25, 1, 0.5, 1] }} className="flex flex-col items-center" style={{ gap: 4 }} >
                        <p style={{ color: "rgba(243,234,217,0.65)", fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", }}>
                            {hero.date.day}
                        </p>
                        <p style={{ color: "#f3ead9", fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 5vw, 1.875rem)", fontWeight: 300, lineHeight: 1.2, textShadow: "0 1px 8px rgba(0,0,0,0.3)", }}>
                            {hero.date.dateNumber} {hero.date.month} {hero.date.year}
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.8, duration: 1.2, ease: "easeOut" }} className="flex flex-col items-center gap-1.5" >
                        <div style={{ width: 20, height: 32, border: "1.5px solid rgba(243,234,217,0.45)", borderRadius: 10, display: "flex", justifyContent: "center", }}>
                            <motion.div animate={{ y: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }} style={{ width: 3, height: 3, borderRadius: "50%", backgroundColor: "rgba(243,234,217,0.6)", marginTop: 5, }} />
                        </div>
                        <p style={{ color: "rgba(243,234,217,0.4)", fontFamily: "var(--font-body)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", }}>
                            scroll down
                        </p>
                    </motion.div>

                </div>
            </div>
            <motion.div className="absolute inset-0 z-20 bg-black pointer-events-none" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }} />
        </div>
    );
}
