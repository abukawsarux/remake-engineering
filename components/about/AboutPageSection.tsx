import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import { IoIosArrowForward, IoMdCheckboxOutline } from "react-icons/io";
import Partners from "../home/Partners";

export default function AboutPageSection() {
  return (
    <section>
      <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
        <div className="grid lg:grid-cols-2 items-center gap-10 md:gap-6">
          {/* Left Image */}
          <div className=" overflow-hidden">
            <div className="lg:hidden">
              <Reveal x={-100} opacityFrom={0} duration={3}>
                <Image
                  src="/images/about/about.png"
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
                  src="/images/about/new-folder/part-1.png"
                  alt="Our Team"
                  className="w-auto h-auto "
                  width={1000}
                  height={470}
                />
              </Reveal>
              <div className="flex flex-col items-center gap-2">
                <Reveal y={-100} opacityFrom={0} duration={3}>
                  <Image
                    src="/images/about/new-folder/part-2.png"
                    alt="Our Team"
                    className="w-auto h-auto "
                    width={1000}
                    height={470}
                  />{" "}
                </Reveal>
                <Reveal y={100} opacityFrom={0} duration={3}>
                  <Image
                    src="/images/about/new-folder/part-3.png"
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
                      src="/images/about/new-folder/part-4.png"
                      alt="Our Team"
                      className="w-auto h-auto "
                      width={1000}
                      height={470}
                    />{" "}
                    <Image
                      src="/images/about/new-folder/part-5.png"
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
                  Remake Engineering{" "}
                  <p className="text-[#FC860A] ">
                    Precision Survey & Soil Testing Experts
                  </p>
                </h2>
              </Reveal>

              <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  Remake Engineering is a professional RTK Survey, Digital Land
                  Survey, and Soil Testing agency providing accurate measurement
                  and engineering solutions for residential, commercial, and
                  government projects. We combine modern survey technology with
                  practical field expertise to deliver reliable and precise
                  results.
                </p>
              </Reveal>

              <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  Our team is committed to producing high-accuracy survey data,
                  clear digital reports, and dependable soil analysis that help
                  clients plan, design, and build with confidence.
                </p>
              </Reveal>

              <Reveal y={100} opacityFrom={0} duration={3}>
                <div className="grid grid-cols-2 gap-4 mt-4 mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#FC860A" />
                      RTK & GNSS-Based Survey Technology
                    </li>
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#FC860A" />
                      Experienced Survey Engineers
                    </li>
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#FC860A" />
                      High-Accuracy Digital Mapping
                    </li>
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#FC860A" />
                      Modern Survey Equipment
                    </li>
                  </ul>

                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#FC860A" />
                      Soil Test & Geotechnical Expertise
                    </li>
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#FC860A" />
                      Government & Private Project Experience
                    </li>
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#FC860A" />
                      Authority-Approved Survey Reports
                    </li>
                    <li className="flex items-center gap-2">
                      <IoMdCheckboxOutline size={24} color="#FC860A" />
                      Client-Focused Professional Service
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal y={100} opacityFrom={0}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-[#FC860A] text-white hover:bg-orange-600 w-fit"
                >
                  Request a Survey <IoIosArrowForward />
                </Link>
              </Reveal>
            </Stagger>
          </div>
        </div>
        <div>
          <Reveal y={100} opacityFrom={0} duration={3}>
            <Partners />
          </Reveal>
        </div>
      </section>
    </section>
  );
}
