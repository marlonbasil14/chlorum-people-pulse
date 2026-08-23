import { createContext, useContext, useState, type ReactNode } from "react";

export type Session = { email: string; name: string; startedAt: Date };

type Ctx = {
  session: Session | null;
  signIn: (email: string, password: string) => string | null;
  signOut: () => void;
};

const SessionContext = createContext<Ctx | null>(null);

/** Domínio corporativo — confirmar com TI antes de travar em produção. */
export const CORP_DOMAIN = "chlorumsolutions.com";
const PATTERN = new RegExp(`^[^@\\s]+@${CORP_DOMAIN.replace(".", "\\.")}$`, "i");

function nameFromEmail(email: string) {
  const local = email.split("@")[0] ?? email;
  return local
    .split(/[._-]+/)
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join(" ");
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);

  function signIn(email: string, password: string) {
    if (!PATTERN.test(email.trim())) {
      return `Use seu e-mail corporativo @${CORP_DOMAIN}.`;
    }
    if (!password) return "Informe sua senha.";
    // TODO: substituir por SSO corporativo (SAML/OAuth) quando disponível.
    setSession({
      email: email.trim(),
      name: nameFromEmail(email.trim()),
      startedAt: new Date(),
    });
    return null;
  }

  function signOut() {
    // TODO: encerrar sessão no provedor de identidade corporativo.
    setSession(null);
  }

  return (
    <SessionContext.Provider value={{ session, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession precisa estar dentro de SessionProvider");
  return ctx;
}
