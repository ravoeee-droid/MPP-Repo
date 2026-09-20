import { SiteHeader } from "@/components/mpp/site-header";
import { Hero } from "@/components/mpp/hero";
import { OperatingSystem } from "@/components/mpp/operating-system";
import { Services } from "@/components/mpp/services";
import { GrowthDiagnostic } from "@/components/mpp/growth-diagnostic";
import { Problem } from "@/components/mpp/problem";
import { Founder } from "@/components/mpp/founder";
import { Process } from "@/components/mpp/process";
import { ProofTriad } from "@/components/mpp/proof-triad";
import { MotionScenes } from "@/components/mpp/motion-scenes";

export default function HomePage() {
  return (
    <main>
      <MotionScenes />
      <SiteHeader />
      <Hero />
      <OperatingSystem />
      <Services />
      <GrowthDiagnostic />
      <Problem />
      <Founder />
      <Process />
      <ProofTriad />
    </main>
  );
}
