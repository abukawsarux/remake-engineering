"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

type Project = {
  type: "image" | "video";
  title: string;
  location: string;
  service: string;
  src?: string;
  embedUrl?: string;
};

const projects: Project[] = [
  {
    type: "image",
    title: "RTK Land Survey for Residential Plot",
    location: "Chattogram",
    service: "RTK Land Survey",
    src: "/images/OurProjects/image-1.png",
  },
  {
    type: "video",
    title: "Topographic Survey for Road Project",
    location: "Cox’s Bazar",
    service: "Topographic Survey",
    embedUrl: "https://www.youtube.com/embed/SPCewaAfqPA?si=dEiBKZprs7GHdM6X",
  },
  {
    type: "image",
    title: "Soil Test for Commercial Building",
    location: "Dhaka",
    service: "Soil Test & Geotechnical",
    src: "/images/OurProjects/image-2.png",
  },
  {
    type: "video",
    title: "Digital Land Survey Overview",
    location: "Bangladesh",
    service: "Digital Land Survey",
    embedUrl: "https://www.youtube.com/embed/SPCewaAfqPA?si=dEiBKZprs7GHdM6X",
  },
  {
    type: "image",
    title: "Infrastructure Survey Project",
    location: "Sylhet",
    service: "Infrastructure Survey",
    src: "/images/OurProjects/image-3.png",
  },
  {
    type: "image",
    title: "Construction Layout Survey",
    location: "Chattogram",
    service: "Construction Survey",
    src: "/images/OurProjects/image-4.png",
  },
];

export default function OurProjectsPage() {
  return (
    <section className="w-full px-8 py-12 md:py-20 bg-[#F9F9F9] ">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-14 max-w-3xl mx-auto text-center">
          <Stagger>
            <Reveal y={80} opacityFrom={0}>
              <p className="text-base text-[#666666] mb-4 border-b-1 border-primary inline-block">
                Our Projects
              </p>
            </Reveal>

            <Reveal y={80} opacityFrom={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Completed Survey & Infrastructure Projects
              </h2>
            </Reveal>

            <Reveal y={80} opacityFrom={0}>
              <p className="mt-4 text-gray-600">
                A showcase of our completed land survey, soil testing, and
                infrastructure projects delivered with precision and
                professionalism.
              </p>
            </Reveal>
          </Stagger>
        </div>

        {/* Gallery */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {projects.map((project, index) => (
            <Reveal key={index} y={80} opacityFrom={0}>
              <div className="group overflow-hidden rounded-2xl bg-black aspect-[4/3] relative">
                {/* Image */}
                {project.type === "image" && project.src && (
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                )}

                {/* Video */}
                {project.type === "video" && project.embedUrl && (
                  <iframe
                    className="w-full h-full"
                    src={project.embedUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Text */}
              <div className="text-black mt-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-black/80">
                  {project.location} • {project.service}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
