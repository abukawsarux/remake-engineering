"use client";
import CallToAction from "@/components/home/CallToAction";
import Video from "@/components/home/Video";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import EquipmentTechnologyPage from "@/components/shared/EquipmentTechnologyPage";
export default function Page() {
  return (
    <>
      <BreadcrumbSection
        bgImage="/images/hero/hero-bg.png"
        title="Explore the Services We Offer in Personal Injury and Criminal Defense"
        subtitle="McCulloch Law, P.A. offers a focused range of services designed to support clients during some of the most challenging moments of their lives."
      />
      <EquipmentTechnologyPage />
      <Video />
      <CallToAction />
    </>
  );
}
