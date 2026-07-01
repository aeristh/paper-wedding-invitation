"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/data/weddingData";
import Lightbox from "@/components/ui/Lightbox";

export default function GallerySection() {
    const { gallerySection } = weddingData;

    const featuredPhoto = gallerySection.photos[0];
    const leftPhotos = gallerySection.photos.slice(1, 4); // index 1,2,3 — statis

    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    const slotRotates = ["-2deg", "1.2deg", "-1.5deg"];

    return (
        <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#e8e4de", padding: "60px 0 80px" }} >
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="gallery-warp">
                    <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves="3" seed="3" stitchTiles="stitch" result="warpNoise" />
                    <feDiffuseLighting in="warpNoise" lightingColor="#e8e4de" surfaceScale="5" result="warpLight">
                        <feDistantLight azimuth="120" elevation="40" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="warpLight" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#gallery-warp)" opacity="0.7" fill="#e8e4de" />
            </svg>
            <svg className="pointer-events-none absolute inset-0 z-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="gallery-crumple">
                    <feTurbulence type="turbulence" baseFrequency="0.018 0.025" numOctaves="6" seed="17" stitchTiles="stitch" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="#e8e4de" surfaceScale="2.5" result="light">
                        <feDistantLight azimuth="45" elevation="55" />
                    </feDiffuseLighting>
                    <feBlend in="SourceGraphic" in2="light" mode="multiply" />
                </filter>
                <rect width="100%" height="100%" filter="url(#gallery-crumple)" opacity="0.55" fill="#e8e4de" />
            </svg>
            <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundSize: "300px 300px", opacity: 0.06, mixBlendMode: "multiply" }} />
            <div className="pointer-events-none absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.06) 100%)" }} />

            <div className="relative z-10 flex flex-col items-center" style={{ gap: "40px" }}>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }} className="flex flex-col items-center" style={{ gap: "10px", textAlign: "center", padding: "0 24px" }} >
                    <p className="text-[14px] md:text-[11px]" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a7a72", fontWeight: 600 }}>
                        {gallerySection.eyebrow}
                    </p>
                    <h2 className="text-[48px] md:text-[38px]" style={{ fontFamily: "var(--font-display)", color: "#1a2850", fontWeight: 400, lineHeight: 1.2 }}>
                        {gallerySection.title}
                    </h2>
                    <p className="text-[16px] md:text-[13px]" style={{ fontFamily: "var(--font-handwritten)", color: "#11212d", fontWeight: 400, lineHeight: 1.6 }}>
                        {gallerySection.subtitle}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "200px", marginTop: "4px" }}>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                        <div style={{ width: "32px", lineHeight: 0, flexShrink: 0 }}>
                            <Image src="/ornaments/red-ribbon.png" alt="" width={32} height={32} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                        </div>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "#8a7a72" }} />
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "16px", width: "92%", padding: "8px 0" }} >
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: "0 0 44%" }}>
                        {leftPhotos.map((photo, slotIdx) => (
                            <div key={photo.src} style={{ position: "relative", paddingTop: "18px" }} >
                                {slotIdx === 0 && (
                                    <div style={{ position: "absolute", top: -45, left: "50%", transform: "translateX(-50%) rotate(5deg)", width: 100, zIndex: 20, pointerEvents: "none" }}>
                                        <Image src="/ornaments/my.png" alt="" width={140} height={140} style={{ width: "100%", height: "auto", display: "block" }} />
                                    </div>
                                )}
                                {slotIdx === 1 && (
                                    <div style={{ position: "absolute", top: -30, left: "50%", transform: "translateX(-50%) rotate(5deg)", width: 85, zIndex: 20, pointerEvents: "none" }}>
                                        <Image src="/ornaments/cherry-washitape.png" alt="" width={130} height={130} style={{ width: "100%", height: "auto", display: "block" }} />
                                    </div>
                                )}
                                {slotIdx === 2 && (
                                    <div style={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%) rotate(-4deg)", width: 70, zIndex: 20, pointerEvents: "none" }}>
                                        <Image src="/ornaments/strb-washitape.png" alt="" width={136} height={136} style={{ width: "100%", height: "auto", display: "block" }} />
                                    </div>
                                )}

                                <motion.div onClick={() => setLightboxSrc(photo.src)} whileTap={{ scale: 0.98 }} style={{ cursor: "pointer", transform: `rotate(${slotRotates[slotIdx]})`, backgroundColor: "#fff", padding: "5px", boxShadow: "0 3px 14px rgba(0,0,0,0.18)" }} >
                                    <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                                        <Image src={photo.src} alt={`Gallery ${slotIdx + 2}`} fill style={{ objectFit: "cover" }} />
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 1, 0.5, 1] }} style={{ flex: "0 0 48%", position: "relative", transform: "rotate(1.8deg)", alignSelf: "center" }} >
                        <div style={{ position: "absolute", top: -145, right: 0, width: 200, transform: "rotate(-6deg)", zIndex: 20, pointerEvents: "none" }}>
                            <Image src="/ornaments/love.png" alt="" width={150} height={150} style={{ width: "100%", height: "auto", display: "block" }} />
                        </div>

                        <div onClick={() => setLightboxSrc(featuredPhoto.src)} style={{ cursor: "pointer", backgroundColor: "#fff", padding: "6px 6px 28px 6px", boxShadow: "0 6px 24px rgba(0,0,0,0.20)" }} >
                            <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", overflow: "hidden" }}>
                                <Image src={featuredPhoto.src} alt="Gallery Featured" fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>

                        <div style={{ position: "absolute", bottom: -60, right: -30, width: 115, transform: "rotate(12deg)", zIndex: 10, pointerEvents: "none" }}>
                            <Image src="/ornaments/red-stamp.png" alt="" width={128} height={128} style={{ width: "100%", height: "auto", display: "block" }} />
                        </div>

                        <div style={{ position: "absolute", bottom: -120, left: -5, width: 200, transform: "rotate(0deg)", zIndex: 10, pointerEvents: "none" }}>
                            <Image src="/ornaments/quote.png" alt="" width={220} height={220} style={{ width: "100%", height: "auto", display: "block" }} />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }} className="flex flex-col items-center" style={{ gap: "16px", width: "88%" }} >
                    <p className="text-[14px] md:text-[11px]" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a7a72", fontWeight: 600, textAlign: "center" }}>
                        {gallerySection.video.label}
                    </p>
                    <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: "16px", boxShadow: "0 6px 24px rgba(0,0,0,0.18)", backgroundColor: "#1a1a1a" }}>
                        <iframe src={gallerySection.video.src} title={gallerySection.video.label} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ width: "100%", height: "100%", border: "none", display: "block" }} />
                    </div>
                </motion.div>

            </div>

            <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
        </section>
    );
}
