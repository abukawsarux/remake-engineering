"use client";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import React from "react";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

const instagramFeed = [
  {
    id: 1,
    imageUrl: "/images/insta/insta-1.png",
    postUrl:
      "https://www.instagram.com/medicalweightlosstampa/reel/DPDKPdyjXZl/",
  },
  {
    id: 2,
    imageUrl: "/images/insta/insta-2.png",
    postUrl: "https://www.instagram.com/tampa_chiropractic/p/DO_GvLTkX_c/",
  },
  {
    id: 3,
    imageUrl: "/images/insta/insta-3.png",
    postUrl: "https://www.instagram.com/tampa_chiropractic/reel/DO6BSl6DcYs/",
  },
  {
    id: 4,
    imageUrl: "/images/insta/insta-4.png",
    postUrl: "https://www.instagram.com/tampa_chiropractic/reel/DOxOQ19jcZy/",
  },
];

const InstagramSection = () => {
  return (
    <section className="bg-[#F9F9F9]">
      <div className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <Reveal y={20} opacityFrom={0}>
            <h2 className="text-3xl lg:text-[38px] font-bold text-gray-900">
              Instagram
            </h2>
          </Reveal>
          <Reveal y={20} opacityFrom={0}>
          <Link
            href="https://www.instagram.com/medicalweightlosstampa/"
            target="_blank"
            className="underline text-primary text-medium"
          >
                Follow me on Instagram
            </Link>
          </Reveal>
        </div>

        {/* Instagram Feed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {instagramFeed.map((post) => (
            <Reveal key={post.id} y={30} opacityFrom={0}>
            <div
              key={post.id}
              className="relative group  overflow-hidden   transition p-8 bg-white shadow-medium rounded-2xl border-0"
            >
              <Link
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <Image
                  src={post.imageUrl}
                  alt={`Instagram post ${post.id}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Hover Overlay */}
                <div className=" w-16 h-16 rounded-3xl absolute right-0 bottom-0   bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <Instagram className="text-primary w-10 h-10" />
                </div>
              </Link>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
