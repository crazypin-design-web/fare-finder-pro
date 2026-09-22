import { Link } from "react-router-dom";

import { AuthForm } from "@/components/AuthForm";
import { BrandMark } from "@/components/BrandMark";
import { usePageMeta } from "@/hooks/usePageMeta";

export function SignInPage() {
  usePageMeta({
    title: "Sign in — Target Flight Price Notifier",
    description: "Sign in to your Flight Price Notifier account.",
  });

  return (
    <main className="grid min-h-screen place-items-center px-5 py-10">
      <div className="w-full max-w-md animate-rise">
        <Link to="/" aria-label="Back to home">
          <BrandMark />
        </Link>
        <div className="mt-10 rounded-lg border border-border bg-card p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase text-primary">Welcome back</p>
          <h1 className="mt-2 text-3xl font-bold">Sign in / 登入</h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Your next fare drop could be closer than you think.
          </p>
          <AuthForm mode="sign-in" />
        </div>
      </div>
    </main>
  );
}
