import AboutPageSection from "@/components/about/AboutPageSection";
import ScheduleForm from "@/components/about/ScheduleForm";

import Expect from "@/components/home/Expect";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="About The Attorney"
        subtitle="McCulloch Law, P.A. serves the Greater Tampa Bay Area with steady, reliable support in personal injury and criminal defense cases. Attorney Drew McCulloch is a former state prosecutor with more than 15 years of courtroom experience, and he understands how stressful legal problems can be. He takes the time to explain your options, answer your questions, and guide you through each step so you never feel lost in the process. Whether you’re dealing with an injury or facing a criminal charge, the firm stays focused on protecting your rights and working toward an outcome that truly makes a difference."
      />
      <AboutPageSection />
      <ScheduleForm />
      <Expect />
    </>
  );
};

export default page;
