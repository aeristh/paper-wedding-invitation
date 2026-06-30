"use client";

import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import CoverScreen from "@/components/cover/CoverScreen";
import HeroSection from "@/components/sections/HeroSection";
import QuoteSection from "@/components/sections/QuoteSection";
import CoupleSection from "@/components/sections/CoupleSection";
import StorySection from "@/components/sections/StorySection";
import GallerySection from "@/components/sections/GallerySection";
import DateSection from "@/components/sections/DateSection";
import RsvpSection from "@/components/sections/RsvpSection";
import LocationSection from "@/components/sections/LocationSection";
import GiftSection from "@/components/sections/GiftSection";
import WishesSection from "@/components/sections/WishesSection";
import FooterSection from "@/components/sections/FooterSection";
import MusicPlayer, { MusicPlayerHandle } from "@/components/ui/MusicPlayer";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const musicRef = useRef<MusicPlayerHandle>(null);

  const handleOpen = () => {
    setIsOpened(true);
    setShowContent(true);
    musicRef.current?.play();
  };

  return (
    <>
      <div className="w-full h-dvh bg-black overflow-y-auto scroll-gold">
        <div className="relative min-h-dvh w-full sm:w-[430px] mx-auto" style={{ backgroundColor: "#1b140f" }}>
          {showContent && (
            <>
              <HeroSection />
              <QuoteSection />
              <CoupleSection />
              <StorySection />
              <GallerySection />
              <DateSection />
              <RsvpSection />
              <LocationSection />
              <GiftSection />
              <WishesSection />
              <FooterSection />
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {!isOpened && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative w-full h-full sm:w-[430px] sm:h-dvh overflow-hidden">
              <CoverScreen key="cover" onOpen={handleOpen} />
            </div>
          </div>
        )}
      </AnimatePresence>

      <MusicPlayer ref={musicRef} />
    </>
  );
}