import Image from "next/image";
import React from "react";

import Marquee from "react-fast-marquee";

const Partners = () => {
  const partnersData = [
    {
      logo: "/images/partners/partner-1.png",
    },
    {
      logo: "/images/partners/partner-2.png",
    },
    {
      logo: "/images/partners/partner-3.png",
    },
    {
      logo: "/images/partners/partner-4.png",
    },
    {
      logo: "/images/partners/partner-5.png",
    },
    {
      logo: "/images/partners/partner-6.png",
    },
    {
      logo: "/images/partners/partner-1.png",
    },
    {
      logo: "/images/partners/partner-2.png",
    },
    {
      logo: "/images/partners/partner-3.png",
    },
    {
      logo: "/images/partners/partner-4.png",
    },
    {
      logo: "/images/partners/partner-5.png",
    },
    {
      logo: "/images/partners/partner-6.png",
    },
  ];

  return (
    <div className="bg-white px-2 md:px-8 mt-10 md:mt-16">
      <Marquee
        pauseOnHover={true}
        speed={80}
        gradient={true}
        gradientWidth={80}
      >
        <div className="flex  justify-between item-center gap-x-12">
          {partnersData.map((partner, index) => (
            <Image
              key={index}
              src={partner.logo}
              alt={`Partner Logo ${index + 1}`}
              className=""
              width={180}
              height={60}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
