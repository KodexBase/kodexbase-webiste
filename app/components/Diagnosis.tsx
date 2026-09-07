"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  Gauge,
  LayoutDashboard,
  MessageCircle,
  RefreshCcw,
  Rocket,
  Target,
} from "lucide-react";

type Answer = {
  label: string;
  value: string;
  detail: string;
};

type Question = {
  id: "bottleneck" | "operation" | "stage" | "urgency";
  eyebrow: string;
  title: string;
  help: string;
  answers: Answer[];
};

const questions: Question[] = [
  {
    id: "bottleneck",
    eyebrow: "Gargalo principal",
    title: "O que mais limita sua empresa hoje?",
    help: "Escolha o problema que mais consome tempo ou impede avanço.",
    answers: [
      { label: "Atrair e converter clientes", value: "acquisition", detail: "A empresa precisa ser encontrada, compreendida e acionada com mais facilidade." },
      { label: "Organizar a operação", value: "operation", detail: "Dados, clientes ou tarefas estão espalhados e difíceis de acompanhar." },
      { label: "Eliminar trabalho repetitivo", value: "automation", detail: "A equipe repete processos que poderiam acontecer de forma automática." },
      { label: "Validar uma nova ideia", value: "validation", detail: "Existe uma oportunidade, mas ainda é preciso testar antes de investir em escala." },
    ],
  },
  {
    id: "operation",
    eyebrow: "Cenário atual",
    title: "Como esse processo funciona agora?",
    help: "Isso ajuda a estimar a distância entre o cenário atual e uma solução útil.",
    answers: [
      { label: "WhatsApp, papel ou memória", value: "manual", detail: "O processo depende diretamente das pessoas lembrarem e executarem." },
      { label: "Planilhas", value: "spreadsheets", detail: "Existe alguma estrutura, mas manutenção e rastreabilidade são limitadas." },
      { label: "Ferramentas desconectadas", value: "disconnected", detail: "As informações existem, porém precisam ser copiadas entre sistemas." },
      { label: "Um sistema que já não atende", value: "legacy", detail: "A operação evoluiu e a ferramenta atual não acompanhou." },
    ],
  },
  {
    id: "stage",
    eyebrow: "Escala",
    title: "Quem é afetado por esse problema?",
    help: "Não é sobre tamanho da empresa, mas sobre quantas rotinas dependem da solução.",
    answers: [
      { label: "Somente eu", value: "solo", detail: "O foco deve ser simples, direto e rápido de adotar." },
      { label: "Uma equipe de 2 a 5 pessoas", value: "small", detail: "Já existe necessidade de visibilidade e um fluxo compartilhado." },
      { label: "De 6 a 20 pessoas", value: "medium", detail: "Permissões, padronização e acompanhamento ganham importância." },
      { label: "Mais de 20 pessoas ou clientes", value: "large", detail: "A solução precisa considerar escala, integrações e diferentes perfis de uso." },
    ],
  },
  {
    id: "urgency",
    eyebrow: "Momento",
    title: "Quando esse gargalo precisa começar a mudar?",
    help: "A urgência define se o melhor caminho é um primeiro recorte ou um projeto mais amplo.",
    answers: [
      { label: "Agora — já está causando perda", value: "now", detail: "Vale priorizar uma primeira entrega pequena que reduza o problema central." },
      { label: "Nos próximos 1 a 3 meses", value: "soon", detail: "Há espaço para mapear o processo e construir com etapas claras." },
      { label: "Neste semestre", value: "semester", detail: "É possível comparar alternativas e preparar uma implementação gradual." },
      { label: "Ainda estou explorando", value: "exploring", detail: "O próximo passo deve reduzir incertezas antes de definir um projeto." },
    ],
  },
];

const directions = {
  acquisition: {
    icon: Target,
    label: "Presença orientada à conversão",
    title: "Seu primeiro foco deve ser tornar a decisão do cliente mais simples.",
    summary: "Uma página ou jornada comercial clara tende a ser mais adequada do que começar por um aplicativo completo.",
    actions: ["Definir uma oferta principal", "Apresentar provas e diferenciais verificáveis", "Criar um caminho curto até o contato"],
  },
  operation: {
    icon: LayoutDashboard,
    label: "Sistema operacional enxuto",
    title: "Seu primeiro foco deve ser criar uma fonte única de informação.",
    summary: "Um painel sob medida pode reunir o que hoje está disperso, começando apenas pelo fluxo mais crítico.",
    actions: ["Mapear o processo atual", "Escolher o dado central da operação", "Construir um primeiro módulo utilizável"],
  },
  automation: {
    icon: Bot,
    label: "Automação de fluxo",
    title: "Seu primeiro foco deve ser retirar trabalho manual do caminho.",
    summary: "Antes de criar um sistema inteiro, vale conectar as ferramentas existentes e automatizar a etapa de maior repetição.",
    actions: ["Medir onde o tempo é repetido", "Definir gatilho, regra e resultado", "Testar a automação em um fluxo controlado"],
  },
  validation: {
    icon: Rocket,
    label: "MVP para validação",
    title: "Seu primeiro foco deve ser testar a hipótese com o menor produto útil.",
    summary: "Um protótipo funcional ou MVP reduz o risco de construir muitas funções antes de entender o uso real.",
    actions: ["Definir a hipótese central", "Escolher uma única jornada essencial", "Colocar a primeira versão diante de usuários reais"],
  },
};

type Answers = Partial<Record<Question["id"], Answer>>;

export default function Diagnosis() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const isResult = step === questions.length;
  const question = questions[step];
  const direction = directions[answers.bottleneck?.value as keyof typeof directions] || directions.operation;
  const DirectionIcon = direction.icon;

  const whatsappUrl = useMemo(() => {
    if (!isResult) return "#";
    const selections = questions
      .map((item) => `${item.eyebrow}: ${answers[item.id]?.label || "Não informado"}`)
      .join("\n");
    const message = `Olá! Fiz o diagnóstico digital da KodexBase.\n\nResultado: ${direction.label}\n\n${selections}\n\nQuero conversar sobre o próximo passo.`;
    return `https://wa.me/5527997644821?text=${encodeURIComponent(message)}`;
  }, [answers, direction.label, isResult]);

  function selectAnswer(answer: Answer) {
    setAnswers((current) => ({ ...current, [question.id]: answer }));
    setStep((current) => current + 1);
  }

  function goBack() {
    if (step === 0) return;
    setStep((current) => current - 1);
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05020A] px-6 pb-24 pt-28" aria-labelledby="diagnosis-title">
      <div className="absolute left-1/2 top-16 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-purple-brand/15 blur-[150px]" />
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />

      <div className="relative mx-auto max-w-5xl">
        <header className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-accent/25 bg-purple-accent/10 text-purple-300">
            <Gauge className="h-5 w-5" />
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-purple-accent">Diagnóstico digital · 2 minutos</p>
          <h1 id="diagnosis-title" className="mt-4 text-balance text-4xl font-black tracking-tight text-white sm:text-6xl">
            Encontre o próximo passo antes de escolher a tecnologia.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            Quatro perguntas para transformar um problema aberto em uma direção inicial. Sem cadastro e sem resultado genérico escondido.
          </p>
        </header>

        <div className="mt-12 overflow-hidden rounded-3xl border border-purple-accent/20 bg-[#0B0714]/95 shadow-[0_32px_100px_rgba(0,0,0,.55)]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4 sm:px-8">
            <div className="flex items-center gap-2" aria-label={`Etapa ${Math.min(step + 1, questions.length)} de ${questions.length}`}>
              {questions.map((item, index) => (
                <span key={item.id} className={`h-1.5 rounded-full transition-all ${index < step ? "w-8 bg-emerald-400" : index === step && !isResult ? "w-12 bg-purple-accent" : "w-8 bg-white/10"}`} />
              ))}
            </div>
            <span className="text-xs font-semibold text-text-muted">{isResult ? "Mapa concluído" : `${step + 1}/${questions.length}`}</span>
          </div>

          {!isResult && question ? (
            <div className="p-6 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-accent">{question.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{question.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{question.help}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {question.answers.map((answer) => (
                  <button
                    key={answer.value}
                    type="button"
                    onClick={() => selectAnswer(answer)}
                    className="group min-h-[142px] rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-left transition hover:-translate-y-0.5 hover:border-purple-accent/45 hover:bg-purple-accent/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-accent"
                  >
                    <span className="flex items-start justify-between gap-4">
                      <span className="text-base font-bold text-white">{answer.label}</span>
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-white/25 transition group-hover:translate-x-0.5 group-hover:text-purple-300" />
                    </span>
                    <span className="mt-3 block text-sm leading-relaxed text-text-muted">{answer.detail}</span>
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button type="button" onClick={goBack} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-text-muted transition hover:text-white">
                  <ArrowLeft className="h-4 w-4" /> Voltar uma etapa
                </button>
              )}
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1.1fr_.9fr]">
              <div className="p-6 sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-accent/10 text-purple-300">
                  <DirectionIcon className="h-5 w-5" />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-purple-accent">Direção sugerida · {direction.label}</p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">{direction.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-text-muted">{direction.summary}</p>

                <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">Primeiro recorte recomendado</p>
                  <ol className="mt-4 space-y-3">
                    {direction.actions.map((action, index) => (
                      <li key={action} className="flex items-center gap-3 text-sm text-gray-200">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300"><Check className="h-3.5 w-3.5" /></span>
                        <span><strong className="mr-1 text-white">{index + 1}.</strong>{action}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-text-muted">Esta é uma hipótese inicial, não um orçamento. A direção deve ser confirmada entendendo o processo e as restrições reais.</p>
              </div>

              <aside className="border-t border-white/[0.07] bg-purple-accent/[0.045] p-6 sm:p-10 lg:border-l lg:border-t-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-300">Seu mapa</p>
                <dl className="mt-6 space-y-5">
                  {questions.map((item) => (
                    <div key={item.id} className="border-b border-white/[0.07] pb-4">
                      <dt className="text-xs text-text-muted">{item.eyebrow}</dt>
                      <dd className="mt-1 text-sm font-semibold text-white">{answers[item.id]?.label}</dd>
                    </div>
                  ))}
                </dl>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-brand to-purple-accent px-5 py-3.5 text-sm font-bold text-white shadow-glow-sm transition hover:-translate-y-0.5">
                  <MessageCircle className="h-4 w-4" /> Conversar com este contexto
                </a>
                <Link href="/contato" className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.05]">
                  Prefiro enviar por formulário
                </Link>
                <button type="button" onClick={restart} className="mt-5 flex w-full items-center justify-center gap-2 text-xs font-semibold text-text-muted transition hover:text-white">
                  <RefreshCcw className="h-3.5 w-3.5" /> Refazer diagnóstico
                </button>
              </aside>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
