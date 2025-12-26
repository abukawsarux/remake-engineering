import AboutPageSection from "@/components/about/AboutPageSection";
import CallToAction from "@/components/home/CallToAction";

import Video from "@/components/home/Video";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        bgImage="/images/hero/hero-bg.png"
        title="About Our Agency"
        subtitle="We provide accurate digital land surveys and dependable soil testing services using modern technology, helping clients plan, design, and build with confidence. Our team focuses on precision, compliance, and clear reporting to support every stage of development."
      />
      <AboutPageSection />
      <Video />
      <CallToAction />
    </>
  );
};

export default page;
