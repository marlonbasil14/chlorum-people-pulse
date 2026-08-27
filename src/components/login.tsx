import { useState } from "react";
import { BrandLockup } from "@/components/brand-lockup";
import { useSession, CORP_DOMAIN } from "@/components/session";

export function Login() {
  const { signIn } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="login-shell">
      <form
        className="login-card"
        onSubmit={(e) => {
          e.preventDefault();
          setError(signIn(email, password));
        }}
      >
        <BrandLockup variant="gestao" size={44} />
        <h1>
          People <em>Intelligence</em>
        </h1>
        <p className="hint">
          Acesse com seu e-mail corporativo para ver os indicadores de Gente e Gestão.
        </p>
        <div className="field">
          <label htmlFor="email">E-mail corporativo</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            maxLength={255}
            placeholder={`nome.sobrenome@${CORP_DOMAIN}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            maxLength={128}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-btn" type="submit">
          Entrar
        </button>
        {error ? <div className="login-error">{error}</div> : null}
        <p className="login-foot">
          Validação de padrão de domínio, sem autenticação real. O SSO corporativo (SAML/OAuth) será
          conectado nesta etapa.
        </p>
      </form>
    </div>
  );
}
