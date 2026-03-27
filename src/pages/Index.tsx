import Header from "@/components/Header";
import NotificationBar from "@/components/NotificationBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import KeyFigures from "@/components/KeyFigures";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-[88px]">
        <NotificationBar />
        <Hero />
        <KeyFigures />
        <Services />
        <About />
        <Testimonials />
        <Partners />
        <CTA />
        <Footer />
      </div>
      <FloatingButtons />
    </div>
  );
};

export default Index;
