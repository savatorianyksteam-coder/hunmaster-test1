import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Mail, Send } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { TELEGRAM_URL } from "@/lib/site";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты HunMaster — связаться с проектом" },
      {
        name: "description",
        content:
          "Свяжитесь с HunMaster: Telegram-канал проекта, почта для вопросов и сотрудничества, Facebook скоро.",
      },
      { property: "og:title", content: "Контакты HunMaster" },
      {
        property: "og:description",
        content: "Telegram, почта и другие способы связаться с проектом HunMaster.",
      },
    ],
  }),
  component: Contacts,
});

function Contacts() {
  return (
    <>
      <PageHeader
        eyebrow="Контакты"
        title={
          <>
            Давайте <span className="text-gradient-ember">познакомимся</span>
          </>
        }
        text="Пишите по вопросам обучения, материалов или сотрудничества — отвечаем быстро."
      />
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-5 md:grid-cols-3">
            <StaggerItem>
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="block h-full">
                <TiltCard className="h-full p-8">
                  <Send className="h-5 w-5 text-primary" />
                  <h2 className="display mt-6 text-xl">Telegram</h2>
                  <p className="mt-3 text-sm text-muted-foreground">@HunMaster</p>
                  <span className="mt-8 flex items-center justify-between text-sm font-semibold">
                    Написать
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </TiltCard>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="mailto:hello@hunmaster.hu" className="block h-full">
                <TiltCard className="h-full p-8">
                  <Mail className="h-5 w-5 text-primary" />
                  <h2 className="display mt-6 text-xl">Почта</h2>
                  <p className="mt-3 text-sm text-muted-foreground">hello@hunmaster.hu</p>
                  <span className="mt-8 flex items-center justify-between text-sm font-semibold">
                    Отправить письмо
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </TiltCard>
              </a>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="h-full cursor-default p-8">
                <Facebook className="h-5 w-5 text-muted-foreground" />
                <h2 className="display mt-6 text-xl">Facebook</h2>
                <p className="mt-3 text-sm text-muted-foreground">Страница готовится к запуску.</p>
                <span className="mt-8 flex items-center justify-between text-sm font-semibold text-muted-foreground/70">
                  Скоро
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </TiltCard>
            </StaggerItem>
          </Stagger>
          <Reveal className="mt-14">
            <div className="hairline" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
