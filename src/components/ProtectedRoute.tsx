import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuthUser } from "@/hooks/useAuthUser";

/**
 * Client-side replacement for TanStack Start's `_authenticated` route guard
 * (`beforeLoad` + `supabase.auth.getUser()` + `redirect`). Renders nothing
 * while the auth state is resolving, then redirects to /sign-in if there's
 * no signed-in user.
 */
export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, ready } = useAuthUser();

  if (!ready) return null;
  if (!user) return <Navigate to="/sign-in" replace />;

  return <>{children}</>;
}
