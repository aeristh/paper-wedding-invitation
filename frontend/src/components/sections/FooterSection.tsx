"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

export default function FooterSection() {
    const { footer } = weddingData;

    return (
        <footer
            className="relative w-full overflow-hidden"
            style={{
                background: "linear-gradient(160deg, #1a2850 0%, #233564 100%)",
                padding: "36px 24px 24px",
            }}
        >
            {/* ── Noise texture tipis ── */}
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: "300px 300px",
                    opacity: 0.04,
                    mixBlendMode: "screen",
                }}
            />

            {/* Aksen garis pink tipis di batas atas */}
            <div
                className="pointer-events-none absolute top-0 left-0 right-0"
                style={{ height: "2px", background: "linear-gradient(90deg, transparent, #f4b8c8, transparent)" }}
            />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
                className="relative z-10 flex flex-col items-center"
                style={{ gap: "6px", textAlign: "center" }}
            >
                <p style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(18px, 5vw, 22px)",
                    color: "#f3ead9",
                    fontWeight: 400,
                    letterSpacing: "0.04em",
                    lineHeight: 1.2,
                }}>
                    {footer.thankYou}
                </p>

                <div style={{ width: "30px", height: "1px", backgroundColor: "rgba(244,184,200,0.4)", margin: "5px 0" }} />

                <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(8px, 2vw, 9px)",
                    color: "rgba(243,234,217,0.6)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                }}>
                    {footer.copyright}
                </p>
            </motion.div>
        </footer>
    );
}