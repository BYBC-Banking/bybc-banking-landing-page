
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AccountTypes from "@/components/AccountTypes";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <AccountTypes />
      <Features />
      <AppPreview />
      <Footer />
    </div>
  );
};

export default Index;
