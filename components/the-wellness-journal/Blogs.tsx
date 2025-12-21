"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TbBrandFacebook } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

const teammatesData = [
  {
    id: 1,
    slug: "dr-juliet-marvenko",
    image: "/images/team/juliet-marvenko.png",
    name: `dr. juliet marvenko - "Dr. J"`,
    designation: "Doctor",
    details:
      "My team and I provide a safe, whole-body approach to healing, prioritizing each patient's health and wellness.",
    socialsMedia: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      x: "https://x.com",
    },
  },
  {
    id: 2,
    slug: "dr-glen-gunderson",
    image: "/images/team/glen-gunderson.png",
    name: `dr. glen gunderson "dr. g"`,
    designation: "Doctor",
    details:
      "I grew up in a small farming community in Wisconsin and earned my Chiropractic degree from Northwestern College of Chiropractic in 1985.",
    socialsMedia: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      x: "https://x.com",
    },
  },
  // {
  //   id: 3,
  //   slug: "dr-ross-paxia",
  //   image: "/images/team/ross-paxia.png",
  //   name: `dr. ross paxia "dr. ross"`,
  //   designation: "Doctor",
  //   details:
  //     "I earned my undergraduate degree in Sports Medicine and graduated from Palmer College of Chiropractic in 2018.",
  //   socialsMedia: {
  //     facebook: "https://facebook.com",
  //     instagram: "https://instagram.com",
  //     x: "https://x.com",
  //   },
  // },
  {
    id: 4,
    slug: "dana",
    image: "/images/team/dana.png",
    name: "dana",
    designation: "Executive Director",
    details:
      "I studied Journalism in Tampa and later transitioned to healthcare in 2018 to help people live healthier, medication-free lives.",
    socialsMedia: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      x: "https://x.com",
    },
  },
];

const TeamPage = () => {
  return (
    <section className="max-w-[1640px] mx-auto px-8 py-8 md:py-16">
      {/* ===== Header ===== */}
      <div className="text-center">
        <Reveal y={20} opacityFrom={0}>
          <h2 className="text-3xl md:text-[38px] font-bold text-gray-900">
            Our Team
          </h2>
          <p className="mt-2 text-base text-gray-600 max-w-3xl mx-auto">
            Stop by and meet our amazing team! We are here for you. Our friendly
            staff is dedicated to providing the best care and service to ensure
            your comfort throughout your journey.
          </p>
        </Reveal>
      </div>

      {/* ===== Team Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {teammatesData.map((member) => (
          <Reveal key={member.id} y={30} opacityFrom={0}>
            <Link
              href={`/the-wellness-journal/${member.slug}`}
              key={member.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={1000}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl uppercase font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mt-1">
                  {member.designation}
                </p>
                <p className="text-gray-600 mt-3 line-clamp-2">
                  {member.details}
                </p>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <Link
                    href={member.socialsMedia.facebook}
                    target="_blank"
                    className="text-black/80 hover:text-blue-700 p-2 rounded-full bg-[#F2F4F7] text-xl"
                  >
                    <TbBrandFacebook />
                  </Link>
                  <Link
                    href={member.socialsMedia.instagram}
                    target="_blank"
                    className="text-black/80 hover:text-pink-600 p-2 rounded-full bg-[#F2F4F7] text-xl"
                  >
                    <FiInstagram />
                  </Link>
                  <Link
                    href={member.socialsMedia.x}
                    target="_blank"
                    className="text-black/80 hover:text-black p-2 rounded-full bg-[#F2F4F7] text-xl"
                  >
                    <FaXTwitter />
                  </Link>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
