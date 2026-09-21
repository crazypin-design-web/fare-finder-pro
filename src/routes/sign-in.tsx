import { createFileRoute, Link } from "@tanstack/react-router";

import { AuthForm } from "@/components/AuthForm";
import { BrandMark } from "@/components/BrandMark";

export const Route = createFileRoute("/sign-in")({
  head: () => ({ meta: [
    { title: "Sign in — Target Flight Price Notifier" },
    { name: "description", content: "Sign in to your Flight Price Notifier account." },
    { property: "og:title", content: "Sign in — Target Flight Price Notifier" },
    { property: "og:description", content: "Sign in to manage your flight price alerts." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: SignInPage,
});

function SignInPage() {
  return (
    <main className="grid min-h-screen place-items-center px-5 py-10">
      <div className="w-full max-w-md animate-rise">
        <Link to="/" aria-label="Back to home"><BrandMark /></Link>
        <div className="mt-10 rounded-lg border border-border bg-card p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase text-primary">Welcome back</p>
          <h1 className="mt-2 text-3xl font-bold">Sign in / 登入</h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Your next fare drop could be closer than you think.</p>
          <AuthForm mode="sign-in" />
        </div>
      </div>
    </main>
  );
}