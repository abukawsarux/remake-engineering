"use client";

import { TbRulerMeasure } from "react-icons/tb";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import Link from "next/link";
import { FaBook } from "react-icons/fa6";

const services = [
  {
    title: "RTK Land Survey",
    description:
      "High-precision land measurement using RTK and GNSS technology to ensure accurate boundary, area, and location data.",
    slug: "rtk-land-survey",
  },
  {
    title: "Digital Land Survey",
    description:
      "Modern digital mapping and plotting services for land records, documentation, and authority-approved survey reports.",
    slug: "digital-land-survey",
  },
  {
    title: "Topographic Survey",
    description:
      "Detailed terrain mapping including contours, elevations, and natural features for planning and construction projects.",
    slug: "topographic-survey",
  },
  {
    title: "Construction Layout Survey",
    description:
      "Accurate layout, leveling, and alignment services to ensure structures are built exactly as per design specifications.",
    slug: "construction-layout-survey",
  },
  {
    title: "Soil Test & Geotechnical Investigation",
    description:
      "Comprehensive soil testing and geotechnical analysis to support safe foundation design and structural stability.",
    slug: "soil-test-geotechnical",
  },
  {
    title: "Road & Infrastructure Survey",
    description:
      "Professional survey solutions for roads, bridges, drainage systems, and utility infrastructure development.",
    slug: "road-infrastructure-survey",
  },
];

export default function Services() {
  return (
    <section className="w-full px-8 py-8 md:py-16 bg-[#F9F9F9]">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 max-w-3xl mx-auto">
          <Stagger>
            <Reveal y={100} opacityFrom={0} duration={3}>
              <p className="text-base font-normal text-[#666666] mb-4 border-b-1 border-primary inline-block">
                Our Services
              </p>
            </Reveal>
            <Reveal y={100} opacityFrom={0} duration={3}>
              <h2 className="text-3xl md:text-4xl font-bold text-black text-center">
                Professional RTK Survey, Digital Land Survey & Soil Testing
                Services
              </h2>
            </Reveal>
          </Stagger>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.slug} y={100} opacityFrom={0} duration={3}>
              <Link href={`/practice/${service.slug}`} className="block h-full">
                <div className="group bg-white hover:bg-[#FC860A] duration-300 rounded-2xl shadow-sm hover:shadow-md transition p-6 lg:p-10 flex flex-col items-center text-center border border-gray-100 h-full cursor-pointer hover:scale-105 transform ">
                  <div
                    className="w-16 h-16 rounded-xl overflow-hidden flex justify-center items-center shadow-lg text-[#FC860A]
                  group-hover:bg-white duration-300"
                  >
                    <TbRulerMeasure size={24} />
                  </div>
                  <div className="pt-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 group-hover:text-white/90 duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
