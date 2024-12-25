import { Navigation } from '@/components/navigation';
import { ProfileHeader } from '@/components/profile-header';
import { SplitHero } from '@/components/sections/split-hero';
import { VideoSection } from '@/components/sections/video-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { AboutSection } from '@/components/sections/about-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { BlogSection } from '@/components/sections/blog-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProfileHeader />
      <SplitHero />
      <AboutSection />
      <VideoSection />
      <SkillsSection />
      <GallerySection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}