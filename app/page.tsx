import { SiteHeader } from "@/components/mpp/site-header";
import { Hero } from "@/components/mpp/hero";
import { OperatingSystem } from "@/components/mpp/operating-system";
import { Services } from "@/components/mpp/services";
import { GrowthDiagnostic } from "@/components/mpp/growth-diagnostic";
import { Problem } from "@/components/mpp/problem";
import { Founder } from "@/components/mpp/founder";
import { Process } from "@/components/mpp/process";
import { ProofTriad } from "@/components/mpp/proof-triad";
import { TrustStack } from "@/components/mpp/trust-stack";
import { Fit } from "@/components/mpp/fit";
import { Faq } from "@/components/mpp/faq";
import { Insights } from "@/components/mpp/insights";
import { FinalCta } from "@/components/mpp/final-cta";
import { SiteFooter } from "@/components/mpp/site-footer";
import { MotionScenes } from "@/components/mpp/motion-scenes";
import { MiaAssistant } from "@/components/mpp/mia-assistant";

export default function HomePage() {
  return (
    <main>
      <MotionScenes />
      <SiteHeader />
      <MiaAssistant />
      <Hero />
      <OperatingSystem />
      <Services />
      <GrowthDiagnostic />
      <Problem />
      <Founder />
      <Process />
      <ProofTriad />
      <TrustStack />
      <Fit />
      <Insights />
      <Faq />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
