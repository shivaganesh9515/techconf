import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpeakersSection from "@/components/SpeakersSection";
import TrustedBySection from "@/components/TrustedBySection";
import ScheduleSection from "@/components/ScheduleSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <div className="bg-[#050505] text-white font-sans antialiased selection:bg-white selection:text-black overflow-x-hidden">
      <Header />

      <main>
        <PageTransition>
          <HeroSection />
          <SpeakersSection />
          <TrustedBySection />
          <ScheduleSection />
          <FAQSection />
        </PageTransition>
      </main>

      <FooterSection />
    </div>
  );
}
