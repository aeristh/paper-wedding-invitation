"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/data/weddingData";

const HARDCODED_WISHES = [
    {
        id: 1,
        name: "Ahmad Fauzi",
        from: "Jakarta",
        message: "Semoga pernikahan kalian menjadi berkah, bahagia dunia dan akhirat. Selamat menempuh hidup baru!",
    },
    {
        id: 2,
        name: "Sari Dewi",
        from: "Bandung",
        message: "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fi khair. Semoga sakinah, mawaddah, warahmah.",
    },
    {
        id: 3,
        name: "Budi Santoso",
        from: "Surabaya",
        message: "Selamat dan bahagia! Semoga cinta kalian selalu tumbuh dan diridhai Allah SWT.",
    },
    {
        id: 4,
        name: "Rina Kusuma",
        from: "Yogyakarta",
        message: "Doa terbaik dari kami untuk kedua mempelai. Semoga rumah tangga kalian menjadi surga dunia yang penuh kasih sayang.",
    },
];

interface WishFormState {
    name: string;
    from: string;
    message: string;
}

interface WishFormErrors {
    name?: string;
    message?: string;
}

function getInitials(name: string) {
    return name
        .split(" ")
        .slice(0, 2)
        .map((w) => w.charAt(0).toUpperCase())
        .join("");
}

export default function WishesSection() {
    const { wishesSection } = weddingData;
    const { form, thankYou } = wishesSection;

    const [values, setValues] = useState<WishFormState>({ name: "", from: "", message: "" });
    const [errors, setErrors] = useState<WishFormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (): WishFormErrors => {
        const e: WishFormErrors = {};
        if (!values.name.trim()) e.name = form.errors.name;
        if (!values.message.trim()) e.message = form.errors.message;
        return e;
    };

    const handleSubmit = () => {
        const e = validate();
        setErrors(e);
        if (Object.keys(e).length === 0) setSubmitted(true);
    };

    const handleReset = () => {
        setValues({ name: "", from: "", message: "" });
        setErrors({});
        setSubmitted(false);
    };

    const set = (field: keyof WishFormState) => (v: string) => {
        setValues((prev) => ({ ...prev, [field]: v }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

    const inputBase = (hasError?: string): React.CSSProperties => ({
        width: "100%",
        padding: "11px 14px",
        fontFamily: "var(--font-body)",
        fontSize: "clamp(12px, 3vw, 13px)",
        color: "#1a1a1a",
        backgroundColor: "rgba(255,255,255,0.72)",
        border: `1.5px solid ${hasError ? "#c0392b" : "#c4b8b0"}`,
        borderRadius: "10px",
        outline: "none",
        boxSizing: "border-box",
        boxShadow: hasError ? "0 0 0 3px rgba(192,57,43,0.08)" : "0 1px 4px rgba(0,0,0,0.06)",
        transition: "border-color 0.2s, box-shadow 0.2s",
    });

    return (
        <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#e8e4de", padding: "60px 0 90px" }} >
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="wishes-warp">
                    <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves="3" seed="15" stitchTiles="stitch" result="warpNoise" />
                    <feDiffuseLighting in="warpNoise" lightingColor="#e8e4de" surfaceScale="5" result="warpLight">
                        <feDistantLight azimuth="120" elevation="40" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="warpLight" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#wishes-warp)" opacity="0.7" fill="#e8e4de" />
            </svg>
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="wishes-crumple">
                    <feTurbulence type="turbulence" baseFrequency="0.018 0.025" numOctaves="6" seed="29" stitchTiles="stitch" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="#e8e4de" surfaceScale="2.5" result="light">
                        <feDistantLight azimuth="45" elevation="55" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="light" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#wishes-crumple)" opacity="0.55" fill="#e8e4de" />
            </svg>
            <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: "300px 300px", opacity: 0.06, mixBlendMode: "multiply", }} />
            <div className="pointer-events-none absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.06) 100%)" }} />

            <div className="relative z-10 flex flex-col items-center" style={{ gap: "36px" }}>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }} className="flex flex-col items-center" style={{ gap: "10px", textAlign: "center", padding: "0 24px" }} >
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(9px, 2.2vw, 11px)", letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a7a72", fontWeight: 600 }}>
                        {wishesSection.eyebrow}
                    </p>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 7vw, 38px)", color: "#1a2850", fontWeight: 400, lineHeight: 1.2 }}>
                        {wishesSection.title}
                    </h2>
                    <p style={{ fontFamily: "var(--font-handwritten)", fontSize: "clamp(11px, 2.8vw, 13px)", color: "#11212d", fontWeight: 400, lineHeight: 1.6 }}>
                        {wishesSection.subtitle}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "200px", marginTop: "4px" }}>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                        <div style={{ width: "32px", lineHeight: 0, flexShrink: 0 }}>
                            <Image src="/ornaments/red-ribbon.png" alt="" width={32} height={32} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                        </div>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.0, delay: 0.15, ease: [0.25, 1, 0.5, 1] }} style={{ width: "88%" }} >
                    <div style={{ maxHeight: "340px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "14px", paddingRight: "4px", scrollbarWidth: "thin", scrollbarColor: "#c4b8a8 transparent", }} >
                        {HARDCODED_WISHES.map((wish, i) => (
                            <motion.div key={wish.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }} style={{ display: "flex", gap: "12px", alignItems: "flex-start", }} >
                                <div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#c4a882", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.12)", }} >
                                    <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 700, color: "#faf7f2", letterSpacing: "0.05em" }}>
                                        {getInitials(wish.name)}
                                    </span>
                                </div>

                                <div style={{ flex: 1 }}>
                                    <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "6px" }}>
                                        <span style={{ fontFamily: "var(--font-body)", fontSize: "clamp(12px, 3vw, 13px)", fontWeight: 700, color: "#1a2850", letterSpacing: "0.02em" }}>
                                            {wish.name}
                                        </span>
                                        {wish.from && (
                                            <>
                                                <span style={{ color: "#c4b8a8", fontSize: "10px" }}>—</span>
                                                <span style={{ fontFamily: "var(--font-body)", fontSize: "clamp(9px, 2.2vw, 10px)", color: "#8a7a72", letterSpacing: "0.08em" }}>
                                                    {wish.from}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                    <div style={{ backgroundColor: "rgba(255,255,255,0.60)", border: "1px solid #d8d0c4", borderRadius: "0 12px 12px 12px", padding: "12px 14px", }} >
                                        <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(11px, 2.8vw, 13px)", color: "#2b2118", fontStyle: "italic", fontWeight: 300, lineHeight: 1.75 }}>
                                            "{wish.message}"
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-60px" }} transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 1, 0.5, 1] }} style={{ width: "88%", backgroundColor: "rgba(255,255,255,0.45)", border: "1px solid #d8d0c4", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", }} >
                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} style={{ padding: "28px 20px", display: "flex", flexDirection: "column", gap: "18px" }} >
                                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(9px, 2.2vw, 10px)", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8a7a72", fontWeight: 600, textAlign: "center" }}>
                                    {form.sectionLabel}
                                </p>

                                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <label style={{ fontFamily: "var(--font-body)", fontSize: "clamp(9px, 2.2vw, 10px)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4a4540" }}>
                                        {form.nameLabel}
                                    </label>
                                    <input type="text" placeholder={form.namePlaceholder} value={values.name} onChange={(e) => set("name")(e.target.value)} style={inputBase(errors.name)} />
                                    {errors.name && (
                                        <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#c0392b", letterSpacing: "0.03em" }}>
                                            ✕ {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <label style={{ fontFamily: "var(--font-body)", fontSize: "clamp(9px, 2.2vw, 10px)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4a4540" }}>
                                        {form.fromLabel}
                                    </label>
                                    <input type="text" placeholder={form.fromPlaceholder} value={values.from} onChange={(e) => set("from")(e.target.value)} style={inputBase()} />
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <label style={{ fontFamily: "var(--font-body)", fontSize: "clamp(9px, 2.2vw, 10px)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4a4540" }}>
                                        {form.messageLabel}
                                    </label>
                                    <textarea placeholder={form.messagePlaceholder} value={values.message} onChange={(e) => set("message")(e.target.value)} rows={4} style={{ ...inputBase(errors.message), resize: "none", fontStyle: "italic", }} />
                                    {errors.message && (
                                        <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#c0392b", letterSpacing: "0.03em" }}>
                                            ✕ {errors.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    style={{ width: "100%", marginTop: "4px", padding: "13px 20px", backgroundColor: "#e8e4de", color: "#1a2850", border: "1.5px solid #1a2850", borderRadius: "8px", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "clamp(10px, 2.5vw, 11px)", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", transition: "background-color 0.2s, color 0.2s", }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1a2850"; e.currentTarget.style.color = "#fdfaf5"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#e8e4de"; e.currentTarget.style.color = "#1a2850"; }} >
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {form.submitButton}
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div key="thankyou" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }} style={{ padding: "28px 24px 26px", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", textAlign: "center" }} >
                                <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }} style={{ width: 44, lineHeight: 0 }} >
                                    <Image src="/ornaments/pink-heart.png" alt="" width={44} height={44} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                                </motion.div>

                                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 5.5vw, 24px)", color: "#1a2850", fontWeight: 400, lineHeight: 1.2 }}>
                                        {thankYou.title}
                                    </h3>
                                    <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(10px, 2.6vw, 12px)", color: "#4a4540", fontStyle: "italic", fontWeight: 300, lineHeight: 1.6, maxWidth: "90%", margin: "0 auto" }}>
                                        {thankYou.message}
                                    </p>
                                </div>

                                <div style={{ width: "40px", height: "1px", backgroundColor: "#c4b8b0" }} />

                                <button onClick={handleReset} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "clamp(9px, 2.2vw, 10px)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8a7a72", textDecoration: "underline", textUnderlineOffset: "3px" }} >
                                    {thankYou.resetLink}
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
