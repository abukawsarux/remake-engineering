"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

import Reveal from "@/components/motion/Reveal";

const Video = () => {
  const [showTitleOne, setShowTitleOne] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitleOne((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative w-full flex items-center justify-center">
        <Image
          className="absolute inset-0 object-center object-cover bg-bottom w-full h-full"
          width={1920}
          height={700}
          src="/images/video/video-section.png"
          alt="Bg Image"
        />

        {/* Centered text */}
        <div className="max-w-[1640px] mx-auto px-8 w-full py-10 lg:py-20">
          <div className="relative">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Video play button */}
              <div className="relative w-full flex justify-center items-center">
                <div
                  onClick={() => setOpenModal(true)}
                  className="relative w-16 lg:w-24 h-16 lg:h-24 flex justify-center items-center cursor-pointer"
                >
                  <span className="absolute inset-0 rounded-full bg-[#BA8E2D] animate-ping-strong"></span>
                  <span className="absolute inset-0 rounded-full bg-[#BA8E2D]"></span>
                  <FaPlay size={30} color="#fff" className="relative z-10" />
                </div>
              </div>

              {/* Text section */}
              <div className="flex flex-col gap-4 max-w-3xl w-full bg-[#BA8E2D] p-10 rounded-md">
                <Reveal y={100} opacityFrom={0} duration={3}>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug md:leading-tight">
                    We’re here to defend your rights and help you resolve your
                    legal issues the right way.
                  </h1>
                </Reveal>

                <Reveal y={100} opacityFrom={0} duration={3}>
                  <p className="text-base font-normal text-white leading-snug md:leading-tight">
                    Clients often come to me during some of the hardest moments
                    of their lives. I focus on listening, understanding what
                    they’re facing, and giving them clear guidance they can
                    trust. Every case deserves careful preparation and honest
                    communication.
                  </p>
                </Reveal>

                <Reveal y={100} opacityFrom={0} duration={3}>
                  <div className="mt-5">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-snug md:leading-tight">
                      Est. By <br /> Drew McCulloch, Esq.
                    </h3>
                    <p className="text-base font-normal text-white leading-snug md:leading-tight mt-3">
                      Personal Injury Attorney / Criminal Defense Attorney
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[9999]"
            onClick={() => setOpenModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-black rounded-lg overflow-hidden shadow-xl w-[90%] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-3 right-3 text-white text-3xl leading-none z-20"
              >
                ×
              </button>

              {/* YOUTUBE VIDEO */}
              <iframe
                className="w-full h-[300px] md:h-[450px]"
                src="https://www.youtube.com/embed/DVuPlw-59N8?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(Video);
