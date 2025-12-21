"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { memo, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePersonalInjury } from "react-icons/md";
import Reveal from "../motion/Reveal";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGoogle,
  FaBalanceScale,
  FaYelp,
  FaTiktok,
} from "react-icons/fa";

const ScheduleForm = () => {
  const [showTitleOne, setShowTitleOne] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitleOne((prev) => !prev);
    }, 3000); // Switch titles every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div>
      <div className="relative w-full  flex items-center justify-center">
        <Image
          className="absolute inset-0 object-center object-fill  bg-bottom w-full h-full"
          width={1920}
          height={700}
          src={"/images/about/ScheduleForm.png"}
          alt="Bg Image "
        />

        {/* Centered text */}

        <div className="max-w-[1640px] mx-auto px-8  w-full  py-10 lg:py-20 ">
          <div className="relative">
            <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-6">
              <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                <div className="flex flex-col gap-4 max-w-xl w-full  rounded-md">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-start leading-snug md:leading-tight ">
                    Contact Us Today. Get in Touch With Drew, Esq.
                  </h1>
                  <p className="text-base font-normal text-white text-start leading-snug md:leading-tight ">
                    Reach out now for trusted legal advice. Our experienced
                    attorneys are ready to protect your rights and fight for the
                    outcome you deserve.
                  </p>
                  <div className="mt-5">
                    <h3 className="text-xl md:text-2xl  font-semibold text-white text-start leading-snug md:leading-tight">
                      Phone Number
                      <br /> <Link href="#">(813) 444-2817</Link>
                    </h3>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-xl md:text-2xl  font-semibold text-white text-start leading-snug md:leading-tight">
                      Our Social Links
                    </h3>
                    <div className="text-white flex gap-2 mt-4">
                      <Link
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#BA8E2D] flex items-center justify-center"
                        aria-label="Facebook"
                      >
                        <FaFacebookF />
                      </Link>

                      <Link
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#BA8E2D] flex items-center justify-center"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn />
                      </Link>

                      <Link
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#BA8E2D] flex items-center justify-center"
                        aria-label="Instagram"
                      >
                        <FaInstagram />
                      </Link>

                      {/* Avvo (no official icon in react-icons – using FaBalanceScale as the legal symbol) */}
                      <Link
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#BA8E2D] flex items-center justify-center"
                        aria-label="Avvo"
                      >
                        <FaBalanceScale />
                      </Link>

                      {/* Yelp */}
                      <Link
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#BA8E2D] flex items-center justify-center"
                        aria-label="Yelp"
                      >
                        <FaYelp />
                      </Link>

                      {/* Google My Business (using FaGoogle as closest match) */}
                      <Link
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#BA8E2D] flex items-center justify-center"
                        aria-label="Google My Business"
                      >
                        <FaGoogle />
                      </Link>

                      {/* TikTok */}
                      <Link
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#BA8E2D] flex items-center justify-center"
                        aria-label="TikTok"
                      >
                        <FaTiktok />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal tag="h2" y={16} opacityFrom={0}>
                <div className="w-full  bg-[#1A1A1A] p-10 rounded-md">
                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Request a Flexible Schedule
                  </h2>

                  {/* Form */}
                  <form className="flex flex-col gap-4">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full name"
                        className="w-full px-4 py-3 rounded-md bg-white text-black outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-4 py-3 rounded-md bg-white text-black outline-none"
                      />
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        placeholder="Phone number"
                        className="w-full px-4 py-3 rounded-md bg-white text-black outline-none"
                      />
                      <input
                        type="text"
                        placeholder="dd / mm / yyyy"
                        className="w-full px-4 py-3 rounded-md bg-white text-black outline-none"
                      />
                    </div>

                    {/* Row 3 – textarea */}
                    <textarea
                      placeholder="Describe your case or ask question"
                      rows={4}
                      className="w-full px-4 py-3 rounded-md bg-white text-black outline-none"
                    ></textarea>

                    {/* Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#BA8E2D] text-white font-semibold py-4 rounded-md"
                    >
                      Book an Appointment
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ScheduleForm);
