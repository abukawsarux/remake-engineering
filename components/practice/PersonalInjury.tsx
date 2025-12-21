"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import Link from "next/link";
import { FaBook } from "react-icons/fa6";

import { PersonalInjuryServices } from "@/config/data";

export default function PersonalInjury() {
  return (
    <section className="w-full px-8 py-8 md:py-16 bg-white" id="personal-injury">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 max-w-3xl mx-auto">
          <Stagger>
            <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
              <p className="text-base font-normal text-[#666666] mb-4   border-b-1 border-primary inline-block">
                Practice Areas
              </p>
            </Reveal>
            <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
              <h2 className="text-3xl md:text-4xl font-bold text-black text-center ">
                Personal Injury
              </h2>
            </Reveal>
            <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
              <p className="text-base text-center font-normal text-[#666666] mt-3 ">
                We help clients navigate personal injury claims with clear
                guidance, strong advocacy, and a focus on securing the
                compensation they need to move forward.
              </p>
            </Reveal>
          </Stagger>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PersonalInjuryServices.map((service, index) => (
            <Reveal key={index} y={100} opacityFrom={0} duration={3}>
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
