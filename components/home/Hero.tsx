"use client";

import { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { PiHandshakeFill } from "react-icons/pi";
import {
  FaAward,
  FaClock,
  FaSatelliteDish,
  FaUserCheck,
} from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { FaUsersCog } from "react-icons/fa";

const titles = [
  "Need Accurate Land & Soil Data?",
  "Remake Engineering Can Help",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimer = setTimeout(() => setBlink((p) => !p), 500);

    if (!reverse && subIndex === titles[index].length) {
      setTimeout(() => setReverse(true), 1200);
      return;
    }
    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((p) => (p + 1) % titles.length);
      return;
    }

    const typeTimer = setTimeout(
      () => setSubIndex((p) => p + (reverse ? -1 : 1)),
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
      <div className="relative w-full flex items-center justify-center min-h-[600] h-full">
        <Image
          src="/images/hero/hero-bg.png"
          alt="Hero BG"
          fill
          priority
          className="absolute inset-0 object-cover object-bottom  "
        />

        <div className="max-w-[1640px] mx-auto px-8 w-full pt-10 lg:pt-20 xl:pt-32">
          <div className="relative">
            {/* 🔑 ONLY CHANGE IS HERE */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-10">
              {/* TEXT */}
              <div className="flex flex-col gap-6  w-full mb-14 lg:mb-20 xl:mb-24">
                <Reveal y={100} opacityFrom={0} duration={3}>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white  border-b-4 border-[#FC860A] pb-1 inline-block">
                    {titles[index].substring(0, subIndex)}
                    <span
                      className={`${
                        blink ? "opacity-100" : "opacity-0"
                      } transition-opacity`}
                    >
                      |
                    </span>
                  </h1>
                </Reveal>

                <Reveal>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white max-w-2xl w-full">
                    Professional RTK Survey, Digital Land Survey & Soil Testing
                    Services
                  </h3>
                </Reveal>

                <Reveal y={100} opacityFrom={0}>
                  <p className="text-white max-w-lg">
                    Delivering high-precision measurements, reliable reports,
                    and modern survey solutions for construction, land
                    development, and infrastructure projects.
                  </p>
                </Reveal>

                <Reveal y={100} opacityFrom={0}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-4 bg-[#FC860A] text-white hover:bg-orange-600 w-fit"
                  >
                    Request a Survey <IoIosArrowForward />
                  </Link>
                </Reveal>
              </div>

              {/* IMAGE */}
              {/* <div className="w-full flex justify-center md:justify-end">
                <Image
                  src="/images/hero/Attorney.png"
                  alt="Attorney"
                  width={400}
                  height={500}
                  className="mx-auto md:mx-0"
                  priority
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* ================= FEATURE CARDS (UNCHANGED) ================= */}
      <div>
        <div className="max-w-[1640px] mx-auto px-8 w-full py-10 lg:py-20">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaSatelliteDish />,
                  title: "High Accuracy & Reliability",
                  desc: "Advanced RTK, GNSS, and digital survey instruments ensure precise land measurements and dependable results.",
                },
                {
                  icon: <FaUsersCog />,
                  title: "Customized Survey Solutions",
                  desc: "Each project is unique. We deliver tailored digital land survey and soil testing services based on site conditions.",
                },
                {
                  icon: <FaClock />,
                  title: "Timely Project Delivery",
                  desc: "Efficient fieldwork and reporting ensure fast turnaround without compromising accuracy or quality.",
                },
                {
                  icon: <FaUserCheck />,
                  title: "Certified Engineering Team",
                  desc: "Experienced surveyors and geotechnical engineers providing authority-accepted, industry-standard reports.",
                },
              ].map((card, i) => (
                <Reveal key={i} y={100} opacityFrom={0} duration={4}>
                  <div className="group relative overflow-hidden p-6 bg-white rounded-md shadow-medium h-auto lg:h-60 transition-transform hover:scale-105 border-0">
                    <div className="absolute inset-0 bg-[#FC860A] w-0 group-hover:w-full transition-all duration-500" />
                    <div className="relative z-10 space-y-3">
                      <div className="w-16 h-16 bg-[#FC860A] text-white text-4xl flex items-center justify-center group-hover:bg-white group-hover:text-[#FC860A] transition">
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
