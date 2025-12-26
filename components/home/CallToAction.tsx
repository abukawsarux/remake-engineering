"use client";

import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import Link from "next/link";
import { TbPhoneCall } from "react-icons/tb";

export default function CallToAction() {
  return (
    <section className="w-full px-8 py-16 md:py-24 bg-blue-950">
      <div className="max-w-[1640px] mx-auto">
        <div className="flex flex-col items-center text-center text-white max-w-3xl mx-auto">
          <Stagger>
            <Reveal y={80} opacityFrom={0}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Accurate Survey or Soil Test?
              </h2>
            </Reveal>

            <Reveal y={80} opacityFrom={0}>
              <p className="text-white/90 mb-8 text-lg">
                Get in touch with our expert team for reliable land surveys, RTK
                measurement, and soil testing services.
              </p>
            </Reveal>

            {/* CTA Button */}
            <Reveal y={80} opacityFrom={0}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-orange-600 font-semibold px-8 py-4 rounded-xl  text-white transition duration-300 shadow-lg"
              >
                Contact Us / Request a Quote
              </Link>
            </Reveal>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
