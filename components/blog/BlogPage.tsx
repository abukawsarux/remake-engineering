"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

// --- fallback for UI when API has no data ---
const fallbackBlogs = [
  {
    title: "What to Do After Being Arrested in Florida",
    date: "23 Sep 2024",
    description:
      "Learn the critical steps to take immediately after being arrested in Florida to protect your rights and strengthen your defense.",
    image: "/images/blogs/arrested-in-florida.jpg",
    slug: "what-to-do-after-being-arrested-in-florida",
  },
  {
    title:
      "How a Former Prosecutor’s Experience Can Strengthen Your Criminal Defense",
    date: "22 Sep 2024",
    description:
      "See how insider knowledge helps build stronger, smarter defense strategies.",
    image: "/images/blogs/former-prosecutor-defense.jpg",
    slug: "how-prosecutor-experience-strengthens-defense",
  },
  {
    title: "What To Do After a Car Accident in Florida",
    date: "21 Sep 2024",
    description:
      "Learn the right steps after a crash to protect your safety and legal rights.",
    image: "/images/blogs/car-accident-in-florida.jpg",
    slug: "what-to-do-after-car-accident-in-florida",
  },
];

export default function BlogPage({ blogPost }: { blogPost: any }) {
  // Use your API data → fallback static blogs
  const posts =
    blogPost?.data
      ?.filter((p: any) => p.published)
      ?.map((p: any) => ({
        title: p.title,
        description: p.excerpt || "",
        date: new Date(p.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        image: p.featuredImage?.image?.url,
        slug: p.slug,
      })) || fallbackBlogs;

  return (
    <section className="w-full px-8 py-8 md:py-16">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 max-w-3xl mx-auto">
          <Stagger>
            <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
              <p className="text-base font-normal text-[#666666] mb-4 border-b-1 border-primary inline-block">
                Latest Blogs
              </p>
            </Reveal>
            <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
              <h2 className="text-3xl md:text-4xl font-bold text-black text-center">
                Top&nbsp;
                <span className="text-[#BA8E2D]">Blogs&nbsp;</span> Related To
                Law, Cases & Consulting
              </h2>
            </Reveal>
          </Stagger>
        </div>

        {/* blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((blog: any, index: number) => (
            <Reveal key={index} y={100} opacityFrom={0} duration={3}>
              <Link href={`/blogs/${blog.slug}`} className="block h-full group">
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition flex flex-col text-center border border-gray-100 h-full cursor-pointer hover:bg-[#BA8E2D] hover:scale-105 transform duration-200">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={224}
                    className="w-full  object-cover rounded-t-xl"
                  />

                  <div className="p-6 text-start flex flex-col flex-grow gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white duration-300">
                        {blog.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-600 group-hover:text-white/90 duration-300">
                        {blog.date}
                      </p>

                      <p className="mt-3 text-base text-gray-600 group-hover:text-white/90 duration-300 line-clamp-3">
                        {blog.description}
                      </p>
                    </div>

                    <div>
                      <span className="px-6 py-3 bg-[#BA8E2D] text-white inline-flex items-center gap-2 rounded-sm group-hover:bg-white group-hover:text-[#BA8E2D] mt-4 transition">
                        Read More <IoIosArrowForward />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
