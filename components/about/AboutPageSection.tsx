import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import { IoIosArrowForward, IoMdCheckboxOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

export default function AboutPageSection() {
  return (
    <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
      <div>
        <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 text-center max-w-5xl mx-auto lg:mb-10">
            What Makes Attorney Drew{" "}
            <span className="text-[#BA8E2D]  font-extrabold">
              McCulloch Uniquely Qualified
            </span>{" "}
            To Represent You?
          </h2>
        </Reveal>
      </div>

      <div className="grid lg:grid-cols-2 items-start gap-10 md:gap-6">
        {/* Left Image */}
        <div>
          <Reveal y={100} opacityFrom={0} duration={3}>
            {/* <div className="rounded-xl overflow-hidden text-center"> */}
            <div className=" overflow-hidden">
              <div className="lg:hidden">
                <Reveal x={-100} opacityFrom={0} duration={3}>
                  <Image
                    src="/images/about/about.jpg"
                    alt="Our Team"
                    className="w-auto h-auto "
                    width={630}
                    height={470}
                  />
                </Reveal>
              </div>
              {/* <div className="lg:hidden">
                <Reveal x={-100} opacityFrom={0} duration={3}>
                  <Image
                    src="/images/about/about.jpg"
                    alt="Our Team"
                    className="w-auto h-auto "
                    width={1000}
                    height={470}
                  />
                </Reveal>
              </div> */}
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
              <h4 className="text-2xl font-semibold text-center mt-2">
                Drew McCulloch, Esq.
              </h4>
              <div className="flex items-center mt-2 text-yellow-500 mx-auto justify-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </Reveal>
          <Reveal y={100} opacityFrom={0} duration={3}>
            <div className="rounded-xl overflow-hidden text-center mt-12">
              <Image
                src="/images/about/about-2.png"
                alt="Our Team"
                className="w-auto h-auto object-cover rounded-xl"
                width={630}
                height={470}
              />
            </div>
          </Reveal>
        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          <Stagger>
            <Reveal tag="p" y={100} opacityFrom={0.1} duration={3}>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                Drew has handled 1000’s of criminal matters and 100s of trials
                in Florida since 2010. Born and raised in Tampa, Drew attended
                Tampa Preparatory High School and then graduated from New
                College of Florida, The State’s Honors College, in Sarasota.
                During Law School at the University of Florida, Drew interned as
                a student law clerk for both State and Federal Judges in Tampa
                and worked as a certified legal intern at the Hillsborough
                County State Attorney’s Office.
              </p>
            </Reveal>

            <Reveal tag="p" y={100} opacityFrom={0.1} duration={3}>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                Directly after law school, Drew began working as an Assistant
                State Attorney in Tampa with a focus on jury trial litigation.
                As a prosecutor, Drew selected more than 75 juries and tried
                over 100 cases to verdict. Following more than four years with
                the State Attorney’s Office, in 2014, Attorney Drew opened his
                solo practice, McCulloch Law P.A. in Tampa, FL with a focus on 
                <span className="text-[#BA8E2D]">
                  Criminal Defense, DUIs, and Personal Injury
                </span>
                . Today, McCulloch Law P.A. has a focus on assisting victims
                injured by the negligence of others. Drew also brings justice to
                light each day, through his dedicated representation of the
                accused in criminal defense cases.
              </p>
            </Reveal>
            <Reveal tag="p" y={100} opacityFrom={0.1} duration={3}>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                Personal Injury Attorney / Criminal Justice Attorney Drew
                continues to remain active in the local legal community. Drew
                served as an officer and director on the Board of Directors for
                the Hillsborough County Bar Association’s Young Lawyers Division
                from 2016 – 2020. For many years, Drew served on the Tampa
                Preparatory School Alumni Board, as Vice-President and was
                President of the Board in 2021. During his time as President of
                the Tampa Prep Alumni Board, Drew sat on the Tampa Prep Board of
                Trustees. Drew is still very involved with the Tampa Prep
                community.
              </p>
            </Reveal>
            <Reveal tag="p" y={100} opacityFrom={0.1} duration={3}>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                When Drew isn’t in Court, he enjoys spending time with his wife
                and daughters, playing team sports, participating in local
                events as a member of Ye Mystic Krewe of Gasparilla, and giving
                back to the community.
              </p>
            </Reveal>
            <Reveal tag="p" y={100} opacityFrom={0.1} duration={3}>
              <h4 className="text-black text-2xl text-bold leading-relaxed mb-1">
                Education
              </h4>
              <ul className="text-gray-600 text-sm md:text-base space-y-2 list-disc list-inside mb-4">
                <li>
                  Gerald T. Bennett Prosecutor/Public Defender Training Program
                  – (2012)
                </li>
                <li>
                  J.D – University of Florida, Fredric G. Levin College of Law –
                  (2010)
                </li>
                <li>
                  Certified Legal Intern – Hillsborough County State Attorney’s
                  Office, Tampa, Fl – (2010)
                </li>
              </ul>
            </Reveal>
            <Reveal tag="p" y={100} opacityFrom={0.1} duration={3}>
              <h4 className="text-black text-2xl text-bold leading-relaxed mb-1">
                Work Experience
              </h4>
              <ul className="text-gray-600 text-sm md:text-base space-y-2 list-disc list-inside mb-4">
                <li>Managing Partner – McCulloch Law, P.A. – (2014-Present)</li>
                <li>
                  Prosecutor – Hillsborough County State Attorney’s Office,
                  Tampa, Fl – (2010-2014)
                </li>
                <li>
                  Certified Legal Intern – Hillsborough County State Attorney’s
                  Office, Tampa, Fl – (2010)
                </li>
              </ul>
            </Reveal>
            <Reveal tag="p" y={100} opacityFrom={0.1} duration={3}>
              <h4 className="text-black text-2xl text-bold leading-relaxed mb-1">
                License
              </h4>
              <ul className="text-gray-600 text-sm md:text-base space-y-2 list-disc list-inside mb-4">
                <li>State Court FL – Licensed for 15 Years</li>
                <li>Federal Court:</li>
                <li>
                  U.S. District Court, Middle District of Florida for 10 Years
                </li>
              </ul>
            </Reveal>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
