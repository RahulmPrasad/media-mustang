import HeaderHome from "@/components/layout/HeaderHome";
import CallToAction from "@/components/layout/CallToAction";
import FooterHome from "@/components/layout/FooterHome";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Banner from "@/components/home/Banner";
import VideoArea from "@/components/home/VideoArea";
import BrandArea from "@/components/home/BrandArea";
import ServiceArea from "@/components/home/ServiceArea";
import WorkingProcess from "@/components/home/WorkingProcess";
import Appointment from "@/components/home/Appointment";
import CounterUp from "@/components/home/CounterUp";
import PricingArea from "@/components/home/PricingArea";
import ClientFeedback from "@/components/home/ClientFeedback";
import BlogArea from "@/components/home/BlogArea";

export default function HomePage() {
  return (
    <>
      <HeaderHome />
      <Banner />
      <VideoArea />
      <BrandArea />
      <ServiceArea />
      <WorkingProcess />
      <Appointment />
      <CounterUp />
      <PricingArea />
      <ClientFeedback />
      <BlogArea />
      <CallToAction />
      <FooterHome />
      <ScrollProgress />
    </>
  );
}
