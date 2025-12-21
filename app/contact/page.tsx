import ContactForm from "@/components/contact/ContactForm";
import ContactVideo from "@/components/contact/ContactVideo";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="Contact Us"
        subtitle="Connect with an attorney who’s ready to guide you, answer your questions, and help you understand the best path forward."
      />
      <ContactForm />
      <ContactVideo />
    </>
  );
};

export default page;
