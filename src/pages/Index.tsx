import Header from "@/components/Header";
import NotificationBar from "@/components/NotificationBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import KeyFigures from "@/components/KeyFigures";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-[100px]">
        <NotificationBar />
        <Hero />
        <Services />
        <About />
        <KeyFigures />
        <Testimonials />
        <Blog />
        <Gallery />
        <Footer />
      </div>
      <FloatingButtons />
    </div>
  );
};

export default Index;
