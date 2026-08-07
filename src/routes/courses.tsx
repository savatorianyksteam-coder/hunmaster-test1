import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { CoursesPreview, Community } from "@/components/sections/courses-preview";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Курсы венгерского языка HunMaster — скоро" },
      {
        name: "description",
        content:
          "Курсы HunMaster уровней A1–B2 готовятся к запуску. Следите за анонсами в Telegram-канале проекта.",
      },
      { property: "og:title", content: "Курсы HunMaster — скоро" },
      {
        property: "og:description",
        content: "Программы A1–B2 в разработке. Анонсы — в Telegram.",
      },
    ],
  }),
  component: Courses,
});

function Courses() {
  return (
    <>
      <PageHeader
        eyebrow="Курсы"
        title={
          <>
            Курсы <span className="text-gradient-ember">скоро</span>
          </>
        }
        text="Мы готовим программы от первых слов до свободной речи. Здесь появится расписание, форматы и запись."
      />
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <TiltCard intensity={3} className="p-10 sm:p-14">
              <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-primary" /> Страница в разработке
              </span>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                Запуск планируется поэтапно: сначала A1, затем остальные уровни. Все анонсы выходят в
                Telegram-канале — там же откроется ранняя запись.
              </p>
            </TiltCard>
          </Reveal>
        </div>
      </section>
      <CoursesPreview />
      <Community />
    </>
  );
}
