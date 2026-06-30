"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

interface CoverScreenProps {
    onOpen: () => void;
    guestName?: string;
}

export default function CoverScreen({ onOpen, guestName = "Tamu Undangan" }: CoverScreenProps) {
    const { cover, couple } = weddingData;

    return (
        <motion.div className="relative w-full h-dvh overflow-hidden flex items-center justify-center" exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }} >
            <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundColor: "#e8e4de" }} />

            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="warp">
                    <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves="3" seed="8" stitchTiles="stitch" result="warpNoise" />
                    <feDiffuseLighting in="warpNoise" lightingColor="#e8e4de" surfaceScale="5" result="warpLight">
                        <feDistantLight azimuth="120" elevation="40" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="warpLight" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#warp)" opacity="0.7" fill="#e8e4de" />
            </svg>

            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="crumple">
                    <feTurbulence type="turbulence" baseFrequency="0.018 0.025" numOctaves="6" seed="3" stitchTiles="stitch" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="#e8e4de" surfaceScale="2.5" result="light">
                        <feDistantLight azimuth="45" elevation="55" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="light" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#crumple)" opacity="0.55" fill="#e8e4de" />
            </svg>

            <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: "300px 300px", opacity: 0.06, mixBlendMode: "multiply", }} />

            <div className="pointer-events-none absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.06) 100%)" }} />

            <motion.div className="pointer-events-none absolute z-10" initial={{ opacity: 0 }} animate={{ opacity: 0.85 }} transition={{ duration: 1.0, delay: 0.1 }} style={{ width: "200px", top: "0px", right: "-10px", transform: "rotate(-180deg)" }} >
                <Image src="/ornaments/corner.png" alt="" width={140} height={140} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
            </motion.div>

            <motion.div className="pointer-events-none absolute z-10" initial={{ opacity: 0 }} animate={{ opacity: 0.85 }} transition={{ duration: 1.0, delay: 0.1 }} style={{ width: "170px", bottom: "0px", left: "-10px", transform: "rotate(180deg)" }} >
                <Image src="/ornaments/corner.png" alt="" width={200} height={200} style={{ width: "100%", height: "auto", objectFit: "contain", transform: "scaleX(-1) scaleY(-1)" }} />
            </motion.div>

            <motion.div className="pointer-events-none absolute z-10" initial={{ opacity: 0, rotate: -15 }} animate={{ opacity: 0.85, rotate: [-15, -20, -10, -15] }} transition={{ opacity: { duration: 0.6, delay: 2.0 }, rotate: { duration: 3, delay: 2.6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }, }} style={{ width: "200px", bottom: "165px", left: "-20px" }} >
                <Image src="/ornaments/letter.png" alt="" width={160} height={160} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
            </motion.div>

            <motion.div className="pointer-events-none absolute z-10" initial={{ opacity: 0, rotate: 0 }} animate={{ opacity: 0.85, rotate: [0, -8, 8, 0] }} transition={{ opacity: { duration: 0.6, delay: 2.2 }, rotate: { duration: 2.5, delay: 2.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }, }} style={{ width: "40px", top: "60px", left: "70px" }} >
                <Image src="/ornaments/loves.png" alt="" width={100} height={100} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
            </motion.div>

            <motion.div className="pointer-events-none absolute z-10" initial={{ opacity: 0, rotate: 0 }} animate={{ opacity: 0.85, rotate: [0, 10, -10, 0] }} transition={{ opacity: { duration: 0.6, delay: 2.4 }, rotate: { duration: 2.8, delay: 3.0, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }, }} style={{ width: "100px", top: "160px", right: "20px" }} >
                <Image src="/ornaments/pink-heart.png" alt="" width={100} height={100} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
            </motion.div>

            <div className="relative z-10 flex flex-col items-center px-8 w-full" style={{ gap: "14px" }}>

                <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} style={{ color: "#4a4540", letterSpacing: "0.28em", fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600 }} className="uppercase" >
                    {cover.eyebrow}
                </motion.p>

                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.5 }} style={{ width: "36px", height: "1px", backgroundColor: "#b8a99e", transformOrigin: "center" }} />

                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }} className="text-center" style={{ lineHeight: 1, position: "relative" }} >
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <h1 style={{ fontFamily: "var(--font-script)", color: "#1a2850", fontSize: "clamp(56px, 15vw, 76px)", lineHeight: 1.05, textShadow: "0 1px 2px rgba(0,0,0,0.08)" }}>
                            {couple.groom.nickname}
                        </h1>
                        <span style={{ position: "absolute", bottom: "-12px", left: "50%", transform: "translateX(-50%)", fontFamily: "var(--font-body)", color: "#e879a0", fontSize: "18px", fontWeight: 600, letterSpacing: "0.15em", lineHeight: 1 }}>
                            &amp;
                        </span>
                    </div>
                    <h1 style={{ fontFamily: "var(--font-script)", color: "#1a2850", fontSize: "clamp(56px, 15vw, 76px)", lineHeight: 1.05, textShadow: "0 1px 2px rgba(0,0,0,0.08)", marginTop: "28px" }}>
                        {couple.bride.nickname}
                    </h1>
                </motion.div>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.9 }} style={{ fontFamily: "var(--font-body)", color: "#4a4540", fontSize: "10px", fontWeight: 600, letterSpacing: "0.28em" }} className="uppercase" >
                    {cover.date}
                </motion.p>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.1 }} style={{ display: "flex", alignItems: "center", gap: "10px", width: "220px" }} >
                    <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                    <div style={{ width: "48px", lineHeight: 0, flexShrink: 0 }}>
                        <Image src="/ornaments/red-ribbon.png" alt="" width={48} height={48} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                    </div>
                    <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.3 }} className="text-center" >
                    <p style={{ fontFamily: "var(--font-body)", color: "#4a4540", fontSize: "9px", fontWeight: 600, letterSpacing: "0.25em" }} className="uppercase">
                        {cover.invitedLabel}
                    </p>
                    <p className="mt-1" style={{ fontFamily: "var(--font-script)", color: "#1a2850", fontSize: "22px", textShadow: "0 1px 2px rgba(0,0,0,0.07)" }}>
                        {guestName}
                    </p>
                </motion.div>

                <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.5 }} whileTap={{ scale: 0.97 }} onClick={onOpen} className="cursor-pointer" style={{ display: "flex", alignItems: "center", gap: "7px", fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.22em", color: "#f3ead9", backgroundColor: "#1a2850", border: "none", borderRadius: "0px", padding: "13px 32px", transition: "background-color 0.2s ease", boxShadow: "0 4px 16px rgba(26,40,80,0.25)", }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#243870"; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#1a2850"; }} >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#f3ead9" strokeWidth="2" />
                        <path d="M2 7L12 13L22 7" stroke="#f3ead9" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {cover.buttonLabel.toUpperCase()}
                </motion.button>

            </div>
        </motion.div>
    );
}
