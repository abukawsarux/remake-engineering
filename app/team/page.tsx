import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import FbReviewSection from "@/components/team/FbReviewSection";
import Instagram from "@/components/team/InstagramSection";
import TeamPage from "@/components/team/TeamPage";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        subtitle="Get Pain Relief Today With Tampa Bays Chiropractor"
        title="Tampa's Best"
      />
      <TeamPage />
      <Instagram />
      <FbReviewSection />
    </>
  );
};

export default page;
