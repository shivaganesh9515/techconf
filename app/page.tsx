import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";
import TrustedBy from "@/components/TrustedBy";
import Schedule from "@/components/Schedule";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="max-w-[1400px] mx-auto px-6">
          <Speakers />
        </div>
        <TrustedBy />
        <Schedule />
        <FAQ />
      </main>
      <FooterCTA />
    </>
  );
}