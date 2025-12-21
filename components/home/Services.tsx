"use client";

import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import Link from "next/link";
import { FaBook } from "react-icons/fa6";

const services = [
  {
    title: "Drug Crimes",
    description:
      "Experienced defense for drug charges of all levels—protecting your rights, challenging evidence, and fighting for reduced penalties or dismissal.",
    slug: "drug-crimes",
  },
  {
    title: "Fraud",
    description:
      "Accused of fraud? We deliver strategic, detail-driven representation to defend your rights and safeguard your future.",
    slug: "fraud",
  },
  {
    title: "Injunctions",
    description:
      "We help clients obtain or defend against injunctions, ensuring your safety, property, and legal rights are fully protected.",
    slug: "injunctions",
  },
  {
    title: "Truck Accidents",
    description:
      "Truck accidents can cause serious injury. We guide you through claims, protect your rights, and pursue maximum recovery.",
    slug: "truck-accidents",
  },
  {
    title: "Motorcycle Accidents",
    description:
      "Motorcycle crashes can be life-changing. Our team fights for your rights, guiding you through claims and ensuring you get the justice you deserve.",
    slug: "motorcycle-accidents",
  },
  {
    title: "Dog Bites",
    description:
      "Dog bite injuries can be serious. Our experienced team fights to hold owners accountable and secure the recovery you deserve.",
    slug: "dog-bites",
  },
  {
    title: "Fatal Accidents",
    description:
      "When negligence causes an accidental death, we help families understand their rights, investigate the case, and pursue the compensation they deserve.",
    slug: "fatal-accidents",
  },
  {
    title: "Wrongful Death",
    description:
      "When a friend or family member passes away due to someone else’s negligence, our priority is to secure critical evidence, open a thorough investigation, and protect your family’s right to justice.",
    slug: "wrongful-death",
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
                Practice Areas
              </p>
            </Reveal>
            <Reveal y={100} opacityFrom={0} duration={3}>
              <h2 className="text-3xl md:text-4xl font-bold text-black text-center ">
                Explore the Services We Offer in Personal Injury and Criminal
                Defense
              </h2>
            </Reveal>
          </Stagger>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.slug} y={100} opacityFrom={0} duration={3}>
              <Link href={`/practice/${service.slug}`} className="block h-full">
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
