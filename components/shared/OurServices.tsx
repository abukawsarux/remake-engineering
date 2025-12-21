"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import Link from "next/link";

const services = [
  {
    title: "Back Pain",
    description:
      "Relieve pain, restore mobility, and get back to your daily life.",
    image: "/images/services/back-pain.png",
    slug: "back-pain",
  },
  {
    title: "Neck pain",
    description:
      "Customized recovery plans to help athletes return to peak performance safely.",
    image: "/images/services/neck-pain.png",
    slug: "neck-pain",
  },
  {
    title: "Spinal decompression",
    description:
      "Non-surgical spinal care to ease pressure, reduce pain, and promote healing.",
    image: "/images/services/spinal-decompression.png",
    slug: "spinal-decompression",
  },
  {
    title: "Car Accidents",
    description:
      "Expert care for accident-related injuries to help you recover safely.",
    image: "/images/services/car-accidents.png",
    slug: "car-accidents",
  },
  {
    title: "Sciatic Relief",
    description:
      "Target nerve pain at its source for lasting relief and improved function.",
    image: "/images/services/sciatic-relief.png",
    slug: "sciatic-relief",
  },
  {
    title: "Headaches",
    description:
      "Alleviate tension and recurring headaches with personalized chiropractic care.",
    image: "/images/services/headaches.png",
    slug: "headaches",
  },
];

export default function Services() {
  return (
    <section className="w-full px-8 py-8 md:py-16">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center mb-12">
          <Stagger>
            <Reveal tag="div" y={16} opacityFrom={0}>
              <div>
                <h2 className="text-3xl  md:text-5xl font-bold text-gray-900 text-center">
                  Our Services
                </h2>
                <p className="mt-2 text-gray-600 max-w-2xl text-center">
                  Our chiropractors offer various services, including
                  chiropractic adjustments, spinal decompression therapy,
                  rehabilitation exercises, and weight loss, to help our
                  patients achieve optimal health.
                </p>
              </div>
            </Reveal>
            {/* <Reveal y={12} opacityFrom={0}>
              <Link
                href="/help"
                className="mt-6 md:mt-0 inline-flex items-center gap-2 border border-black rounded-full px-5 py-2  font-medium hover:text-white hover:bg-black transition text-black"
              >
                Explore More Services →
              </Link>
            </Reveal> */}
          </Stagger>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={index} y={16} opacityFrom={0}>
              <Link href="/services" className="block h-full">
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center border border-gray-100 h-full cursor-pointer hover:scale-105 transform duration-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={224}
                    className="w-full h-auto object-cover object-top rounded-xl"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
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
