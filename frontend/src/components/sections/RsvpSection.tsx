"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Caveat } from "next/font/google";
import { weddingData } from "@/data/weddingData";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "600"] });

interface FormState {
    name: string;
    phone: string;
    guestCount: string;
    attendance: "yes" | "no" | "";
}

interface FormErrors {
    name?: string;
    phone?: string;
    guestCount?: string;
    attendance?: string;
}

function PaperTexture() {
    return (
        <>
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="rsvp-warp">
                    <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves="3" seed="9" stitchTiles="stitch" result="warpNoise" />
                    <feDiffuseLighting in="warpNoise" lightingColor="#e8e4de" surfaceScale="5" result="warpLight">
                        <feDistantLight azimuth="120" elevation="40" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="warpLight" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#rsvp-warp)" opacity="0.7" fill="#e8e4de" />
            </svg>
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="rsvp-crumple">
                    <feTurbulence type="turbulence" baseFrequency="0.018 0.025" numOctaves="6" seed="23" stitchTiles="stitch" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="#e8e4de" surfaceScale="2.5" result="light">
                        <feDistantLight azimuth="45" elevation="55" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="light" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#rsvp-crumple)" opacity="0.55" fill="#e8e4de" />
            </svg>
            <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: "300px 300px", opacity: 0.06, mixBlendMode: "multiply" }} />
            <div className="pointer-events-none absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.06) 100%)" }} />
        </>
    );
}

export default function RsvpSection() {
    const { rsvpSection } = weddingData;
    const { form, thankYou } = rsvpSection;

    const [values, setValues] = useState<FormState>({ name: "", phone: "", guestCount: "1", attendance: "" });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (): FormErrors => {
        const e: FormErrors = {};
        if (!values.name.trim()) e.name = form.errors.name;
        if (!values.phone.trim()) e.phone = form.errors.phone;
        if (!values.guestCount || Number(values.guestCount) < 1) e.guestCount = form.errors.guestCount;
        if (!values.attendance) e.attendance = form.errors.attendance;
        return e;
    };

    const handleSubmit = () => {
        const e = validate();
        setErrors(e);
        if (Object.keys(e).length === 0) setSubmitted(true);
    };

    const handleReset = () => {
        setValues({ name: "", phone: "", guestCount: "1", attendance: "" });
        setErrors({});
        setSubmitted(false);
    };

    const set = (field: keyof FormState) => (v: string) => {
        setValues(prev => ({ ...prev, [field]: v }));
        setErrors(prev => ({ ...prev, [field]: undefined }));
    };

    const inputStyle = (hasError?: string): React.CSSProperties => ({
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
            <PaperTexture />
            <div className="relative z-10 flex flex-col items-center" style={{ gap: "32px" }}>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }} className="flex flex-col items-center" style={{ gap: "10px", textAlign: "center", padding: "0 24px" }} >
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(9px, 2.2vw, 11px)", letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a7a72", fontWeight: 600 }}>
                        {rsvpSection.eyebrow}
                    </p>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 7vw, 38px)", color: "#1a2850", fontWeight: 400, lineHeight: 1.2 }}>
                        {rsvpSection.title}
                    </h2>
                    <p style={{ fontFamily: "var(--font-handwritten)", fontSize: "clamp(11px, 2.8vw, 13px)", color: "#11212d", fontWeight: 400, lineHeight: 1.6 }}>
                        {rsvpSection.subtitle}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "200px", marginTop: "4px" }}>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                        <div style={{ width: "32px", lineHeight: 0, flexShrink: 0 }}>
                            <Image src="/ornaments/red-ribbon.png" alt="" width={32} height={32} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                        </div>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.1, delay: 0.25, ease: [0.25, 1, 0.5, 1] }} style={{ width: "88%", position: "relative" }} >
                    <div style={{ backgroundColor: "rgba(253,250,245,0.92)", borderRadius: "16px", boxShadow: "0 4px 28px rgba(0,0,0,0.13), 0 1px 4px rgba(0,0,0,0.07)", border: "1px solid rgba(196,184,176,0.4)", overflow: "hidden", position: "relative", }}>

                        <div style={{ height: "5px", background: "linear-gradient(90deg, #f4b8c8 0%, #1a2850 50%, #f4b8c8 100%)" }} />

                        <AnimatePresence mode="wait">
                            {!submitted ? (
                                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} style={{ padding: "28px 24px 32px" }} >
                                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                            <label style={{ fontFamily: "var(--font-body)", fontSize: "clamp(10px, 2.4vw, 11px)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4a4540" }}>
                                                {form.nameLabel}
                                            </label>
                                            <input type="text" placeholder={form.namePlaceholder} value={values.name} onChange={e => set("name")(e.target.value)} style={inputStyle(errors.name)} />
                                            {errors.name && (
                                                <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#c0392b", letterSpacing: "0.03em" }}>
                                                    ✕ {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                            <label style={{ fontFamily: "var(--font-body)", fontSize: "clamp(10px, 2.4vw, 11px)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4a4540" }}>
                                                {form.phoneLabel}
                                            </label>
                                            <input type="tel" placeholder={form.phonePlaceholder} value={values.phone} onChange={e => set("phone")(e.target.value)} style={inputStyle(errors.phone)} />
                                            {errors.phone && (
                                                <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#c0392b", letterSpacing: "0.03em" }}>
                                                    ✕ {errors.phone}
                                                </p>
                                            )}
                                        </div>

                                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                            <label style={{ fontFamily: "var(--font-body)", fontSize: "clamp(10px, 2.4vw, 11px)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4a4540" }}>
                                                {form.guestCountLabel}
                                            </label>
                                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                                <button onClick={() => set("guestCount")(String(Math.max(1, Number(values.guestCount) - 1)))} style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid #c4b8b0", backgroundColor: "transparent", cursor: "pointer", fontSize: "18px", color: "#4a4540", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                                                >−</button>
                                                <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 5vw, 22px)", color: "#1a2850", fontWeight: 400, minWidth: "32px", textAlign: "center" }}>
                                                    {values.guestCount}
                                                </span>
                                                <button onClick={() => set("guestCount")(String(Number(values.guestCount) + 1))} style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid #c4b8b0", backgroundColor: "transparent", cursor: "pointer", fontSize: "18px", color: "#4a4540", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                                                >+</button>
                                                <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#8a7a72", letterSpacing: "0.1em" }}>
                                                    {form.guestCountSuffix}
                                                </span>
                                            </div>
                                            {errors.guestCount && (
                                                <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#c0392b", letterSpacing: "0.03em" }}>
                                                    ✕ {errors.guestCount}
                                                </p>
                                            )}
                                        </div>

                                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                            <label style={{ fontFamily: "var(--font-body)", fontSize: "clamp(10px, 2.4vw, 11px)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4a4540" }}>
                                                {form.attendanceLabel}
                                            </label>
                                            <div style={{ display: "flex", gap: "10px" }}>
                                                {(["yes", "no"] as const).map(opt => {
                                                    const active = values.attendance === opt;
                                                    return (
                                                        <button key={opt} onClick={() => set("attendance")(opt)} style={{ flex: 1, padding: "10px 0", borderRadius: "8px", border: `1.5px solid ${active ? "#1a2850" : "#c4b8b0"}`, backgroundColor: active ? "#1a2850" : "transparent", color: active ? "#fdfaf5" : "#8a7a72", fontFamily: "var(--font-body)", fontSize: "clamp(10px, 2.5vw, 11px)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s", }} >
                                                            {opt === "yes" ? "✓  " : "✕  "}{form.attendanceOptions[opt]}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                            {errors.attendance && (
                                                <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#c0392b", letterSpacing: "0.03em" }}>
                                                    ✕ {errors.attendance}
                                                </p>
                                            )}
                                        </div>

                                        <button onClick={handleSubmit} style={{ width: "100%", marginTop: "4px", padding: "13px 20px", backgroundColor: "#e8e4de", color: "#1a2850", border: "1.5px solid #1a2850", borderRadius: "8px", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "clamp(10px, 2.5vw, 11px)", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", transition: "background-color 0.2s, color 0.2s", }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1a2850"; e.currentTarget.style.color = "#fdfaf5"; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#e8e4de"; e.currentTarget.style.color = "#1a2850"; }} >
                                            {form.submitButton}
                                        </button>

                                    </div>
                                </motion.div>

                            ) : (
                                <motion.div key="thankyou" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }} style={{ padding: "28px 24px 26px", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", textAlign: "center" }} >
                                    <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }} style={{ width: 44, lineHeight: 0 }} >
                                        <Image src="/ornaments/pink-heart.png" alt="" width={44} height={44} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                                    </motion.div>

                                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <h3 className={caveat.className} style={{ fontSize: "clamp(22px, 6vw, 28px)", color: "#1a2850", fontWeight: 600, lineHeight: 1.1 }}>
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
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
