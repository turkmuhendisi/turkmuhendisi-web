import IntroSection from "./home-page/sections/IntroSection";
import PartnerStripSection from "./home-page/sections/PartnerStripSection";
import ServicesSection from "./home-page/sections/ServicesSection";
import FeaturedProjectsSection from "./home-page/sections/FeaturedProjectsSection";
import EngineeringApproachSection from "./home-page/sections/EngineeringApproachSection";
import ProcessSection from "./home-page/sections/ProcessSection";
import TechStackSection from "./home-page/sections/TechStackSection";
import PostSection from "./home-page/sections/PostSection";
import ContactCTASection from "./home-page/sections/ContactCTASection";
import type { Post } from "@/src/data/posts";

interface HomePageProps {
  recentPosts: Post[];
}

export default function HomePage({ recentPosts }: HomePageProps) {
  return (
    <div className="bg-black min-h-screen">
      <IntroSection />
      <PartnerStripSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <EngineeringApproachSection />
      <ProcessSection />
      <TechStackSection />
      <PostSection posts={recentPosts} />
      <ContactCTASection />
    </div>
  );
}
