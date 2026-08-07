import { createFileRoute } from "@tanstack/react-router";
import { Brain, Languages, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { Parliament } from "@/components/brand/parliament";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О проекте HunMaster — венгерский язык понятно" },
      {
        name: "description",
        content:
          "Кто мы и зачем создали HunMaster: подход к венгерскому языку, принципы объяснения и планы проекта.",
      },
      { property: "og:title", content: "О проекте HunMaster" },
      {
        property: "og:description",
        content: "Подход HunMaster к венгерскому языку: логика вместо заучивания.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  { icon: Brain, t: "Ясность", d: "Каждое правило объясняем так, чтобы его больше не пришлось перечитывать." },
  { icon: Languages, t: "Живой язык", d: "Только то, что действительно говорят в Будапеште сегодня." },
  { icon: MessageCircle, t: "Поддержка", d: "Вопросы не остаются без ответа — сообщество рядом." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="О проекте"
        title={
          <>
            Мы делаем венгерский <span className="text-gradient-ember">доступным</span>
          </>
        }
        text="HunMaster — не платформа с уроками, а бренд-хаб: место, где мы собираем лучшее о венгерском языке и ведём вас к своим ресурсам."
      />

      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <TiltCard intensity={3} className="relative overflow-hidden p-10 sm:p-14">
              <Parliament className="pointer-events-none absolute -right-14 -bottom-10 h-52 w-[32rem] text-foreground/[0.06]" />
              <div className="relative grid gap-10 lg:grid-cols-2">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Венгерский язык десятилетиями считают одним из самых сложных в Европе. Мы уверены,
                  что дело не в языке, а в способе объяснения. Гармония гласных, 18 падежей и
                  агглютинация — это стройная система, а не набор ловушек.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Поэтому HunMaster начинается с материалов и сообщества: коротких разборов, слов
                  дня, произношения и практики. Курсы — следующий шаг, и они появятся, когда будут
                  сделаны на том же уровне.
                </p>
              </div>
            </TiltCard>
          </Reveal>

          <Stagger className="mt-5 grid gap-5 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, ...v }) => (
              <StaggerItem key={v.t}>
                <TiltCard intensity={6} className="h-full p-8">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="display mt-6 text-xl">{v.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
