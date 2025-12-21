import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import { IoIosArrowForward, IoMdCheckboxOutline } from "react-icons/io";

export default function Expect() {
  return (
    <section>
      <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
        <div className="border-b-1 border-[#D4D4D4]   pb-4 mb-8 mx-auto w-full">
          <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center ">
              What You Can Expect from
              <span className="text-[#BA8E2D]  font-extrabold ms-3">
                McCulloch Law, P.A.
              </span>
            </h2>
          </Reveal>
        </div>
        <div className="grid lg:grid-cols-2 items-start gap-10 md:gap-6">
          {/* Left Image */}
          <Reveal y={20} opacityFrom={0}>
            <div className="rounded-xl overflow-hidden">
              <Reveal y={100} opacityFrom={0} duration={3}>
                <Image
                  src="/images/expert/expert-section.png"
                  alt="Our Team"
                  className="w-auto h-auto object-cover rounded-xl"
                  width={420}
                  height={250}
                />
              </Reveal>
            </div>
          </Reveal>

          {/* Right Content */}
          <div className="flex flex-col">
            <Stagger>
              <Reveal tag="p" y={100} opacityFrom={0.1} duration={3}>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  Choosing the right attorney can feel overwhelming, so we focus
                  on giving you a clear understanding of how we work and what
                  you can expect from our team. Our goal is to make the process
                  straightforward and help you feel confident in every step
                  ahead.
                </p>
              </Reveal>
              <Reveal tag="p" y={100} opacityFrom={0.1} duration={3}>
                <h3 className="text-black text-base md:text-lg font-semibold leading-relaxed mb-4">
                  What Sets McCulloch Law, P.A. Apart
                </h3>
              </Reveal>
              <Reveal tag="p" y={100} opacityFrom={0.1} duration={4}>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  At McCulloch Law, P.A., we provide skilled and personalized
                  legal representation led by former prosecutor Drew McCulloch.
                  With over a decade of experience, we understand how to build
                  strong cases and deliver results in both personal injury and
                  criminal defense matters.
                </p>
              </Reveal>
              <Reveal tag="p" y={100} opacityFrom={0.1} duration={5}>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  We pride ourselves on honest communication, 24/7 availability,
                  and genuine care for every client. From start to finish, we’re
                  committed to protecting your rights and guiding you with
                  confidence through every step of the legal process.
                </p>
              </Reveal>
            </Stagger>
          </div>
        </div>
      </section>
    </section>
  );
}
