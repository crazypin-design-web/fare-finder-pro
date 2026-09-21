import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BellRing, Eye, RotateCcw } from "lucide-react";

import heroImage from "@/assets/flight-routes-hero.jpg";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { useAuthUser } from "@/hooks/useAuthUser";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Target Flight Price Notifier — 機票降價通知" },
      { name: "description", content: "只要設定航線與目標價，達標馬上通知你。追蹤台北出發的熱門航線，低於預算立即收到 email。" },
      { property: "og:title", content: "Target Flight Price Notifier — 機票降價通知" },
      { property: "og:description", content: "只要設定航線與目標價，達標馬上通知你。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const features = [
  {
    icon: Eye,
    title: "盯緊熱門航線",
    english: "Always-on route watching",
    copy: "持續監控台北出發的熱門航線（東京、首爾），自動抓最低票價。",
  },
  {
    icon: BellRing,
    title: "達標自動通知",
    english: "Target-price email alerts",
    copy: "低於你設定的目標價，就寄 email 提醒你，附上立即訂購連結。",
  },
  {
    icon: RotateCcw,
    title: "隨時取消",
    english: "Cancel anytime",
    copy: "月訂閱制，不想用隨時停，沒有綁約。",
  },
];

function LandingPage() {
  const { user } = useAuthUser();

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <section className="relative min-h-[78svh] border-b border-border">
        <img
          src={heroImage}
          alt="Night flight routes connecting Taipei, Seoul, and Tokyo"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background)_0%,transparent_28%,var(--background)_100%)] opacity-90" />

        <header className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <BrandMark />
          <Button asChild variant="outline">
            <Link to={user ? "/app" : "/sign-in"}>{user ? "Dashboard / 儀表板" : "Sign in / 登入"}</Link>
          </Button>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(78svh-5rem)] max-w-7xl items-center px-5 pb-16 pt-8 sm:px-8">
          <div className="max-w-4xl animate-rise">
            <p className="mb-5 text-sm font-semibold uppercase text-violet-soft">機票降價通知 · From Taipei to the world</p>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.04] text-foreground sm:text-6xl lg:text-8xl">
              Target Flight<br />Price Notifier
            </h1>
            <p className="mt-7 text-xl font-semibold text-foreground sm:text-2xl">只要設定航線與目標價，達標馬上通知你</p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Once set a route and a target price — we email you when the fare drops.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link to={user ? "/app" : "/sign-up"}>
                  {user ? "Open dashboard" : "Start watching fares"}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <span className="text-sm text-muted-foreground">Tokyo · Seoul · More routes soon</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase text-primary">Simple by design</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">你定預算，我們替你盯價格。</h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="bg-card p-7 transition-colors hover:bg-surface-strong sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-md bg-primary/15 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="mt-8 text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="mt-1 text-sm font-medium text-violet-soft">{feature.english}</p>
                <p className="mt-5 leading-7 text-muted-foreground">{feature.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 text-center text-sm text-muted-foreground">
        © 2026 Flight Price Notifier
      </footer>
    </main>
  );
}