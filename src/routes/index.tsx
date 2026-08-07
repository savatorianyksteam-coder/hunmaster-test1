import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { HubCards } from "@/components/sections/hub-cards";
import { Bento } from "@/components/sections/bento";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Community, CoursesPreview, FinalCta } from "@/components/sections/courses-preview";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HunMaster — курсы венгерского языка" },
      {
        name: "description",
        content:
          "HunMaster — проект о живом венгерском языке: материалы, разборы произношения, Telegram-сообщество и будущие курсы A1–B2.",
      },
      { property: "og:title", content: "HunMaster — курсы венгерского языка" },
      {
        property: "og:description",
        content: "Живой венгерский язык: материалы, разборы и сообщество HunMaster.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <HubCards />
      <Bento />
      <HowItWorks />
      <CoursesPreview />
      <Community />
      <FinalCta />
    </>
  );
}
