import { useState } from "react";
import {
  MessageCircle,
  Search,
  ShieldCheck,
  Truck,
  CheckCircle,
  Sparkles,
  Ruler,
  SlidersHorizontal,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function Brinquedos() {
  const whatsapp = "5548991057261";

  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todos");
  const [mostrarFiltros, setMostrarFiltros] = useState(true);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("Pequena");

  const tamanhosCama = [
    {
      nome: "Pequena",
      preco: "R$ 100,00",
      medidas: "183 cm diâmetro • 180 cm altura",
    },
    {
      nome: "Média",
      preco: "R$ 130,00",
      medidas: "244 cm diâmetro • 200 cm altura",
    },
    {
      nome: "Grande",
      preco: "R$ 180,00",
      medidas: "3,05 m diâmetro • 200 cm altura",
    },
  ];

  const filtros = [
    "Todos",
    "Brinquedo Grande",
    "Brinquedo Infantil",
    "Mesa de Jogo",
    "Combo Especial",
  ];

  const brinquedos = [
    {
      nome: "Cama Elástica",
      categoria: "Brinquedo Grande",
      descricao:
        "Ideal para aniversários, festas infantis e eventos com muita diversão.",
      img: "/img/cama-elastica.png",
      tamanhos: tamanhosCama,
    },
    {
      nome: "Piscina de Bolinhas",
      categoria: "Brinquedo Infantil",
      preco: "R$ 100,00",
      medidas: "150 cm diâmetro • 170 cm altura",
      descricao:
        "Perfeita para crianças pequenas brincarem com segurança e alegria.",
      img: "/img/piscina-bolinhas.png",
    },
    {
      nome: "Pebolim",
      categoria: "Mesa de Jogo",
      preco: "R$ 120,00",
      medidas: "143 cm comprimento • 101 cm largura • 95 cm altura",
      descricao:
        "Diversão para crianças, jovens e adultos durante todo o evento.",
      img: "/img/pebolim.png",
    },
    {
      nome: "Mesa de Ping Pong",
      categoria: "Mesa de Jogo",
      preco: "R$ 230,00",
      medidas: "2,74 m comprimento • 1,52 m largura • 76 cm altura",
      descricao:
        "Perfeita para eventos, confraternizações e momentos de diversão entre amigos e família.",
      img: "/img/pingpong.png",
    },
    {
      nome: "Basquete Duplo com Placar Eletrônico",
      categoria: "Mesa de Jogo",
      preco: "R$ 230,00",
      medidas: "200 cm altura • 200 cm comprimento",
      descricao:
        "Tabela de basquete duplo com placar eletrônico, ideal para eventos animados e disputas divertidas.",
      img: "/img/basquete.png",
    },
    {
      nome: "Cavalinho Infantil",
      categoria: "Brinquedo Infantil",
      preco: "R$ 30,00",
      unidade: "Valor referente a 1 unidade",
      medidas: "80 cm comprimento • 30 cm largura",
      descricao: "Ótimo para crianças pequenas se divertirem de forma segura.",
      img: "/img/cavalinho.png",
    },
    {
      nome: "Combo Diversão",
      categoria: "Combo Especial",
      preco: "R$ 350,00",
      inclui:
        "Inclui cama elástica, piscina de bolinhas, pebolim e cavalinho.",
      descricao:
        "Pacote completo com brinquedos para deixar seu evento ainda melhor.",
      img: "/img/combo.png",
    },
  ];

  const brinquedosFiltrados = brinquedos.filter((item) => {
    const combinaBusca = item.nome.toLowerCase().includes(busca.toLowerCase());
    const combinaFiltro = filtro === "Todos" || item.categoria === filtro;

    return combinaBusca && combinaFiltro;
  });

  const tamanhoAtual =
    tamanhosCama.find((item) => item.nome === tamanhoSelecionado) ||
    tamanhosCama[0];

  function nomeFiltro(item) {
    if (item === "Brinquedo Grande") return "Grandes";
    if (item === "Brinquedo Infantil") return "Infantil";
    if (item === "Mesa de Jogo") return "Jogos";
    if (item === "Combo Especial") return "Combos";
    return "Todos";
  }

  function mensagemWhatsApp(item) {
    if (item.nome === "Cama Elástica") {
      return encodeURIComponent(
        `Olá! Tenho interesse na ${item.nome}.
Tamanho: ${tamanhoAtual.nome}
Valor: A partir de ${tamanhoAtual.preco}
Medidas: ${tamanhoAtual.medidas}`
      );
    }

    return encodeURIComponent(
      `Olá! Tenho interesse no aluguel de: ${item.nome}.
Valor: A partir de ${item.preco}
${item.medidas ? `Medidas: ${item.medidas}` : ""}
${item.inclui ? `Inclui: ${item.inclui}` : ""}
${item.unidade ? item.unidade : ""}`
    );
  }

  return (
    <main className="overflow-hidden bg-white text-blue-950">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 px-5 py-16 text-white md:px-8 md:py-24">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl text-center"
        >
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-xs font-black text-blue-950 shadow sm:text-sm">
            <Sparkles size={18} />
            Catálogo de Brinquedos
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            Escolha a diversão perfeita
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Brinquedos seguros, higienizados e prontos para transformar seu
            evento em um momento inesquecível.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-white p-4 shadow-2xl md:p-5"
        >
          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4">
            <Search className="shrink-0 text-blue-700" size={26} />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar brinquedo..."
              className="w-full bg-transparent text-base font-bold outline-none placeholder:text-slate-400 md:text-lg"
            />
          </div>

          <div className="mt-4">
            <div className="flex flex-wrap items-center gap-2 pb-1">
              <button
                type="button"
                onClick={() => setMostrarFiltros(!mostrarFiltros)}
                className={`flex items-center gap-2 rounded-full px-4 py-3 text-sm font-black transition ${
                  mostrarFiltros
                    ? "bg-blue-950 text-white shadow-lg"
                    : "bg-blue-50 text-blue-900 hover:bg-yellow-400"
                }`}
              >
                <SlidersHorizontal size={18} />
                Filtrar
              </button>

              <AnimatePresence>
                {mostrarFiltros &&
                  filtros.map((item) => (
                    <motion.button
                      key={item}
                      type="button"
                      onClick={() => setFiltro(item)}
                      initial={{ opacity: 0, scale: 0.9, y: -5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className={`rounded-full px-4 py-3 text-sm font-black transition ${
                        filtro === item
                          ? "bg-blue-950 text-white shadow-lg"
                          : "bg-slate-100 text-blue-950 hover:bg-yellow-400"
                      }`}
                    >
                      {nomeFiltro(item)}
                    </motion.button>
                  ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={filtro + busca}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.35 }}
            className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {brinquedosFiltrados.map((item, index) => {
              const isCama = item.nome === "Cama Elástica";
              const precoAtual = isCama ? tamanhoAtual.preco : item.preco;

              return (
                <motion.div
                  key={item.nome}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl"
                >
                  <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-blue-50 via-white to-yellow-50 p-5 sm:h-64 md:h-72">
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-yellow-400 px-4 py-2 text-xs font-black text-blue-950 shadow-md">
                      {item.categoria}
                    </span>

                    <motion.img
                      whileHover={{ scale: 1.06, rotate: -2 }}
                      src={item.img}
                      alt={item.nome}
                      className="h-[85%] w-full object-contain drop-shadow-2xl md:h-full"
                    />
                  </div>

                  <div className="p-6 md:p-7">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-800">
                        Seguro
                      </span>
                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-black text-green-700">
                        Higienizado
                      </span>
                      <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-black text-yellow-700">
                        Entrega no local
                      </span>
                    </div>

                    <h2 className="text-2xl font-black">{item.nome}</h2>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {item.descricao}
                    </p>

                    {item.inclui && (
                      <div className="mt-5 rounded-2xl bg-yellow-50 p-4">
                        <p className="text-xs font-black uppercase tracking-wide text-yellow-700">
                          O que inclui
                        </p>
                        <p className="mt-2 text-sm font-bold text-blue-950">
                          {item.inclui}
                        </p>
                      </div>
                    )}

                    {isCama && (
                      <div className="mt-5 rounded-2xl bg-blue-50 p-3">
                        <p className="mb-3 text-xs font-black uppercase tracking-wide text-blue-900">
                          Escolha o tamanho
                        </p>

                        <div className="grid gap-2">
                          {item.tamanhos.map((tamanho) => (
                            <button
                              key={tamanho.nome}
                              type="button"
                              onClick={() =>
                                setTamanhoSelecionado(tamanho.nome)
                              }
                              className={`rounded-2xl p-3 text-left transition ${
                                tamanhoSelecionado === tamanho.nome
                                  ? "bg-blue-950 text-white shadow-lg"
                                  : "bg-white text-blue-950 hover:bg-yellow-400"
                              }`}
                            >
                              <div className="flex items-center justify-between gap-3">
                                <span className="font-black">
                                  {tamanho.nome}
                                </span>
                                <span className="font-black">
                                  {tamanho.preco}
                                </span>
                              </div>

                              <p className="mt-1 text-xs font-semibold opacity-80">
                                {tamanho.medidas}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {!isCama && item.medidas && (
                      <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                        <p className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-500">
                          <Ruler size={15} />
                          Medidas
                        </p>

                        <p className="mt-2 text-sm font-bold text-blue-950">
                          {item.medidas}
                        </p>
                      </div>
                    )}

                    <div className="mt-5 flex items-end justify-between gap-4">
                      <div>
                        {isCama && (
                          <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                            Tamanho selecionado: {tamanhoSelecionado}
                          </p>
                        )}

                        <p className="mt-1 text-sm text-slate-500">
                          A partir de
                        </p>

                        <p className="text-3xl font-black text-blue-800">
                          {precoAtual}
                        </p>

                        {item.unidade && (
                          <p className="mt-1 text-xs font-bold text-slate-500">
                            {item.unidade}
                          </p>
                        )}

                        <p className="mt-2 max-w-xs text-[11px] font-semibold leading-snug text-slate-400">
                          *Valores podem variar conforme bairro, data e tempo de
                          locação.
                        </p>
                      </div>

                      <a
                        href={`https://wa.me/${whatsapp}?text=${mensagemWhatsApp(
                          item
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110"
                      >
                        <MessageCircle size={24} />
                      </a>
                    </div>

                    <a
                      href={`https://wa.me/${whatsapp}?text=${mensagemWhatsApp(
                        item
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-950 py-4 font-black text-white transition group-hover:bg-yellow-400 group-hover:text-blue-950"
                    >
                      Consultar disponibilidade
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {brinquedosFiltrados.length === 0 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 text-center text-lg font-bold text-slate-500"
          >
            Nenhum brinquedo encontrado.
          </motion.p>
        )}
      </section>

      <section className="bg-blue-50 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              titulo: "Brinquedos higienizados",
              texto: "Todos os brinquedos são limpos e revisados antes de cada evento.",
              icon: ShieldCheck,
              cor: "text-blue-700",
            },
            {
              titulo: "Entrega no local",
              texto: "Levamos os brinquedos até seu evento com pontualidade.",
              icon: Truck,
              cor: "text-green-600",
            },
            {
              titulo: "Atendimento rápido",
              texto: "Orçamento simples e direto pelo WhatsApp.",
              icon: CheckCircle,
              cor: "text-yellow-500",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.titulo}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white p-8 text-center shadow-xl"
              >
                <Icon className={`mx-auto ${item.cor}`} size={58} />
                <h3 className="mt-5 text-xl font-black">{item.titulo}</h3>
                <p className="mt-3 text-slate-600">{item.texto}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-blue-950 px-5 py-16 text-center text-white md:px-8 md:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Pronto para reservar?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base text-blue-100 sm:text-lg">
            Fale agora pelo WhatsApp e garanta a diversão do seu evento.
          </p>

          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 shadow-xl transition hover:scale-105 md:px-10 md:py-5"
          >
            Fazer orçamento
            <MessageCircle size={24} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}