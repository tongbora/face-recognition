import { DecisionSection } from "./face-recognition/decision-section";
import { FunctionsSection } from "./face-recognition/functions-section";
import { HeroSection } from "./face-recognition/hero-section";
import { OverviewSection } from "./face-recognition/overview-section";
import { SetupSection } from "./face-recognition/setup-section";
import { SiteNav } from "./face-recognition/site-nav";
import { StackSection } from "./face-recognition/stack-section";
import { WorkflowSection } from "./face-recognition/workflow-section";

export function FaceRecognitionPresentation() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f7f5] text-stone-950">
      <SiteNav />
      <HeroSection />
      <OverviewSection />
      <StackSection />
      <WorkflowSection />
      <DecisionSection />
      <FunctionsSection />
      <SetupSection />
    </main>
  );
}
