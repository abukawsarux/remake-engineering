"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Nicholson Gall",
    caseType: "Old Case",
    image: "/images/testimonial/img2.png",
    review:
      "“Drew is attentive, transparent, and highly effective—he delivered excellent results for my case. I highly recommend McCulloch Law P.A.”",
  },
  {
    name: "Erica T.",
    caseType: "Old Case",
    image: "/images/testimonial/img1.png",
    review:
      "“Drew is attentive, transparent, and highly effective—he delivered excellent results for my case. I highly recommend McCulloch Law P.A.”",
  },
  {
    name: "David Knox",
    caseType: "Old Case",
    image: "/images/testimonial/img3.png",
    review:
      "Drew is a competent and skilled litigator that is passionate about his work and cases. I would trust him to handle my personal legal matters and I endorse him without hesitation",
  },
  {
    name: "Joseph Rosier",
    caseType: "Old Case",
    image: "/images/testimonial/img4.png",
    review:
      "“Mr. McCulloch and myself worked together at the State Attorney’s Office. His passion for trial is unparalleled. I cannot recall another ASA in the office that was more willing to take a case to trial. I know that he now has the same mentality as a defense attorney.“",
  },
  {
    name: "Jared McCabe",
    caseType: "Old Case",
    image: "/images/testimonial/img5.png",
    review:
      "“I endorse Drew. He is a sharp attorney, and works hard to advocate for his clients. Because he was previously a prosecutor he knows how to present his client’s case to the prosecutor, so that he can get the best result for his client.“",
  },
  {
    name: "Michelle Hutt",
    caseType: "Old Case",
    image: "/images/testimonial/img6.png",
    review:
      "“Drew is an excellent attorney and committed to his clients. I strongly endorse him.“",
  },
  {
    name: "Charalampos Demosthenous",
    caseType: "Old Case",
    image: "/images/testimonial/img7.png",
    review:
      "“Mr. McCulloch is an intelligent, thoughtful, and dedicated attorney who cares deeply for his clients. I endorse this lawyer.”",
  },
  {
    name: " E.J. Hubbs",
    caseType: "Old Case",
    image: "/images/testimonial/img8.png",
    review:
      "“I endorse this attorney. Drew and I were prosecutors in the same courtroom at the State Attorney’s Office. We have tried many cases together. Great trial attorney. He’s a bulldog in the courtroom.”",
  },
];

export default function TestimonialsSlider() {
  return (
    <section className="w-full px-8 py-8 md:py-16 bg-white">
      <div className="max-w-[1640px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Our Clients Love Us
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mt-2">
            We’ve Earned <span className="text-red-600">5 Out of 5 Stars</span>
          </h3>
        </div>

        {/* Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full flex flex-col items-center md:items-start">

                {/* IMAGE BLOCK */}
                <div className="relative w-full flex justify-center ">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={500}
                    height={400}
                    className="object-contain w-[300px] md:w-[400px]"
                  />

                  {/* === NEW NAME + CASE TYPE INSIDE IMAGE (BOTTOM-LEFT) === */}
                  <div className="absolute bottom-2 md:left-52 left-8 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-md ">
                    <p className="text-white font-semibold text-xl">{t.name}</p>
                    <p className="text-gray-300 text-md">{t.caseType}</p>
                  </div>
                </div>

                {/* FLOATING REVIEW BOX */}
                <div
                  className="
                    bg-[#2D2D2D] text-white p-5 rounded-md shadow-lg 
                    w-full md:w-[380px]
                    mt-4 
                    md:absolute md:bottom-10 md:left-[45%] lg:left-[50%] xl:left-[52%]
                  "
                >
                  <p className="text-sm leading-relaxed">{t.review}</p>

                  <div className="flex items-center text-yellow-400 text-lg mt-3">
                    ★★★★★
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-5">
          <button className="prev-btn w-10 h-10 flex items-center justify-center rounded-md bg-white shadow hover:bg-gray-100 transition">
            &#10094;
          </button>

          <button className="next-btn w-10 h-10 flex items-center justify-center rounded-md bg-white shadow hover:bg-gray-100 transition">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
