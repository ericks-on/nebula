'use client'
import AboutUs from "@/components/about";
import ContactPage from "@/components/contacts";
import FounderStory from "@/components/founder";
import Landing from "@/components/landing";
import DataScienceContainer from "@/components/services";
import TestimonialSection from "@/components/testimonial";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Landing />
        <AboutUs />
        <DataScienceContainer />
        <FounderStory />
        <TestimonialSection />
        <ContactPage />
        <Footer />
      </main>
    </div>
  
  );
}
