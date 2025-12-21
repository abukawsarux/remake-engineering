import React from "react";
import Reveal from "../motion/Reveal";
import Image from "next/image";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    image: "/images/services/BackPain.png",
    title: "Back Pain",
    slug: "back-pain",
    details:
      "Back pain can affect every part of your life — from how you move to how you feel. At Jachimek Wellness Center, we focus on identifying the true cause of your discomfort rather than masking symptoms. Whether your pain stems from poor posture, injury, stress, or spinal misalignment, our chiropractors use gentle, targeted adjustments and corrective therapies to restore balance and mobility. Our goal is to relieve pain, improve function, and help your body heal naturally so you can return to the activities you enjoy, free from limitations and constant discomfort.",
    bookingLink: "/contact",
  },
  {
    id: 2,
    image: "/images/services/Neckpain.png",
    title: "Neck Pain",
    slug: "neck-pain",
    details:
      "Neck pain can make even simple movements uncomfortable — turning your head, working at a desk, or getting a good night's sleep. At Jachimek Wellness Center, we understand how disruptive this pain can be. Our team identifies the underlying cause, whether it's poor posture, muscle tension, injury, or spinal misalignment, and creates a personalized treatment plan to relieve discomfort and restore mobility. Using gentle chiropractic adjustments and targeted therapies, we help reduce inflammation, ease stiffness, and support long-term healing. Our goal is to help you move freely again and prevent future neck pain from returning.",
    bookingLink: "/contact",
  },
  {
    id: 3,
    image: "/images/services/Spinaldecompression.png",
    title: "Spinal decompression - kdt certified doctor",
    slug: "spinal-decompression",
    details:
      "Spinal decompression is a gentle, non-surgical treatment designed to relieve back and neck pain caused by herniated or bulging discs, sciatica, or spinal degeneration. At Jachimek Wellness Center, our KDT-certified doctor provides advanced decompression therapy that safely stretches the spine to reduce pressure on nerves and promote natural disc healing. Each session is customized to your specific condition, helping improve mobility, reduce inflammation, and restore comfort without the need for medication or surgery. If you've been living with chronic back pain, our KDT-certified spinal decompression program offers a proven path to long-lasting relief.",
    bookingLink: "/contact",
  },
  {
    id: 4,
    image: "/images/services/car-accidents.png",
    title: "Car Accidents",
    slug: "car-accidents",
    details:
      "Even a minor car accident can cause lasting pain, stiffness, or hidden injuries that worsen over time. At Jachimek Wellness Center, we specialize in treating auto accident injuries with gentle, effective chiropractic care. Our experienced team evaluates your spine, muscles, and joints to identify underlying trauma such as whiplash, soft tissue damage, or misalignment. Using targeted adjustments, spinal therapies, and rehabilitation exercises, we help restore mobility, reduce inflammation, and speed up recovery. We also assist with documentation for insurance or legal claims, making your healing process as smooth and stress-free as possible.",
    bookingLink: "/contact",
  },
  {
    id: 5,
    image: "/images/services/sciatic-relief.png",
    title: "Sciatic Relief",
    slug: "sciatic-relief",
    details:
      "By restoring proper alignment to the spine, relieving pressure on the sciatic nerve, and reducing inflammation, chiropractic care can alleviate pain, improve mobility, and promote healing. With personalized treatment plans tailored to each patient's unique needs, chiropractors provide a non-invasive and drug-free approach to managing sciatic pain, helping individuals regain comfort and functionality for a better quality of life.",
    bookingLink: "/contact",
  },
  {
    id: 6,
    image: "/images/services/headaches.png",
    title: "Headaches/Migraines",
    slug: "headaches",
    details:
      "Recurring headaches and migraines can disrupt your work, sleep, and daily activities. At Jachimek Wellness Center, we address the root causes of your discomfort rather than just masking symptoms. Our chiropractors evaluate spinal alignment, muscle tension, and posture to identify triggers contributing to headaches and migraines. Through gentle adjustments, corrective therapies, and personalized treatment plans, we help reduce the frequency and intensity of pain while improving overall nervous system function. Our goal is to provide lasting relief, restore balance, and empower you to enjoy your day-to-day life without the constant burden of headaches or migraine episodes.",
    bookingLink: "/contact",
  },
  {
    id: 7,
    image: "/images/services/Vitamin-B12-injections.png",
    title: "Vitamin B12 injections",
    slug: "vitamin-b12-injections",
    details:
      "Vitamin B12 is essential for energy, metabolism, and overall wellness, yet many people struggle with deficiencies that leave them fatigued, weak, or unfocused. At Jachimek Wellness Center, we offer safe, targeted B12 injections and nutritional support to help restore energy, support nervous system health, and improve overall vitality. Our team evaluates your individual needs and creates a personalized plan to complement your chiropractic care and lifestyle. Whether you're looking to boost energy, support weight management, or enhance overall wellness, our vitamin and nutritional programs provide a natural, effective way to feel your best every day.",
    bookingLink: "/contact",
  },
];

const ServicesPage = () => {
  return (
    <>
      <section className="max-w-[1640px] mx-auto md:pt-16 py-8 px-8  gap-12 ">
        <div>
          <div className="grid grid-cols-1 py-12">
            {servicesData.map((service, index) => (
              <Reveal key={service.id} y={30} opacityFrom={0}>
                <div
                  key={service.id}
                  id={service.slug}
                  className={`shadow-small rounded-3xl p-8 lg:p-10 bg-white flex flex-col md:flex-row gap-8 mb-12 items-center ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1000}
                    height={600}
                    className="max-w-xl w-full h-auto object-cover"
                  />
                  <div>
                    <h3 className="text-xl lg:text-3xl font-semibold mt-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base mt-2 mb-6">
                      {service.details}
                    </p>

                    <Link
                      href="https://portal.sked.life/new-patient/time?key=489579519b65115ba47eec5ca31a717befcba2464a5491dc864e7173c4e6cfe6&from=" target="_blank"
                      className="inline-flex gap-2 items-center px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-primary transition"
                    >
                      Book Now
                      <div className="bg-white  rounded-full w-5 h-5 flex items-center justify-center text-black">
                        <svg
                          className="w-4 h-4 "
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
