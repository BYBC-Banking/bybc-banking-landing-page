
import Hero from "@/components/Hero";
import AccountTypes from "@/components/AccountTypes";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0f0f23] text-white">
      <Hero />
      <AccountTypes />
      <Features />
      <AppPreview />
      <Footer />
    </div>
  );
};

export default Index;
