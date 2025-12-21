"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

interface BreadcrumbSectionProps {
  title: string;
  subtitle: string;
  className?: string;
}

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  title,
  subtitle,
  className,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  // ⌨️ Typewriter Logic
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(title.slice(0, index));
      index++;
      if (index > title.length) {
        clearInterval(interval);
      }
    }, 70); // typing speed

    return () => clearInterval(interval);
  }, [title]);

  return (
    <section
      className={`relative w-full min-h-[380px] flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <Image
        src="/images/breadcrumb/breadcrumb.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0d2c3b]/70" />

      {/* Content */}
      <Reveal y={100} opacityFrom={0} duration={3}>
        <div className="relative z-10 text-center max-w-5xl px-6 py-7">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {displayedText}
            <span className="inline-block w-[3px] h-6 md:h-8 bg-white ml-1 animate-pulse"></span>
          </h1>

          <p className="text-white text-base md:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>
      </Reveal>
    </section>
  );
};

export default BreadcrumbSection;
