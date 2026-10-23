import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BreadCrumb from "@/components/blog/BreadCrumb";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <Header />
      <BreadCrumb />
      <BlogGrid />
      <Footer copyright="© 2024 Media Mustang Copyright Policy" />
    </>
  );
}
