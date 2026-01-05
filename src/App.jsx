import { useState } from "react";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Check,
  Menu,
  X,
  Star,
  Moon,
  Heart,
  Sparkles,
} from "lucide-react";
import { a, div } from "framer-motion/client";

const navLinks = [
  { href: "#features", label: "Recursos" },
  { href: "#testmonials", label: "Depoimentos" },
  { href: "#pricing", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
      <header className="sticky top-8 z-40 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Minha marca</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-fuchsia-300 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden">
            <div
              className="fixed inset-0 bg-black/60"
              onClick={() => setOpen(false)}
            >
              <div className="fixed top-0 right-0 w-80 h-full bg-slate-900 border-l border-white/10 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-6 text-fuchsia-400" />
                    <span className="font-semibold">Gigi projeto</span>
                  </div>
                  <button
                    className="p-2 rounded-lg"
                    onClick={() => setOpen(false)}
                  >
                    <X className="size-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-4 bg-slate-900 p-4 w-90">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-slate-200"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold leading-tight max-w-3xl"
          >
            Primeiro projeto de landing{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-300">
              simples
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-slate-500 max-w-2xl"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            consequatur quibusdam reprehenderit quo voluptatibus
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-row gap-3"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium hover:bg-fuchsia-700 transition"
            >
              Veja agora <ArrowRight className="size-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-medium border border-white/10"
            >
              Recursos
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 grid grid-cols-3 gap-4"
          >
            {["Informação 1", "Informação 2", "Informação 3"].map(
              (label, i) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <div className="flex items-center gap-3">
                    {i == 0 && <Heart className="size-5 text-rose-400" />}
                    {i == 1 && <Star className="size-5 text-amber-400" />}
                    {i == 2 && <Moon className="size-5 text-indigo-400" />}
                    <div className="font-semibold">{label}</div>
                  </div>
                  <p className="text-sm text-slate-400 mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Tudo que você precisa saber</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          illo vitae voluptate explicabo laborum ducimus, obcaecati similique
          animi vel deleniti itaque pariatur aliquam ratione quasi voluptates
          veritatis officia quod numquam.
        </p>
        <div className="mt-8 grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Titulo",
              descc: "Descrição",
              icon: <Sparkles className="size-5 text-fuchsia-400" />,
            },
            {
              title: "Titulo",
              descc: "Descrição",
              icon: <Star className="size-5 text-yellow-400" />,
            },
            {
              title: "Titulo",
              descc: "Descrição",
              icon: <Moon className="size-5 text-indigo-400" />,
            },
            {
              title: "Titulo",
              descc: "Descrição",
              icon: <Sparkles className="size-5 text-fuchsia-400" />,
            },
            {
              title: "Titulo",
              descc: "Descrição",
              icon: <Sparkles className="size-5 text-fuchsia-400" />,
            },
            {
              title: "Titulo",
              descc: "Descrição",
              icon: <Sparkles className="size-5 text-fuchsia-400" />,
            },
          ].map((feature) => (
            <div>Teste</div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
