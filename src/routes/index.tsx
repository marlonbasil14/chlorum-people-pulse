import { createFileRoute } from "@tanstack/react-router";
import { SessionProvider, useSession } from "@/components/session";
import { Login } from "@/components/login";
import { Dashboard } from "@/components/dashboard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "People Intelligence — Chlorum Solutions" },
      {
        name: "description",
        content:
          "Dashboard executivo de Gente e Gestão da Chlorum Solutions: saúde ocupacional, remuneração, produtividade, demografia, R&S, desenvolvimento e ESG.",
      },
      { property: "og:title", content: "People Intelligence — Chlorum Solutions" },
      {
        property: "og:description",
        content: "Panorama estratégico dos indicadores de pessoas da Chlorum Solutions.",
      },
    ],
  }),
  component: Index,
});

function Gate() {
  const { session } = useSession();
  return session ? <Dashboard /> : <Login />;
}

function Index() {
  return (
    <SessionProvider>
      <Gate />
    </SessionProvider>
  );
}
