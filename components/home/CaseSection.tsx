"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const caseData = [
  {
    title: "State of Florida vs. J.R.M.",
    charge: "Possession of Heroin",
    outcome: "Dismissed by Motion to Dismiss",
  },
  {
    title: "State of Florida vs. O.A.",
    charge: "Battery on a Pregnant Female",
    outcome: "Not Filed",
  },
  {
    title: "State of Florida vs. J.E.C.",
    charge: "Trafficking in Amphetamines",
    outcome: "Dismissed",
  },
  {
    title: "State of Florida vs. N.P.B.",
    charge: "Child Abuse",
    outcome: "Case Dismissed",
  },
  {
    title: "State of Florida vs. J.R.M.",
    charge: "Possession of Heroin",
    outcome: "Dismissed by Motion to Dismiss",
  },
  {
    title: "State of Florida vs. O.A.",
    charge: "Battery on a Pregnant Female",
    outcome: "Not Filed",
  },
  {
    title: "State of Florida vs. J.E.C.",
    charge: "Trafficking in Amphetamines",
    outcome: "Dismissed",
  },
  {
    title: "State of Florida vs. N.P.B.",
    charge: "Child Abuse",
    outcome: "Case Dismissed",
  },
];

export default function CaseSection() {
  const [direction, setDirection] = useState<"horizontal" | "vertical">(
    "horizontal"
  );

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const updateDirection = () => {
      setDirection(window.innerWidth <= 760 ? "vertical" : "horizontal");
    };

    updateDirection();
    window.addEventListener("resize", updateDirection);

    return () => window.removeEventListener("resize", updateDirection);
  }, []);

  return (
    <div
      className="w-full md:h-[180px] h-[500px]"
      onMouseEnter={() => swiperRef.current?.autoplay.stop()} // Pause on hover
      onMouseLeave={() => swiperRef.current?.autoplay.start()} // Resume autoplay
    >
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        direction={direction}
        navigation={true}
        spaceBetween={1}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        speed={5000}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
        className="w-full h-full"
      >
        {caseData.map((item, i) => (
          <SwiperSlide
            key={i}
            className="bg-[#b88b24] text-white p-6 flex flex-col border border-white/10 "
          >
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>

            <div className="flex justify-between gap-3 items-start flex-1">
              <div className="flex-1">
                <p className="font-semibold">Charge:</p>
                <p className="mb-3">{item.charge}</p>
              </div>

              <div className="flex-1">
                <p className="font-semibold">Outcome:</p>
                <p>{item.outcome}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
