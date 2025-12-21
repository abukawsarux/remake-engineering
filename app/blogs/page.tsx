import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import GetAllPostData from "@/lib/GetPostData";
import BlogPage from "@/components/blog/BlogPage";

export default async function Page() {
  const blogPostData = await GetAllPostData();

  return (
    <div>
      <BreadcrumbSection
        title="Blogs"
        subtitle="Find informative posts written to help you stay informed and better understand the legal landscape, and more."
      />

      {/* Blog listing component */}
      <BlogPage blogPost={blogPostData} />
    </div>
  );
}
