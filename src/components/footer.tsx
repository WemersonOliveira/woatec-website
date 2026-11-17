import Link from "next/link";
import { Logo } from "@/components/ui";
import { getInstagramProfile, getWhatsAppUrl, navigation } from "@/config/site";

export function Footer() {
  const instagram = getInstagramProfile();
  const whatsapp = getWhatsAppUrl();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo />
            <p>
              Tecnologia, marketing e comunicação conectados para transformar
              ideias em soluções digitais.
            </p>
          </div>
          <nav className="footer-column" aria-label="Navegação do rodapé">
            <h2>Navegação</h2>
            {navigation.map(([href, label]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <nav className="footer-column" aria-label="Soluções no rodapé">
            <h2>Soluções</h2>
            <Link href="/solucoes#tecnologia">
              Tecnologia e Engenharia Digital
            </Link>
            <Link href="/solucoes#marketing">Marketing Digital</Link>
            <Link href="/solucoes#comunicacao">Comunicação e Social Media</Link>
          </nav>
          <div className="footer-column">
            <h2>Presença digital</h2>
            {instagram ? (
              <a href={instagram.url} target="_blank" rel="noopener noreferrer">
                Instagram <span aria-hidden="true">↗</span>
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            ) : (
              <p className="channel-pending">
                Instagram
                <br />
                <span>Perfil em confirmação</span>
              </p>
            )}
            {whatsapp ? (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp <span aria-hidden="true">↗</span>
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            ) : (
              <p className="channel-pending">
                WhatsApp
                <br />
                <span>Canal em configuração</span>
              </p>
            )}
            <Link href="/contato">
              Solicitar uma proposta <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} WOA TEC — Soluções Digitais</span>
          <Link href="/privacidade">Política de Privacidade</Link>
          <span>woatec.com.br</span>
        </div>
      </div>
    </footer>
  );
}
