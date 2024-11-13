import Hero from "@/components/Hero";
import FeaturedVans from "@/components/FeaturedVans";
import ContactInfo from "@/components/ContactInfo";
import DeliverySection from "@/components/DeliverySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <FeaturedVans />
      <DeliverySection />
      <ContactInfo />
    </div>
  );
}