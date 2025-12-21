"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

const testimonials = [
  {
    name: "Larry Neely",
    time: "3 months ago",
    review:
      "Very professional. Compassionate, kind, honest and beyond capable to work for you. Drew worked fiercely to get the job done on a much quicker timeline than expected. He is the exact opposite of every lawyer joke out there. Would highly recommend!",
    rating: 5,
    image: "",
  },
  {
    name: "garilania reyes",
    time: "7 months ago",
    review:
      "Drew is the BEST! Idk how he does it but I’m so grateful HE took my case on when I needed help. I literally handed him my problems and then didn’t have to think about them until they were resolved. Can’t ask for more than that!",
    rating: 5,
    image: "",
  },
  {
    name: "christina lavery caruso",
    time: "7 months ago",
    review:
      "I could not be happier with how Drew and Jessica handled my case. He used wisdom and discernment to handle the court case and was able to remove points from my driving record. I would highly recommend them.",
    rating: 5,
    image: "",
  },
  {
    name: "Jerel Cummings",
    time: "10 months ago",
    review:
      "Drew took excellent care of everything for me. I did not need to lift a finger. I would highly recommend this law firm for all of your traffic related needs. Thank you, Drew.",
    rating: 5,
    image: "",
  },
  {
    name: "janet anne",
    time: "4 months ago",
    review:
      "I am a lawyer in New York. I highly recommend Drew McCullough for traffic violations. He got a successful outcome for our mutual client. He was exceedingly professional and personally answered all the questions that his support staff was unable to answer for us. . His firm is organized, diligent, responsive and an excellent value.",
    rating: 5,
    image: "",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full px-8 py-8 md:py-16 ">
      <div className="max-w-[1640px] mx-auto">
        <div>
          {/* Youtube Video framework  */}
          <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
            <iframe
              className="w-full h-[300px] md:h-[550px] lg:h-[600px]"
              src="https://www.youtube.com/embed/JVhIvwXv_G4?si=0_4MZWqPmEhliHN7"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-[1640px] mx-auto mt-10 lg:mt-16">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 max-w-xl mx-auto">
          <Stagger>
            <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
              <p className="text-base font-normal text-[#666666] mb-4 border-b-1 border-primary inline-block">
                Testimonials
              </p>
            </Reveal>
            <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
              <h2 className="text-3xl md:text-4xl font-bold text-black text-center ">
                Our Clients Love Us We’ve Earned{" "}
                <span className="text-[#E72020]">5 Out of 5 Stars</span>
              </h2>
            </Reveal>
          </Stagger>
        </div>

        {/* Testimonials Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1} // default for mobile
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={6000}
          loop={true}
          // pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-16 mb-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Reveal y={100} opacityFrom={0} duration={3}>
                <div className="bg-[#373333] rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100 h-full flex flex-col">
                  {/* Review */}
                  <p className="text-sm text-white leading-relaxed">
                    {testimonial.review}
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 mt-4">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-500 text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}

                    <div>
                      <h3 className="font-semibold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-white/80">
                        {testimonial.time}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mt-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-orange-400 text-2xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
