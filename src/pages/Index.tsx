
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import TrustpilotReviews from "@/components/TrustpilotReviews";
import AccountTypes from "@/components/AccountTypes";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0f0f23] text-white">
      <Banner />
      <Header />
      <Hero />
      <TrustpilotReviews />
      <AccountTypes />
      <Features />
      <AppPreview />
      <Footer />
    </div>
  );
};

export default Index;
