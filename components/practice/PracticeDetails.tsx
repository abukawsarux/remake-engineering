import { Section } from "lucide-react";
import Image from "next/image";
import React from "react";
import { PersonalInjuryServices } from "@/config/data";
import { notFound } from "next/navigation";

const PracticeDetails = () => {
  return (
    <div>
      <section className="w-full px-8 py-8 md:py-16 bg-white">
        <div className="max-w-[1640px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Parser */}
            <div>
              {/* {servicesDetails?.map((services, index) => (
                <div key={index} className="">
                  <div className="mt-5 text-base">
                    {parse(services?.description)}
                  </div>
                </div>
              ))} */}
            </div>
            <div className="md:col-span-2 flex flex-col items-start gap-5 justify-start mb-8 md:pl-8 w-full">
              <div className="bg-[#F3F3F3] p-6 w-full">
                <div className="w-full  mx-auto">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-3 rounded-md border border-[#D3D3D3] focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  />
                </div>
              </div>

              <div className="bg-[#F3F3F3] p-6 w-full">
                {/* Heading */}
                <h2 className="text-2xl font-bold text-[#333] mb-2">
                  Personal Injury
                </h2>
                <div className="w-24 h-[3px] bg-[#C7A34B] mb-6"></div>{" "}
                {/* Gold underline */}
                {/* Menu Items */}
                <div className="space-y-6">
                  {[
                    "An Overview",
                    "Bicycle Accident",
                    "Truck Accidents",
                    "Motorcycle Accidents",
                    "Uber, UberEats And Lyft Accident",
                    "Slip And Fail",
                    "Premises Liability",
                    "Dog Bites",
                    "Products Liability",
                    "Medical Malpractice",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
        group 
        flex items-center gap-3 cursor-pointer
        transition-all duration-200
      "
                    >
                      <span
                        className="
          text-xl 
          group-hover:text-[#BA8E2D]
          group-active:text-[#BA8E2D]
          transition-colors duration-200
        "
                      >
                        »
                      </span>

                      <p
                        className="
          text-base font-semibold text-[#333]
          group-hover:text-[#BA8E2D]
          group-active:text-[#BA8E2D]
          transition-colors duration-200
        "
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#F3F3F3] p-6 w-full">
                {/* Heading */}
                <h2 className="text-2xl font-bold text-[#333] mb-2">
                  Criminal Injury
                </h2>
                <div className="w-24 h-[3px] bg-[#C7A34B] mb-6"></div>{" "}
                {/* Gold underline */}
                {/* Menu Items */}
                <div className="space-y-6">
                  {[
                    "An Overview",
                    "Bicycle Accident",
                    "Truck Accidents",
                    "Motorcycle Accidents",
                    "Uber, UberEats And Lyft Accident",
                    "Slip And Fail",
                    "Premises Liability",
                    "Dog Bites",
                    "Products Liability",
                    "Medical Malpractice",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
        group 
        flex items-center gap-3 cursor-pointer
        transition-all duration-200
      "
                    >
                      <span
                        className="
          text-xl 
          group-hover:text-[#BA8E2D]
          group-active:text-[#BA8E2D]
          transition-colors duration-200
        "
                      >
                        »
                      </span>

                      <p
                        className="
          text-base font-semibold text-[#333]
          group-hover:text-[#BA8E2D]
          group-active:text-[#BA8E2D]
          transition-colors duration-200
        "
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeDetails;
