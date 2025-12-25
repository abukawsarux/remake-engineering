import About from "@/components/home/About";
// import Blog from "@/components/shared/Blog";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/shared/Testimonials";
import Expect from "@/components/home/Expect";
import Video from "@/components/home/Video";
import Blog from "@/components/shared/Blog";
import EquipmentTechnology from "@/components/home/EquipmentTechnology";
import OurProjects from "@/components/home/OurProjects";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <EquipmentTechnology />
      <OurProjects />
      <Testimonials />

      <Video />
      <CallToAction />
    </>
  );
}
