import { SiteHeader } from "@/components/mpp/site-header";
import { Hero } from "@/components/mpp/hero";
import { OperatingSystem } from "@/components/mpp/operating-system";
import { Services } from "@/components/mpp/services";
import { GrowthDiagnostic } from "@/components/mpp/growth-diagnostic";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <OperatingSystem />
      <Services />
      <GrowthDiagnostic />
    </main>
  );
}
