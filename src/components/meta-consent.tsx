"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./meta-consent.module.css";

const PIXEL_ID = "2168410580211263";
const STORAGE_KEY = "woatec-ad-consent-v1";
type Choice = "accepted" | "rejected";
type MetaFbq = ((...args: unknown[]) => void) & {
  queue?: unknown[][];
  loaded?: boolean;
  version?: string;
  callMethod?: (...args: unknown[]) => void;
};
type MetaWindow = Window & { fbq?: MetaFbq; _fbq?: MetaFbq };

let pixelInitialized = false;
let lastTrackedPath: string | null = null;

function fbqClient() {
  return (window as MetaWindow).fbq;
}

function enablePixel() {
  const metaWindow = window as MetaWindow;

  if (!metaWindow.fbq) {
    const fbq: MetaFbq = (...args: unknown[]) => {
      if (fbq.callMethod) {
        fbq.callMethod(...args);
      } else {
        fbq.queue?.push(args);
      }
    };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    metaWindow.fbq = fbq;
    metaWindow._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    script.dataset.woatecPixel = PIXEL_ID;
    document.head.appendChild(script);
  }

  const fbq = fbqClient();
  if (!fbq) return;

  fbq("consent", "grant");
  if (!pixelInitialized) {
    fbq("init", PIXEL_ID);
    pixelInitialized = true;
  }
}

function pageView(path: string) {
  if (!pixelInitialized || lastTrackedPath === path) return;
  fbqClient()?.("trackSingle", PIXEL_ID, "PageView");
  lastTrackedPath = path;
}

function revokePixel() {
  fbqClient()?.("consent", "revoke");
  lastTrackedPath = null;
  // Best effort to remove first-party cookies that are accessible to this site.
  for (const name of ["_fbp", "_fbc"]) {
    document.cookie = name + "=; Max-Age=0; path=/; SameSite=Lax";
  }
}

export function MetaConsent() {
  const pathname = usePathname();
  const [choice, setChoice] = useState<Choice | null | "loading">("loading");
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    // Read persisted consent after mount, without a synchronous state update
    // inside the effect (react-hooks/set-state-in-effect).
    const task = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        setChoice(stored === "accepted" || stored === "rejected" ? stored : null);
      } catch {
        setChoice(null);
      }
    }, 0);

    return () => window.clearTimeout(task);
  }, []);

  useEffect(() => {
    if (choice !== "accepted") return;
    enablePixel();
    pageView(pathname ?? "/");
  }, [choice, pathname]);

  function decide(next: Choice) {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // A escolha continua válida nesta visita mesmo sem armazenamento.
    }
    if (next === "rejected") revokePixel();
    setChoice(next);
    setPreferencesOpen(false);
  }

  if (choice === "loading") return null;

  return (
    <>
      <button
        type="button"
        className={styles.preferencesButton}
        onClick={() => setPreferencesOpen(true)}
        aria-label="Revisar preferências de cookies de publicidade"
      >
        Cookies de publicidade
      </button>
      {(choice === null || preferencesOpen) && (
        <section className={styles.panel} role="region" aria-label="Preferências de publicidade">
          <h2>Suas escolhas de privacidade</h2>
          <p>
            Podemos usar o Meta Pixel para medir visitas e avaliar anúncios da WOA TEC.
            Se você recusar, não carregaremos esse rastreador.
            A sua escolha não impede a navegação nem o contato com a empresa.
          </p>
          <p className={styles.details}>
            O serviço pode receber informações técnicas de navegação e usar cookies.
            Não enviamos dados do formulário para o Pixel.
            Consulte a <Link href="/privacidade">Política de Privacidade</Link>.
          </p>
          <div className={styles.actions}>
            <button type="button" onClick={() => decide("rejected")} className={styles.reject}>
              Recusar publicidade
            </button>
            <button type="button" onClick={() => decide("accepted")} className={styles.accept}>
              Aceitar publicidade
            </button>
            {preferencesOpen && choice !== null && (
              <button type="button" onClick={() => setPreferencesOpen(false)} className={styles.close}>
                Fechar
              </button>
            )}
          </div>
        </section>
      )}
    </>
  );
}
