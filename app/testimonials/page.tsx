import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import GetAllPostData from "@/lib/GetPostData";
import React from "react";
import BlogPage from "@/components/blog/BlogPage";
import Testimonials from "@/components/testimonials/Testimonials";
import Expect from "@/components/home/Expect";

const page = async () => {
  return (
    <div>
      <BreadcrumbSection
        title="Testimonial"
        subtitle="We’ve had the privilege of helping many clients through their legal matters, and here is what they have to say about their experience. Hear from our clients."
      />
      <Testimonials />
      <div className="bg-[#F9F9F9]">
        <Expect />
      </div>
    </div>
  );
};

export default page;
