import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import GetAllPostData from "@/lib/GetPostData";

// ---------- Styling ----------
const css = `
 h1, h2, p, br, nav {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: normal;
}
h1 { font-size: 40px; }
h2 { font-size: 25px; }
p { font-size: 17px; padding: 6px 0; }
ul { list-style-type: disc; }
`;

// ---------- Helpers ----------
function extractTextFromHtml(htmlString: string): string {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "");
}

function truncateText(text: string, wordLimit: number): string {
  const words = text.split(/\s+/);
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
}

// ---------- SEO / OpenGraph ----------
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blogPostData = await GetAllPostData();

  const blog = blogPostData?.data?.find(
    (item: any) => item.slug === params.slug
  );

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }

  const plain = extractTextFromHtml(blog.body || "");
  const shortDescription = truncateText(plain, 120);

  return {
    title: blog.title,
    description: shortDescription,
    openGraph: {
      title: blog.title,
      description: shortDescription,
      images: blog?.featuredImage?.image?.url,
      url: `https://www.medicalweightlosstampa.com/blog/${blog.slug}`,
      type: "article",
      site_name: "medicalweightlosstampa.com",
    },
  };
}

// ---------- MAIN PAGE ----------
export default async function Page({ params }: { params: { slug: string } }) {
  const blogPostData = await GetAllPostData();

  // FIXED: Use .find(), not .filter()
  const blog = blogPostData?.data?.find(
    (item: any) => item.slug === params.slug
  );

  const postDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  if (!blog) {
    return (
      <>
        <style>{css}</style>
        <BreadcrumbSection
          title="Blogs"
          subtitle="Find informative posts written to help you stay informed and better understand the legal landscape, and more."
        />
        <div className="max-w-[1640px] mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900">No Blog Found</h2>
          <p className="text-gray-600 mt-4">
            The blog you are looking for does not exist.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{css}</style>

      <BreadcrumbSection
        title="Blogs"
        subtitle="Find informative posts written to help you stay informed and better understand the legal landscape, and more."
      />
      <div>
        <div className="max-w-[1640px] mx-auto px-8  w-full  py-10  ">
          {" "}
          <div className="grid gap-12 mb-10 grid-col-1 sm:grid-cols-3 max-w-[1640px] mx-auto">
            {/* ------- MAIN CONTENT ------- */}
            <div className="col-span-2">
              <p className="text-sm italic text-black mt-4">{blog.category}</p>

              <Image
                width={1000}
                height={500}
                src={blog.featuredImage?.image?.url}
                alt={blog.featuredImage?.altText}
                className="w-full h-auto rounded-2xl mt-4"
              />

              <p className="text-sm italic text-black mt-4">
                {postDate(blog.createdAt)}
              </p>

              <h1 className="text-2xl md:text-4xl font-bold text-[#1B2639] my-6">
                {blog.title}
              </h1>

              <div className="mt-4 text-md">{parse(blog.body)}</div>
            </div>

            {/* ------- SIDEBAR (Recent Blogs) ------- */}
            <div className="col-span-2 sm:col-span-1 h-full md:h-[1000px] overflow-y-scroll p-3 rounded-lg">
              <h2 className="font-medium text-4xl text-black border-b-2 pb-4 mb-6">
                Recent Blogs
              </h2>

              {blogPostData?.data
                ?.filter((b: any) => b.published)
                .map((item: any, i: number) => (
                  <Link
                    key={i}
                    href={`/blogs/${item.slug}`}
                    className="flex items-start gap-3 ps-3 py-3 shadow bg-white my-3"
                  >
                    <Image
                      width={120}
                      height={120}
                      src={item.featuredImage?.image?.url}
                      alt={item.featuredImage?.altText}
                      className="w-[100px] h-auto rounded"
                    />
                    <div className="font-bold text-black line-clamp-2">
                      {item.title}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
