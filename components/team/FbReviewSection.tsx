"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

const fbReviewData = [
  {
    id: 1,
    image: "/images/review/Christy-Tatum.png",
    name: "Christy Tatum",
    date: "5/2/2025",
    review:
      "Dr. G, Dr. Ross, Hunter, Jane, Dana, Kaitlyn, & Candice all provide such great care & a great experience! I also appreciate the text reminders for my appointments and the clinics ability to be flexible if I need to shift one of my recurring appointments!",
    recommends: "https://www.facebook.com/share/p/1786h7YFnr/",
  },
  {
    id: 2,
    image: "/images/review/Yescenia-Niña-Torres.png",
    name: "John Smith",
    date: "4/25/2025",
    review:
      "I can't say enough about this team! Their communication,  caring, attentiveness is phenomenal. They go above and beyond to make sure I am comfortable and understand everything that is going on with my treatment. A++",
    recommends: "https://www.facebook.com/share/p/19gXmyMcA9/",
  },
  {
    id: 3,
    image: "/images/review/Tina-Cecchini-Rhodes.png",
    name: "Sarah Johnson",
    date: "3/15/2025",
    review:
      "Absolutely life-changing! My husband and I have lost over 100 pounds together in just the last 8 months, all thanks to Jachimek’s incredible guidance, support, and expertise. From the very beginning, they tailored a plan that fit our lifestyle, keeping us motivated and accountable every step of the way. Their knowledge of nutrition, fitness, and overall wellness is unmatched, and they truly care about their clients’ success. Not only do we look and feel better than ever, but we’ve also gained a sustainable, healthy lifestyle that we can maintain long-term. If you’re looking for someone who will push you, encourage you, and celebrate your wins with you, Jachimek is the one! We can’t recommend them highly enough—five stars isn’t enough!",
    recommends: "https://www.facebook.com/share/p/1ZRZPUsFkC/",
  },
  {
    id: 4,
    image: "/images/review/Pamela-Busonick.png",
    name: "Robert Brown",
    date: "2/2/2025",
    review: "Great staff highly recommend",
    recommends:
      "https://www.facebook.com/pamela.busonick.2025/posts/pfbid02TQSaSFnGSsmjAgnWVkYqSQmNmS2tPqePUPmDseqS12KmFxnBkb6SAz21HZBPUp6ol",
  },
];

export default function FbReviewSection() {
  return (
    <section className="w-full px-8 py-8 md:py-16 bg-[#F9FAFB]">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Stagger>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <h2 className="text-3xl lg:text-[38px] font-bold text-gray-900">
                Facebook Reviews
              </h2>
            </Reveal>
            <Reveal tag="p" y={12} opacityFrom={0.1}>
              <p className="mt-2 text-gray-600 max-w-xl mx-auto">
                Jachimek Chiropractic & Wellness Center —{" "}
                <strong className="text-primary">Highly Recommended</strong> by
                our happy patients.
              </p>
            </Reveal>
          </Stagger>
        </div>

        {/* Reviews Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          // autoplay={{
          //   delay: 0,
          //   reverseDirection: false,
          //   pauseOnMouseEnter: true,
          // }}

          speed={5000}
          loop
          freeMode
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            // 1280: { slidesPerView: 4 },
          }}
          // className="cursor-pointer"
        >
          {fbReviewData.map((review) => (
            <Reveal key={review.id} y={30} opacityFrom={0}>
              <SwiperSlide key={review.id}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 p-6 flex flex-col justify-between h-full transition">
                  {/* Top Section */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          src={review.image}
                          alt={review.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {review.name}
                          </h3>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      <FaFacebook className="text-[#1877F2] text-2xl" />
                    </div>

                    <hr className="my-4 border-gray-200" />

                    {/* Review text */}
                    <p className="text-gray-700 text-[15px] leading-relaxed line-clamp-2 min-h-[3rem]">
                      {review.review}
                    </p>
                  </div>

                  <hr className="my-4 border-gray-200" />

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#E63946] font-medium">
                      <Image
                        src="/images/review/recommendation.png"
                        alt="Thumbs Up"
                        width={18}
                        height={18}
                      />
                      <span>Recommends</span>
                    </div>
                    <Link
                      href={review.recommends}
                      target="_blank"
                      className="text-primary font-medium hover:underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Reveal>
          ))}
        </Swiper>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          // autoplay={{
          //   delay: 0,
          //   reverseDirection: false,
          //   pauseOnMouseEnter: true,
          // }}

          speed={5000}
          loop
          freeMode
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            // 1280: { slidesPerView: 4 },
          }}
          // className="cursor-pointer"
        >
          {fbReviewData.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 p-6 flex flex-col justify-between h-full transition mt-6">
                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {review.name}
                        </h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <FaFacebook className="text-[#1877F2] text-2xl" />
                  </div>

                  <hr className="my-4 border-gray-200" />

                  {/* Review text */}
                  <p className="text-gray-700 text-[15px] leading-relaxed line-clamp-2 min-h-[3rem]">
                    {review.review}
                  </p>
                </div>

                <hr className="my-4 border-gray-200" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#E63946] font-medium">
                    <Image
                      src="/images/review/recommendation.png"
                      alt="Thumbs Up"
                      width={18}
                      height={18}
                    />
                    <span>Recommends</span>
                  </div>
                  <Link
                    href={review.recommends}
                    target="_blank"
                    className="text-primary font-medium hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Reviews Slider */}
      </div>
    </section>
  );
}
