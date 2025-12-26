"use client";

import React, { useEffect, useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

interface BreadcrumbSectionProps {
  title: string;
  subtitle?: string;
  bgImage: string;
  className?: string;
}

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  title,
  subtitle,
  bgImage,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(title.slice(0, index));
      index++;
      if (index > title.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [title]);

  return (
    <section
      className={`relative w-full min-h-[450px] flex items-center justify-center ${className}`}
    >
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Breadcrumb Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-950/80" />

      {/* Content */}
      <div className="relative z-10 max-w-[1640px] mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center gap-6 max-w-6xl mx-auto">
          {/* Title */}
          <Reveal y={80} opacityFrom={0} duration={1.6}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight arya-font">
              {displayedText}
              {!isDone && <span className="animate-pulse">|</span>}
            </h1>
          </Reveal>

          {/* Subtitle */}
          {subtitle && (
            <Reveal y={60} opacityFrom={0} duration={1.8}>
              <p className="max-w-6xl text-base md:text-lg text-white/90">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(BreadcrumbSection);
