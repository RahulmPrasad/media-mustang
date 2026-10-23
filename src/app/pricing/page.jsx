import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RecentBlog from "@/components/common/RecentBlog";
import ContactBanner from "@/components/pricing/ContactBanner";
import PaymentTerms from "@/components/pricing/PaymentTerms";
import PricingArea from "@/components/pricing/PricingArea";
import FaqArea from "@/components/pricing/FaqArea";
import SubscribeArea from "@/components/pricing/SubscribeArea";

export const metadata = { title: "Payment terms" };

export default function PricingPage() {
  return (
    <>
      <Header />
      <ContactBanner />
      <PaymentTerms />
      <PricingArea />
      <FaqArea />
      <RecentBlog />
      <SubscribeArea />
      <Footer />
    </>
  );
}
