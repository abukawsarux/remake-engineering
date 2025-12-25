"use client";

import {
  TbSatellite,
  TbBuildingBroadcastTower,
  TbDrone,
  TbFlask,
  TbMap2,
} from "react-icons/tb";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

const equipment = [
  {
    title: "RTK GNSS Receivers",
    description:
      "Advanced RTK GNSS systems delivering centimeter-level accuracy for boundary surveys, mapping, and positioning in real-time.",
    icon: TbSatellite,
  },
  {
    title: "Total Station",
    description:
      "High-precision electronic total stations used for detailed angle, distance, and elevation measurements on complex sites.",
    icon: TbBuildingBroadcastTower,
  },
  {
    title: "Drone / UAV Survey",
    description:
      "Aerial mapping and data capture using UAV technology for large-area surveys, volume calculation, and site monitoring.",
    icon: TbDrone,
  },
  {
    title: "Soil Testing Equipment",
    description:
      "Modern geotechnical testing tools for soil strength, bearing capacity, and foundation suitability analysis.",
    icon: TbFlask,
  },
  {
    title: "Digital Mapping Software",
    description:
      "Professional GIS, CAD, and survey software ensuring accurate data processing, plotting, and authority-ready reports.",
    icon: TbMap2,
  },
];

export default function EquipmentTechnology() {
  return (
    <section className="w-full px-8 py-12 md:py-20 bg-white">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-14 max-w-3xl mx-auto text-center">
          <Stagger>
            <Reveal y={80} opacityFrom={0}>
              <p className="text-base text-[#666666] mb-4 border-b-1 border-primary inline-block">
                Our Equipment & Technology
              </p>
            </Reveal>

            <Reveal y={80} opacityFrom={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Advanced Tools for Accurate & Reliable Survey Results
              </h2>
            </Reveal>

            <Reveal y={80} opacityFrom={0}>
              <p className="mt-4 text-gray-600">
                We invest in modern surveying instruments and digital
                technologies to deliver precision, efficiency, and
                industry-approved results on every project.
              </p>
            </Reveal>
          </Stagger>
        </div>

        {/* Equipment Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} y={80} opacityFrom={0}>
                <div className="h-full bg-[#F9F9F9] rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300 group">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
