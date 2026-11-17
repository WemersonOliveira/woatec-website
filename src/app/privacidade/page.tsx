import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui";
import { getWhatsAppUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Informações sobre privacidade, contato, navegação e tratamento de dados no site institucional da WOA TEC.",
  alternates: { canonical: "/privacidade" },
};

const updatedAt = "12 de novembro de 2026";
const privacyEmail = "tecwoa@gmail.com";

export default function Privacy() {
  const whatsapp = getWhatsAppUrl();

  return (
    <>
      <PageIntro label="SEUS DADOS, SUAS ESCOLHAS" title="Política de Privacidade">
        Saiba como a WOA TEC — Soluções Digitais trata questões de privacidade
        em sua presença digital, na apresentação de soluções em tecnologia,
        marketing e comunicação e nos canais de relacionamento comercial.
        Esta política é específica de woatec.com.br.
      </PageIntro>
      <article className="container prose section-bottom">
        <p>
          <strong>Atualização:</strong> {updatedAt}. Esta política apresenta
          informações de privacidade relacionadas aos canais de atendimento,
          à navegação e às solicitações comerciais da WOA TEC.
        </p>

        <h2>1. Quem é responsável</h2>
        <p>
          A WOA TEC — Soluções Digitais é a marca apresentada neste site.
          A responsável jurídica indicada para suas atividades e para as decisões
          sobre o tratamento de dados pessoais é a WOA Educacional,
          inscrita no CNPJ 54.717.782/0001-03, com endereço na SQN 409,
          Bloco J, Sala 305, Asa Norte, Brasília–DF, CEP 70857-100.
          Para questões sobre privacidade, acesso, correção ou exclusão
          de dados relacionados à WOA TEC, escreva para{" "}
          <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>.
          Site: <a href="https://woatec.com.br">woatec.com.br</a>.
          {whatsapp && (
            <>
              {" "}Contato comercial pelo{" "}
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp (61) 98117-6884
              </a>.
            </>
          )}
        </p>
        <p>
          O WhatsApp acima é um canal de contato comercial. Para exercer seus
          direitos sobre dados pessoais relacionados à WOA TEC, utilize
          preferencialmente o e-mail de privacidade indicado.
        </p>

        <h2>2. Quais informações aparecem na solicitação de proposta</h2>
        <p>
          Na página de contato, o formulário apresenta campos para nome, empresa
          ou instituição, e-mail, WhatsApp, tipo de serviço e descrição do
          projeto. Esses campos ajudam a organizar solicitações relacionadas
          a sites, plataformas, integrações, marketing digital e comunicação.
          O envio de uma mensagem também pode ocorrer diretamente pelos
          canais de contato disponibilizados no site.
        </p>
        <p>
          Evite inserir senhas, documentos, informações financeiras ou dados
          sensíveis na descrição do projeto.
        </p>

        <h2>3. Finalidades do relacionamento comercial</h2>
        <p>
          As informações recebidas nos canais comerciais podem ser utilizadas
          para compreender as necessidades do projeto, responder pedidos
          de orçamento, elaborar propostas de criação de sites e soluções
          tecnológicas, apresentar serviços de marketing e comunicação e
          acompanhar o atendimento solicitado. O tratamento deve observar
          as finalidades informadas e as bases legais aplicáveis da LGPD.
        </p>
        <p>
          A solicitação de uma proposta não equivale, por si só, à autorização
          para receber publicidade sobre ofertas não relacionadas ao pedido.
        </p>

        <h2>4. Armazenamento e fornecedores de tecnologia</h2>
        <p>
          A WOA Educacional poderá utilizar prestadores de serviços de
          hospedagem, comunicação e infraestrutura tecnológica para
          manter o site e prestar atendimento comercial. O tratamento
          de dados por terceiros deverá observar contratos, medidas de
          segurança e a legislação aplicável.
        </p>
        <p>
          Informações técnicas de acesso podem ser processadas pelos serviços
          necessários ao funcionamento do site. Detalhes sobre fornecedores,
          localização do armazenamento e eventuais transferências
          internacionais podem ser solicitados pelo canal de privacidade.
        </p>

        <h2>5. Atendimento e propostas pelo WhatsApp</h2>
        <p>
          Os botões de WhatsApp do site oferecem uma forma opcional de solicitar
          informações sobre soluções digitais ou propostas à WOA TEC. O site apenas prepara um link com mensagem sugerida;
          <strong> nenhuma mensagem é enviada automaticamente.</strong>
          Ao escolher prosseguir, você passa a utilizar o WhatsApp, sujeito
          às regras e à política de privacidade desse serviço. Não há
          inscrição automática em grupos de WhatsApp.
        </p>

        <h2>6. Retenção de dados e solicitações comerciais</h2>
        <p>
          Os dados pessoais eventualmente recebidos nos canais de atendimento
          devem ser conservados apenas pelo período necessário ao
          atendimento das finalidades informadas e ao cumprimento de
          obrigações legais ou ao exercício regular de direitos, quando
          aplicável. Você pode solicitar informações sobre a retenção
          ou a eliminação de seus dados pelo e-mail indicado nesta política.
        </p>

        <h2>7. Seus direitos previstos na LGPD</h2>
        <p>
          Nos casos em que a WOA Educacional tratar dados pessoais em atividades
          da WOA TEC,
          você poderá solicitar informações e exercer os direitos previstos
          na Lei Geral de Proteção de Dados Pessoais (LGPD), conforme
          aplicáveis: confirmação, acesso, correção, informação sobre
          compartilhamentos, anonimização, bloqueio ou eliminação,
          portabilidade, oposição e revogação de consentimento.
        </p>
        <p>
          Envie sua solicitação para{" "}
          <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>,
          explicando o pedido. Poderão ser necessárias informações mínimas
          para verificar a identidade do solicitante e proteger seus dados.
          Você também pode consultar a{" "}
          <a href="https://www.gov.br/anpd/pt-br" target="_blank" rel="noopener noreferrer">
            Autoridade Nacional de Proteção de Dados
          </a>.
        </p>

        <h2>8. Alterações desta política</h2>
        <p>
          A WOA Educacional poderá atualizar esta política para refletir
          alterações relevantes nos serviços, nas práticas de privacidade
          ou na legislação. A data acima indica a versão apresentada.
          Quando o tratamento exigir consentimento, a atualização do
          texto não o substitui.
        </p>

        <h2>9. Cookies de publicidade e Meta Pixel</h2>
        <p>
          A WOA TEC utiliza o Meta Pixel (identificador 2168410580211263)
          para medir visitas às páginas institucionais e avaliar campanhas
          de publicidade. O rastreador só é carregado quando você escolhe
          &quot;Aceitar publicidade&quot;. Recusar não impede a navegação ou
          a solicitação de informações pelos canais disponíveis.
        </p>
        <p>
          A Meta poderá receber dados técnicos relacionados à navegação, como
          endereço da página, endereço IP, informações do navegador e
          identificadores de cookies. A integração atual registra eventos de
          visualização de página (PageView); não transmite ao Pixel os campos
          do formulário de proposta e não realiza correspondência avançada.
        </p>
        <p>
          Sua escolha de publicidade é guardada neste navegador. Use o botão
          &quot;Cookies de publicidade&quot; para revisar a preferência ou
          retirar o consentimento. A revogação interrompe novos disparos
          autorizados pelo site e tenta remover cookies da Meta acessíveis
          neste domínio; não desfaz dados já enviados.
        </p>

        <p className="notice">
          Esta política se aplica à presença institucional e aos canais
          comerciais da WOA TEC. Serviços e campanhas de outras marcas
          possuem suas próprias informações de privacidade.
        </p>
        <p>
          <Link href="/contato">Voltar para contato</Link>
        </p>
      </article>
    </>
  );
}
