import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RecentBlog from "@/components/common/RecentBlog";
import ContactBanner from "@/components/contact/ContactBanner";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FaqCta from "@/components/contact/FaqCta";
import Testimonials from "@/components/contact/Testimonials";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactBanner />
      <ContactForm />
      <ContactInfo />
      <FaqCta />
      <Testimonials />
      <RecentBlog />
      <Footer copyright="© Media Mustang 2024 Copyright policy." />
    </>
  );
}
