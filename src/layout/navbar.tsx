import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";

type Item = { label: string; hash: `#${string}` };

const ITEMS: Item[] = [
  { label: "Inicio",             hash: "#inicio" },
  { label: "Servicios",          hash: "#servicios" },
  { label: "Proyectos",          hash: "#proyectos" },
  { label: "¿Por qué elegirnos?",hash: "#por-que-elegirnos" },
  { label: "Contacto",           hash: "#contacto" },
];

function smoothScrollTo(hash: string) {
  const el = document.querySelector(hash);
  if (!el) return;
  (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault(); // evitamos el salto instantáneo SIEMPRE

    // Si no estamos en "/", navegamos primero y luego hacemos scroll suave
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash });
      // esperar al siguiente frame para que el DOM de Home esté montado
      requestAnimationFrame(() => smoothScrollTo(hash));
      return;
    }

    // Ya estamos en "/": actualizamos el hash manualmente (sin salto) y scrolleamos suave
    if (window.history?.pushState) {
      const url = `${window.location.pathname}${hash}`;
      window.history.pushState(null, "", url);
    }
    smoothScrollTo(hash);
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        <ul className="flex items-center gap-4 text-sm font-medium">
          {ITEMS.map((it) => (
            <li key={it.hash}>
              <Link
                to={{ pathname: "/", hash: it.hash }}
                onClick={(e) => handleClick(e, it.hash)}
                className="px-2 py-1 rounded hover:bg-black/[0.04] transition"
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="tel:50660161790"
          className="inline-flex items-center gap-2 rounded-lg bg-[#F7931A] text-white px-3 py-1.5 text-sm font-semibold hover:brightness-110"
        >
          <Phone size={16} /> 6016-1790
        </a>
      </div>
    </nav>
  );
}
