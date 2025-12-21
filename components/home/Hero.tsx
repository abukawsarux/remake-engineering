"use client";

import { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { PiHandshakeFill } from "react-icons/pi";
import { FaAward } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";

const titles = ["Injured?", "Arrested?", "We can help."];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimer = setTimeout(() => setBlink(p => !p), 500);

    if (!reverse && subIndex === titles[index].length) {
      setTimeout(() => setReverse(true), 1200);
      return;
    }
    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex(p => (p + 1) % titles.length);
      return;
    }

    const typeTimer = setTimeout(
      () => setSubIndex(p => p + (reverse ? -1 : 1)),
      reverse ? 80 : 160
    );

    return () => {
      clearTimeout(typeTimer);
      clearTimeout(blinkTimer);
    };
  }, [subIndex, index, reverse]);

  return (
    <div>
      {/* ================= HERO ================= */}
      <div className="relative w-full flex items-center justify-center">
        <Image
          src="/images/hero/hero-bg.png"
          alt="Hero BG"
          fill
          priority
          className="absolute inset-0 object-cover object-bottom"
        />

        <div className="max-w-[1640px] mx-auto px-8 w-full pt-10 lg:pt-20 xl:pt-32">
          <div className="relative">

            {/* 🔑 ONLY CHANGE IS HERE */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-10">

              {/* TEXT */}
              <div className="flex flex-col gap-6 max-w-2xl w-full mb-14 lg:mb-20 xl:mb-24">
                <Reveal y={100} opacityFrom={0} duration={3}>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-lg border-b-4 border-[#BA8E2D] pb-1 inline-block">
                    {titles[index].substring(0, subIndex)}
                    <span className={`${blink ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
                  </h1>
                </Reveal>

                <Reveal>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                    Trusted & Experienced Legal Representation Across Tampa Bay
                  </h3>
                </Reveal>

                <Reveal y={100} opacityFrom={0}>
                  <p className="text-white max-w-lg">
                    Justice starts with a lawyer who listens, understands, and fights relentlessly for your rights.
                  </p>
                </Reveal>

                <Reveal y={100} opacityFrom={0}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-4 bg-[#BA8E2D] text-white hover:bg-yellow-700 w-fit"
                  >
                    Schedule A Consultation <IoIosArrowForward />
                  </Link>
                </Reveal>
              </div>

              {/* IMAGE */}
              <div className="w-full flex justify-center md:justify-end">
                <Image
                  src="/images/hero/Attorney.png"
                  alt="Attorney"
                  width={400}
                  height={500}
                  className="mx-auto md:mx-0"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= FEATURE CARDS (UNCHANGED) ================= */}
      <div>
        <div className="max-w-[1640px] mx-auto px-8 w-full pt-10 lg:pt-20 xl:pt-32">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:absolute md:bottom-[-20%]">

              {[
                {
                  icon: <MdOutlinePersonalInjury />,
                  title: "Proven Results & Experience",
                  desc: "Over 15 years of success in personal injury and criminal defense across Tampa Bay."
                },
                {
                  icon: <IoGlobeOutline />,
                  title: "Personalized Attention",
                  desc: "Every client is treated like family with honest, one-on-one guidance."
                },
                {
                  icon: <PiHandshakeFill />,
                  title: "24/7 Availability",
                  desc: "We’re here day or night to protect your rights when it matters most."
                },
                {
                  icon: <FaAward />,
                  title: "Award-Winning Team",
                  desc: "Recognized by The National Trial Lawyers and Super Lawyers Rising Stars."
                }
              ].map((card, i) => (
                <Reveal key={i} y={100} opacityFrom={0} duration={4}>
                  <div className="group relative overflow-hidden p-6 bg-white rounded-md shadow-lg h-auto lg:h-60 transition-transform hover:scale-105">
                    <div className="absolute inset-0 bg-[#BA8E2D] w-0 group-hover:w-full transition-all duration-500" />
                    <div className="relative z-10 space-y-3">
                      <div className="w-16 h-16 bg-[#BA8E2D] text-white text-4xl flex items-center justify-center group-hover:bg-white group-hover:text-[#BA8E2D] transition">
                        {card.icon}
                      </div>
                      <h4 className="text-lg font-semibold group-hover:text-white transition">
                        {card.title}
                      </h4>
                      <p className="text-[#666] group-hover:text-white transition">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
