import ServicesPage from "@/components/help/ServicesPage";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        subtitle="Get Pain Relief Today With Tampa Bays Chiropractor"
        title="Chiropractic Services for"
      />
      <ServicesPage />
    </>
  );
};

export default page;
