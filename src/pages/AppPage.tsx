import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { BellRing, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuthUser } from "@/hooks/useAuthUser";
import { usePageMeta } from "@/hooks/usePageMeta";

export function AppPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useAuthUser();

  usePageMeta({
    title: "Dashboard — Target Flight Price Notifier",
    description: "Your Flight Price Notifier dashboard.",
  });

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate("/sign-in", { replace: true });
  }

  // ProtectedRoute guarantees a signed-in user before this renders; this guard
  // only covers the brief instant right after a sign-out click.
  if (!user) return null;

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface/80">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/">
            <BrandMark />
          </Link>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut aria-hidden="true" /> Sign Out
          </Button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase text-primary">Flight dashboard</p>
        <h1 className="mt-3 break-words text-3xl font-bold sm:text-5xl">Hi {user.email}</h1>

        <div className="mt-12 max-w-3xl rounded-lg border border-border bg-card p-7 sm:p-10">
          <span className="grid size-12 place-items-center rounded-md bg-primary/15 text-primary">
            <BellRing aria-hidden="true" className="size-5" />
          </span>
          <h2 className="mt-7 text-2xl font-bold leading-snug">
            你的航線追蹤儀表板即將上線 — 下一個里程碑會加上訂閱航線的功能。
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Your dashboard is coming soon. Route-subscription will be added in the next milestone.
          </p>
        </div>
      </section>
    </main>
  );
}
