import FeaturedButtons from "@/components/HomePageComponents/FeaturedButtons";
import { Hero } from "@/components/HomePageComponents/Hero";
import { Queries } from "@/components/HomePageComponents/queries/Queries";
import { Deals } from "@/components/HomePageComponents/Deals";
import { Trips } from "@/components/HomePageComponents/Trips";
import { CustomizedSchedule } from "@/components/HomePageComponents/CustomizedSchedule";
import { Newsletter } from "@/components/HomePageComponents/NewsLetter";
import { Footer } from "@/components/HomePageComponents/footer/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Hero />
      <FeaturedButtons />
      <div className="flex items-center justify-center">
        <Queries />
      </div>
      <Deals />
      <Trips />
      <CustomizedSchedule />
      <Newsletter />
      <Footer />
    </div>
  );
}
