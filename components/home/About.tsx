import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import { IoIosArrowForward, IoMdCheckboxOutline } from "react-icons/io";

export default function About() {
  return (
    <section>
      <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
        <div className="grid lg:grid-cols-2 items-center gap-10 md:gap-6">
          {/* Left Image */}
          <div className=" overflow-hidden">
            <div className="lg:hidden">
              <Reveal x={-100} opacityFrom={0} duration={3}>
                <Image
                  src="/images/about/about.jpg"
                  alt="Our Team"
                  className="w-auto h-auto "
                  width={1000}
                  height={470}
                />
              </Reveal>
            </div>
            <div className="lg:flex items-center gap-2 hidden ">
              <Reveal x={-100} opacityFrom={0} duration={3}>
                <Image
                  src="/images/about/new-folder/McCulloch-Law-1.png"
                  alt="Our Team"
                  className="w-auto h-auto "
                  width={1000}
                  height={470}
                />
              </Reveal>
              <div className="flex flex-col items-center gap-2">
                <Reveal y={-100} opacityFrom={0} duration={3}>
                  <Image
                    src="/images/about/new-folder/McCulloch-Law-2.png"
                    alt="Our Team"
                    className="w-auto h-auto "
                    width={1000}
                    height={470}
                  />{" "}
                </Reveal>
                <Reveal y={100} opacityFrom={0} duration={3}>
                  <Image
                    src="/images/about/new-folder/McCulloch-Law-3.png"
                    alt="Our Team"
                    className="w-auto h-auto "
                    width={1000}
                    height={470}
                  />
                </Reveal>
              </div>
              <div>
                <Reveal x={100} opacityFrom={0} duration={3}>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src="/images/about/new-folder/McCulloch-Law-4.png"
                      alt="Our Team"
                      className="w-auto h-auto "
                      width={1000}
                      height={470}
                    />{" "}
                    <Image
                      src="/images/about/new-folder/McCulloch-Law-5.png"
                      alt="Our Team"
                      className="w-auto h-auto "
                      width={1000}
                      height={470}
                    />{" "}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col">
            <Stagger>
              <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                <p className="text-base font-normal text-[#666666] mb-4 border-b-1 border-primary inline-block">
                  About Us
                </p>
              </Reveal>
              <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  McCulloch Law, P.A.{" "}
                  <p className="text-[#BA8E2D]  font-extrabold">
                    Over 15 Years Of Experience{" "}
                  </p>
                </h2>
              </Reveal>
              <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  McCulloch Law, P.A. proudly serves the Greater Tampa Bay Area,
                  providing trusted legal representation in personal injury and
                  criminal defense. Led by Attorney Drew McCulloch, a former
                  state prosecutor with more than 15 years of experience, the
                  firm is committed to protecting your rights, guiding you
                  through complex legal matters, and helping you work toward the
                  best possible outcome.
                </p>
              </Reveal>
              <Reveal y={100} opacityFrom={0} duration={3}>
                <div className="grid grid-cols-2 gap-4 mt-4 mb-8 ">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#BA8E2D" />
                      Former State Prosecutor
                    </li>
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#BA8E2D" />
                      Experienced Trial Attorney
                    </li>
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#BA8E2D" />
                      Proven Case Results
                    </li>
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#BA8E2D" />
                      Personalized Legal Strategies
                    </li>
                  </ul>

                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#BA8E2D" />
                      24/7 Client Support
                    </li>
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#BA8E2D" />
                      Award-Winning Representation
                    </li>
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#BA8E2D" />
                      Free Consulting
                    </li>
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#BA8E2D" />
                      Strong Court Representation
                    </li>
                  </ul>
                </div>
              </Reveal>
              <Reveal y={100} opacityFrom={0} duration={3}>
                <Link
                  href="/contact"
                  className="px-6 py-4 bg-[#BA8E2D] text-white inline-flex items-center gap-2 rounded-sm hover:bg-yellow-700 mt-4 "
                >
                  Free Consultation <IoIosArrowForward />
                </Link>
              </Reveal>
            </Stagger>
          </div>
        </div>
        <div>
          <Reveal y={100} opacityFrom={0} duration={3}>
            <div className="flex flex-col md:flex-wrap lg:flex-row  mx-auto mt-16 gap-8 justify-center items-center">
              <Image
                src="/images/about/achivements-1.png"
                alt=""
                width={1000}
                height={80}
                className="  max-w-60"
              />
              <Image
                src="/images/about/achivements-2.png"
                alt=""
                width={1000}
                height={80}
                className="  max-w-60"
              />
              <Image
                src="/images/about/achivements-3.png"
                alt=""
                width={1000}
                height={80}
                className="  max-w-60"
              />
              <Image
                src="/images/about/achivements-4.png"
                alt=""
                width={1000}
                height={80}
                className="  max-w-60"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </section>
  );
}
