import Image from "next/image";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import GetAllPostData from "@/lib/GetPostData";

function extractTextFromHtml(htmlString: string): string {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "");
}

export default async function Blog() {
  const blogPostData = await GetAllPostData();

  // Limit to maximum 3 published blogs
  const publishedBlogs =
    blogPostData?.data
      ?.filter((blog: any) => blog.published === true)
      ?.slice(0, 3) || [];

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
                Top <span className="text-[#BA8E2D]">Blogs</span> Related To
                Law, Cases & Consulting
              </h2>
            </Reveal>
          </Stagger>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {publishedBlogs.length > 0 ? (
            publishedBlogs.map((blog: any, index: number) => {
              const description = blog.body
                ? extractTextFromHtml(blog.body).slice(0, 120) + "..."
                : blog.description || "Read more about this blog post.";

              return (
                <Reveal key={index} y={100} opacityFrom={0} duration={3}>
                  <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 h-full cursor-pointer hover:scale-105 duration-200">
                    {/* Featured Image */}
                    <Image
                      src={blog.featuredImage?.image?.url}
                      alt={blog.title}
                      width={1000}
                      height={800}
                      className="w-full h-auto object-cover object-top rounded-t-xl"
                    />

                    <div className="p-6 text-start flex flex-col justify-between flex-grow gap-4">
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-[#BA8E2D] duration-300">
                          {blog.title}
                        </h3>

                        <p className="mt-2 text-sm text-gray-600">
                          {blog.date}
                        </p>

                        <p className="mt-3 text-base text-gray-600">
                          {description}
                        </p>
                      </div>

                      <div>
                        <Link
                          href={`/blogs/${blog.slug}`}
                          className="px-6 py-4 bg-[#BA8E2D] text-white inline-flex items-center gap-2 rounded-sm hover:bg-white hover:text-[#BA8E2D] mt-4 duration-300"
                        >
                          Read More <IoIosArrowForward />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })
          ) : (
            <p className="text-gray-500">No blogs found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
