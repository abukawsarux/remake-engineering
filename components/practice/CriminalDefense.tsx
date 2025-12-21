"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import Link from "next/link";
import { FaBook } from "react-icons/fa6";
import { CriminalInjuryServices } from "@/config/data";

export default function CriminalDefense() {
  return (
    <section className="w-full px-8 py-8 md:py-16 bg-[#F9F9F9] " id="criminal-defense">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 max-w-3xl mx-auto">
          <Stagger>
            <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
              <h2 className="text-3xl md:text-4xl font-bold text-black text-center ">
                Criminal Defense
              </h2>
            </Reveal>
            <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
              <p className="text-base text-center font-normal text-[#666666] mt-3">
                We defend clients facing criminal charges with clear guidance,
                steady support, and a strategy built to protect their rights at
                every step.
              </p>
            </Reveal>
          </Stagger>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CriminalInjuryServices.map((service, index) => (
            <Reveal key={index} y={16} opacityFrom={0}>
              <Link
                href={`/practice/${service?.slug}`}
                className="block h-full"
              >
                <div className="group bg-white hover:bg-[#BA8E2D] duration-300 rounded-2xl shadow-sm hover:shadow-md transition p-6 lg:p-10 flex flex-col items-center text-center border border-gray-100 h-full cursor-pointer hover:scale-105 transform ">
                  <div
                    className="w-16 h-16 rounded-xl overflow-hidden flex justify-center items-center shadow-lg text-[#BA8E2D]
                  group-hover:bg-white duration-300"
                  >
                    <FaBook size={24} />
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
