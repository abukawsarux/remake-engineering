"use client";
import React, { useState } from "react";
import Reveal from "../motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import { TbBrandFacebook } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const teammatesData = [
  {
    id: 1,
    image: "/images/team/juliet-marvenko.png",
    name: `dr. juliet marvenko - "Dr. J"`,
    designation: "Doctor",
    details:
      "My team and I provide a safe, whole-body approach to healing, prioritizing each patient's health and wellness. I am board certified in Florida, Pennsylvania, and Maryland. I hold a Bachelor's degree from the University of Tampa and earned my Doctorate from Life Chiropractic College in Marietta, GA in 1997. I am also a certified Neuromechanical Practitioner, trained by Dr. Gudgel.",
    // socialsMedia: {
    //   facebook: "https://facebook.com",
    //   instagram: "https://instagram.com",
    //   x: "https://x.com",
    // },
  },
  {
    id: 2,
    image: "/images/team/glen-gunderson.png",
    name: `dr. glen gunderson "dr. g"`,
    designation: "Doctor",
    details:
      "I grew up in a small farming community in Wisconsin & later attended the University of Wisconsin-Eau Claire. Afterward, I earned my Doctor of Chiropractic degree from Northwestern College of Chiropractic in 1985. Soon after graduation, I relocated to Tampa, where I've had the privilege of practicing for nearly 40 years. Tampa is also where met my wife, Kat, and we've been happily married for 34 years. We have two children, Lauren & Brandon, and are blessed with two grandchildren, Cody & Leah. I'm proud to call Tampa home and to have helped many in our community experience positive health transformations.",
    // socialsMedia: {
    //   facebook: "https://facebook.com",
    //   instagram: "https://instagram.com",
    //   x: "https://x.com",
    // },
  },
  // {
  //   id: 3,
  //   image: "/images/team/ross-paxia.png",
  //   name: `dr. ross paxia "dr. ross"`,
  //   designation: "Doctor",
  //   details:
  //     "I have had an interesting journey so far! I was born in Portsmouth, VA and moved around a bit - first to Jacksonville, FL and then to Bunnell, FL. I earned my undergraduate degree in Sports Medicine in 2014/2015 and graduated from Palmer College of Chiropractic in 2018. In my free time, I enjoy reading, playing video games, and I am a pretty solid cook! I'm also interested in learning blacksmithing, which is something I'm excited to explore!",
  //   socialsMedia: {
  //     facebook: "https://facebook.com",
  //     instagram: "https://instagram.com",
  //     x: "https://x.com",
  //   },
  // },
  {
    id: 3,
    image: "/images/team/dana1.png",
    name: "dana",
    designation: "Executive Director",
    details:
      "I was born in Pasadena, California and raised in Cleveland, Ohio until moving to Florida at the age of 10. I studied Journalism at High School in Tampa, where I was active in clubs like Quill & Scroll and the National Honors Society. My career began in the food and beverage industry as a corporate trainer for Applebee's, traveling throughout Florida to train staff for new locations. In 2018, I transitioned to the health industry with a mission to help people live healthier lives without reliance on medications. I have 3 children, Elijah, Nevaeh, and Madison. I enjoy sporting events, spending time with family, community outreach, and learning ASL. Dedicated to personal growth, I strive to make a positive impact at home and in the community.",
    // socialsMedia: {
    //   facebook: "https://facebook.com",
    //   instagram: "https://instagram.com",
    //   x: "https://x.com",
    // },
  },
  {
    id: 5,
    image: "/images/team/hunter.jpg",
    name: "Dr. Hunter Furman",
    designation: "Doctor",
    details:
      "Dr. Hunter Furman is from Frederick, Maryland. He loves to see how chiropractic can positively change people’s lives, and it continues to be one of the most rewarding experiences he can be a part of.Dr. Furman is deeply passionate about helping others through chiropractic care and takes pride in witnessing the transformation that comes from improved health and well-being.He earned his Bachelor’s degree in Exercise Science from Towson University and went on to receive his Doctorate of Chiropractic from Palmer College of Chiropractic. His education, combined with his dedication to patient-centered care, allows him to provide compassionate and effective treatment to everyone he serves.",
    // socialsMedia: {
    //   facebook: "https://facebook.com",
    //   instagram: "https://instagram.com",
    //   x: "https://x.com",
    // },
  },
];

type Teammate = (typeof teammatesData)[number];

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<Teammate | null>(null);

  return (
    <>
      <section className="max-w-[1640px] mx-auto md:pt-16 py-8 px-8  gap-12 ">
        <div>
          <Reveal tag="div" y={16} opacityFrom={0}>
            <div className="text-center ">
              <h2 className="text-3xl lg:text-[38px] font-bold text-gray-900">
                Our Team
              </h2>
              <p className="mt-2 text-base text-gray-600 max-w-4xl mx-auto">
                Stop by and meet our amazing team! We are here for you! Our
                friendly staff is dedicated to providing you with the best care
                and service to ensure your comfort throughout your journey.
              </p>
            </div>
          </Reveal>
        </div>
        <div>
          <div className="grid grid-cols-1 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teammatesData.map((member, index) => (
                <Reveal key={member.id} y={30} opacityFrom={0}>
                  <div
                    key={member.id}
                    className={`bg-white shadow-lg rounded-2xl overflow-hidden  flex flex-col  items-center  `}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="  w-full"
                    />

                    <div className="px-6 pt-4 pb-6 ">
                      <h3 className="text-xl uppercase font-semibold text-gray-800">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mt-1 ">
                        {member.designation}
                      </p>
                      <p className="text-gray-600 mt-3 line-clamp-2">
                        {member.details}
                      </p>

                      <div className="flex  items-center justify-between mt-4 lg:mt-6">
                        {/* <div className="flex gap-4 ">
                          <Link
                            href={member.socialsMedia.facebook}
                            target="_blank"
                            className="text-black/80 hover:text-blue-800 p-2 rounded-full bg-[#F2F4F7] text-xl"
                          >
                            <TbBrandFacebook />
                          </Link>
                          <Link
                            href={member.socialsMedia.instagram}
                            target="_blank"
                            className="text-black/80 hover:text-pink-800 p-2 rounded-full bg-[#F2F4F7] text-xl"
                          >
                            <FiInstagram />
                          </Link>
                          <Link
                            href={member.socialsMedia.x}
                            target="_blank"
                            className="text-black/80 hover:text-black p-2 rounded-full bg-[#F2F4F7] text-xl"
                          >
                            <FaXTwitter />
                          </Link>
                        </div> */}
                        <div>
                          <button
                            onClick={() => setSelectedMember(member)}
                            className="underline text-primary text-medium"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl max-w-5xl w-full p-5 lg:p-8 relative shadow-xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-1 right-1 md:top-2  md:right-2 lg:top-4 lg:right-4 text-gray-600 hover:text-red-500 text-2xl lg:text-3xl"
              >
                &times;
              </button>

              {/* Modal Content */}
              <Reveal y={30} opacityFrom={0}>
                <div className="flex flex-col lg:flex-row max-w-5xl w-full gap-6 items-center">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    width={350}
                    height={350}
                    className="rounded-2xl object-cover w-full md:w-1/2"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-3xl font-semibold text-gray-800 uppercase">
                      {selectedMember.name}
                    </h3>
                    <p className="text-primary font-medium mt-1">
                      {selectedMember.designation}
                    </p>
                    <p className="text-gray-700 mt-4">
                      {selectedMember.details}
                    </p>
                    {/* {selectedMember.socialsMedia && (
                      <div className="flex gap-4 mt-6">
                        <Link
                          href={selectedMember.socialsMedia.facebook}
                          target="_blank"
                          className="text-black/80 hover:text-blue-800 p-2 rounded-full bg-[#F2F4F7] text-xl"
                        >
                          <TbBrandFacebook />
                        </Link>
                        <Link
                          href={selectedMember.socialsMedia.instagram}
                          target="_blank"
                          className="text-black/80 hover:text-pink-800 p-2 rounded-full bg-[#F2F4F7] text-xl"
                        >
                          <FiInstagram />
                        </Link>
                        <Link
                          href={selectedMember.socialsMedia.x}
                          target="_blank"
                          className="text-black/80 hover:text-black p-2 rounded-full bg-[#F2F4F7] text-xl"
                        >
                          <FaXTwitter />
                        </Link>
                      </div>
                    )} */}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default TeamPage;
