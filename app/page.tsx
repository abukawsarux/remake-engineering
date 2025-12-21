import About from "@/components/home/About";
// import Blog from "@/components/shared/Blog";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/shared/Testimonials";
import Expect from "@/components/home/Expect";
import Video from "@/components/home/Video";
import Blog from "@/components/shared/Blog";
import CaseSection from "@/components/home/CaseSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CaseSection />
      <Expect />
      <Video />
      <Blog />
    </> 
  );
}
