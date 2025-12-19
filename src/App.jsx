import { useState } from "react";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Check,
  Menu,
  X,
  Star,
  Shield,
  Zap,
  Sparkles,
} from "lucide-react";
import { a } from "framer-motion/client";

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
          <nav className="hidden md:felx items-center gap-6 text-sm">
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
        </div>
      </header>
    </div>
  );
}

export default App;
