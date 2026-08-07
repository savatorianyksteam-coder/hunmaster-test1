import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";
import { Bento } from "@/components/sections/bento";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FinalCta } from "@/components/sections/courses-preview";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Возможности HunMaster — материалы и практика" },
      {
        name: "description",
        content:
          "Что даёт HunMaster: разборы грамматики, произношение, подборки слов, понятный прогресс A1–B2 и живое сообщество.",
      },
      { property: "og:title", content: "Возможности HunMaster" },
      {
        property: "og:description",
        content: "Разборы, произношение, материалы и сообщество для изучения венгерского.",
      },
    ],
  }),
  component: Features,
});

function Features() {
  return (
    <>
      <PageHeader
        eyebrow="Возможности"
        title={
          <>
            Всё, что нужно для <span className="text-gradient-ember">старта</span>
          </>
        }
        text="Материалы, произношение, грамматика и практика — собраны в одном месте и объяснены простым языком."
      />
      <Bento />
      <HowItWorks />
      <FinalCta />
    </>
  );
}
