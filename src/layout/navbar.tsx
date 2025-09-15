// src/layout/Navbar.tsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";

type Item = { label: string; hash: `#${string}` };

const ITEMS: Item[] = [
  { label: "Inicio",              hash: "#inicio" },
  { label: "Servicios",           hash: "#servicios" },
  { label: "Proyectos",           hash: "#proyectos" },
  { label: "¿Por qué elegirnos?", hash: "#por-que-elegirnos" },
  { label: "Contacto",            hash: "#contacto" },
];

function smoothScrollTo(hash: string) {
  const el = document.querySelector(hash);
  if (!el) return;
  (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash });
      requestAnimationFrame(() => smoothScrollTo(hash));
      return;
    }
    if (window.history?.pushState) {
      const url = `${window.location.pathname}${hash}`;
      window.history.pushState(null, "", url);
    }
    smoothScrollTo(hash);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (hash: string) =>
    location.pathname === "/" && location.hash === hash;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Navegación (desktop) */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-[15px] lg:text-base font-medium">
          {ITEMS.map((it) => (
            <li key={it.hash}>
              <Link
                to={{ pathname: "/", hash: it.hash }}
                onClick={(e) => handleClick(e, it.hash)}
                className={[
                  "px-2 py-2 rounded-md transition",
                  isActive(it.hash)
                    ? "text-gray-900 bg-black/[0.06]"
                    : "text-gray-700 hover:bg-black/[0.06] hover:text-gray-900",
                ].join(" ")}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:50660161790"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F7931A] text-white px-4 py-2.5 text-sm lg:text-base font-semibold hover:brightness-110 transition"
          >
            <Phone size={18} /> 6016-1790
          </a>
          <a
            href="https://www.facebook.com/share/17E2cKtRX5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7931A] hover:text-[#d97706] transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookSquare size={28} />
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-lg hover:bg-black/[0.06] focus:outline-none"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden absolute inset-x-0 top-16 bg-white border-b border-black/10 shadow-lg">
          <ul className="px-4 py-3 space-y-1">
            {ITEMS.map((it) => (
              <li key={it.hash}>
                <Link
                  to={{ pathname: "/", hash: it.hash }}
                  onClick={(e) => handleClick(e, it.hash)}
                  className={[
                    "block px-3 py-3 rounded-lg text-base font-medium transition",
                    isActive(it.hash)
                      ? "text-gray-900 bg-black/[0.06]"
                      : "text-gray-700 hover:bg-black/[0.06] hover:text-gray-900",
                  ].join(" ")}
                >
                  {it.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 flex flex-col gap-2">
              <a
                href="tel:50660161790"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7931A] text-white px-4 py-3 text-base font-semibold hover:brightness-110 transition"
              >
                <Phone size={18} /> Llamar: 6016-1790
              </a>
              {/* Facebook debajo en móviles */}
              <a
                href="https://www.facebook.com/share/17E2cKtRX5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center text-[#F7931A] hover:text-[#d97706] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookSquare size={32} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
